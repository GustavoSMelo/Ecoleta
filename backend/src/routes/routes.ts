import express, { Request, Response } from 'express'
import itemsController from '../controllers/itemController'
import EcoPointsController from '../controllers/ecoPointsController'

const routes = express.Router()

// ecopoints routes
routes.post('/ecopoints', EcoPointsController.store)
routes.get('/ecopoints', EcoPointsController.index)
routes.get('/ecopoint', EcoPointsController.show)
routes.get('/ecopoints/filter', EcoPointsController.index_show)
// items routes
routes.get('/items', itemsController.index)

export default routes
