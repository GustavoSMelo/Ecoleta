import path from 'path'
const config = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'ecoleta',
  entities: [path.resolve(__dirname, '..', 'database', 'entity', '*.ts')],
  synchronize: true
}

export default config
