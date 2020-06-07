import express from 'express'
import itemsController from '../controllers/itemController'
import EcoPointsController from '../controllers/ecoPointsController'
import multer from 'multer'
import multerConfig from '../config/multer'

const routes = express.Router()
const uploads = multer(multerConfig)

// ecopoints routes
routes.post('/ecopoints', uploads.single('image'), EcoPointsController.store)
routes.get('/ecopoints', EcoPointsController.index)
routes.get('/ecopoint', EcoPointsController.show)
routes.get('/ecopoints/filter', EcoPointsController.index_show)
// items routes
routes.get('/items', itemsController.index)

export default routes
