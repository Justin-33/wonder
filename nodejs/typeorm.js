/* istanbul ignore file */
require('reflect-metadata');
const dotenv = require('dotenv');
const {dbConnectionOptions} = require('./config');



dotenv.config();


const connectionOpts = {
  type: 'mysql',
  host: dbConnectionOptions.host,
  port: dbConnectionOptions.port,
  username: dbConnectionOptions.user, 
  password: dbConnectionOptions.password,
  database: dbConnectionOptions.name,
  entities: [],
  synchronize: true,
  logging: true,
  migrationsRun: true,
  cli: { migrationsDir: './src/migrations' },
  charset: 'utf8mb4_unicode_ci',
};

module.exports = connectionOpts;
