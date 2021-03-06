import express from 'express'
import Routes from './routes/routes'
import path from 'path'
import cors from 'cors'

const app = express()

class EcoletaIndex {
  Config() {
    app.use(cors())
    app.use(express.json())
    app.use(Routes)
    app.use('/photos', express.static(path.resolve(__dirname, '..', 'uploads')))
    app.use('/images', express.static(path.resolve(__dirname, '..', 'assets')))
  }

  Server(server: number = 3333) {
    this.Config()
    app.listen(server, () =>
      console.log(`Server is running in port: http://localhost:${server}`)
    )
  }
}

const EI = new EcoletaIndex()
EI.Server()
