import notificationSchema from "../models/notification";
import { Rabbitmq } from './rabbitmq'
import { findByIds } from "./user";
import { getGroup } from "./group";


export const create = async (notificationObj) => {
  return await notificationSchema.create(notificationObj);
}

export const sendNotification = async (doc) => {
  let users = [];
  if (doc.type === 'PERSONAL') {
    users = await findByIds(doc.receivers)
  }

  if (doc.type === 'GROUP') {
    const group = await getGroup(doc.receivers);
    users = await findByIds(group.users);
  }
  
  const mq = await Rabbitmq.getInstance()
  users.map(user => {
    mq.sendToQueue(doc.medium, Buffer.from(JSON.stringify({ doc, user })))
  })
}