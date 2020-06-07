import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { EcoPoints } from '../database/entity/ecoPoints'
import { Request, Response } from 'express'
import ConnectionConfig from '../config/connection'

class EcoPointsController {
  async store(req: Request, res: Response) {
    try {
      const connection = await createConnection(ConnectionConfig)
      const ecoPointsRepository = connection.getRepository('eco_points')
      /* eslint-disable camelcase */
      const ecopoint_itemRepository = connection.getRepository('ecopoint_item')
      const ecopoint = new EcoPoints()
      const {
        name,
        uf,
        city,
        email,
        whatsapp,
        latitude,
        longitude,
        items
      } = req.body

      const image = req.file.filename

      ecopoint.city = city
      ecopoint.uf = uf
      ecopoint.email = email
      ecopoint.image = image
      ecopoint.latitude = latitude
      ecopoint.longitude = longitude
      ecopoint.name = name
      ecopoint.whatsapp = whatsapp

      console.log(ecopoint)

      const { id } = await ecoPointsRepository.save(ecopoint)
      res.json({ message: 'success to create a new ecopoint :) ' })

      /* eslint-disable camelcase */
      const ecopoints_item = items.split(',').map((item: string) => Number(item.trim())).map((item: number) => {
        return {
          item,
          ecopoint: id
        }
      })

      await ecopoint_itemRepository.save(ecopoints_item)
      return connection.close()
    } catch (err) {
      return res.send('connection lost')
    }
  }

  async index(req: Request, res: Response) {
    try {
      const connection = await createConnection(ConnectionConfig)
      const eco_pointsRepository = connection.getRepository('eco_points')

      const allEcopoints = await eco_pointsRepository.find()

      res.json(allEcopoints)

      return connection.close()
    } catch (err) {
      return res.send('connection lost')
    }
  }

  async show(req: Request, res: Response) {
    try {
      const connection = await createConnection(ConnectionConfig)
      const eco_pointsRepository = connection.getRepository('eco_points')

      const { id } = req.headers

      const only_one_eco_point = await eco_pointsRepository.findOne(id)
      res.json(only_one_eco_point)

      return connection.close()
    } catch (err) {
      return res.send('connection lost')
    }
  }

  async index_show(req: Request, res: Response) {
    try {
      const connection = await createConnection(ConnectionConfig)
      const eco_pointsRepository = connection.getRepository('eco_points')

      const { uf, city } = req.headers
      console.log(uf)
      console.log(city)

      const points = await eco_pointsRepository.find({ city, uf })

      res.json(points)

      return connection.close()
    } catch (err) {
      return res.send('connection lost')
    }
  }
}

export default new EcoPointsController()
