import 'reflect-metadata'
import { getConnection, createConnection } from 'typeorm'
import { Request, Response } from 'express'
import ConnectionConfig from '../config/connection'

class ItemController {
  index(req: Request, res: Response) {
    createConnection(ConnectionConfig)
      .then((connection) => {
        res.send({ Connectei: true })
        return getConnection().close()
      })
      .catch((err) => {
        res.json({ Connectei: false })
        console.log(err)
      })
  }
}

export default new ItemController()
