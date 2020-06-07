import express from 'express'
import itemsController from '../controllers/itemController'
import EcoPointsController from '../controllers/ecoPointsController'
import multer from 'multer'
import multerConfig from '../config/multer'
import { celebrate } from 'celebrate'
import Joi from '@hapi/joi'

const routes = express.Router()
const uploads = multer(multerConfig)

// ecopoints routes
routes.post('/ecopoints', uploads.single('image'), celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required(),
    uf: Joi.string().required().max(2),
    city: Joi.string().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    items: Joi.string().required()
  })
}, { abortEarly: false }), EcoPointsController.store)
routes.get('/ecopoints', EcoPointsController.index)
routes.get('/ecopoint', EcoPointsController.show)
routes.get('/ecopoints/filter', EcoPointsController.index_show)
// items routes
routes.get('/items', itemsController.index)

export default routes
