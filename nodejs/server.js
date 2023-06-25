/* istanbul ignore file */
require('module-alias/register');
const dotenv = require('dotenv');
const errorHandler = require('errorhandler');
const { createConnection } = require('typeorm');
const dbConnection = require('./typeorm');
const { autoCreateDb } = require('./mysql');
const app = require('./app');

dotenv.config();

app.use(errorHandler());

(async () => {
  await autoCreateDb(); 
  await createConnection(dbConnection)
    .then(() => {
      // Initialize server
      const port = process.env.PORT || process.env.APP_PORT || 8000;
      const server = app.listen(port, () => {
        console.log(`Service Started at http://localhost:${port}`);
        console.log('Press CTRL+C to stop\n');
      });

      // Nodemon dev hack
      process.once('SIGUSR2', () => {
        server.close(() => {
          process.kill(process.pid, 'SIGUSR2');
        });
      });
    })
    .catch(error => {
      console.error('(TypeORM) Database connection error: ', error);
    });
})();
