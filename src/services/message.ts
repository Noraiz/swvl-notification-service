export const sendSMS = (receivers: string[], text: string) => {
  // Sms services like Twillio can be used
  return new Promise((resolve, _reject) => {
    resolve(
      console.log(`Sms text:${text} delivered to:${receivers}`)
    )
  })
}

export const sendEmail = (receivers: string[], subject: string, body: string) => {
  // email services like SendGrid, nodemailer can be used
  return new Promise((resolve, _reject) => {
    resolve(
      console.log(`Email sent!\nSubject:${subject} Body:${body}  delivered to:${receivers}`)
    )
  })
}

export const pushNotification = (receivers: string[], subject: string, body: string) => {
  // push notification services like google FCM can be used here 
  return new Promise((resolve, _reject) => {
    resolve(
      console.log(`Push notification sent!\nSubject:${subject} Body:${body}  delivered to:${receivers}`)
    )
  })
}