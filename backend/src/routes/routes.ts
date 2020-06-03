import express, { Request, Response } from 'express'
import itemsController from '../controllers/itemController'
const routes = express.Router()

routes.get('/', (req: Request, res: Response) => {
  return res.json('hello world')
})

routes.get('/items', itemsController.index)

export default routes
