import { Application } from 'express'
import { createGroup } from '../controller/group';

export default (app: Application) => {
  app
    .post('/group/create', createGroup)
}