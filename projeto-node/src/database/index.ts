import {DataSource} from 'typeorm';
import config from '../../ormconfig.json';

export default new DataSource({
  type: config.type as 'postgres',
  host: config.host,
  port: config.port,
  username: config.username,
  password: config.password,
  database: config.database,
  migrations: config.migrations
})