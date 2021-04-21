import { Application } from 'express'
import { createNotification } from '../controller/notification'

export default (app: Application) => {
  app.post('/notification/create', createNotification)
}