import { Channel, connect } from "amqplib";
import { sendSMS, pushNotification, sendEmail } from "./message";

enum MessageMedium {
  SMS = "SMS",
  PUSH = "PUSH",
  EMAIL = "EMAIL",
}
export class Rabbitmq {

  private static instance: Channel;

  public static async getInstance(): Promise<Channel> {
    if (!Rabbitmq.instance) {
      Rabbitmq.instance = await (await connect(process.env.RABBIT_MQ_URL)).createChannel()
      for (const queue in MessageMedium) {
        const element = MessageMedium[queue];
        Rabbitmq.instance.assertQueue(element)
      }
      Rabbitmq.instance.prefetch(100)
      Rabbitmq.consumer()
    }
    return Rabbitmq.instance;
  }

  static async consumer() {
    Rabbitmq.instance.consume("SMS", (msg) => {
      const notification = JSON.parse(`${msg.content}`)
      sendSMS(notification.user.phoneNumber, `${notification.doc.subject}\n${notification.doc.text}`)
        .then(res => {
          Rabbitmq.instance.ack(msg)
        }).catch(err => Rabbitmq.instance.nack(msg))
    })

    Rabbitmq.instance.consume("EMAIL", (msg) => {
      const notification = JSON.parse(`${msg.content}`)
      sendEmail(notification.user.phoneNumber, notification.doc.subject, notification.doc.text).then(res => {
        Rabbitmq.instance.ack(msg)
      }).catch(err => Rabbitmq.instance.nack(msg))
    })

    Rabbitmq.instance.consume("PUSH", (msg) => {
      const notification = JSON.parse(`${msg.content}`)
      pushNotification(notification.user.phoneNumber, notification.doc.subject, notification.doc.text).then(res => {
        Rabbitmq.instance.ack(msg)
      }).catch(err => Rabbitmq.instance.nack(msg))
    })
  }
}