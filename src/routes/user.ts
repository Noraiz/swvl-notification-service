import { Application } from 'express'
import { createUser, getUser } from '../controller/user';

export default (app: Application) => {
  app
    .post('/user/create', createUser)
    .post('/user/find-by-ids', getUser)
}