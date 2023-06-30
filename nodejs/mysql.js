const mysql = require('mysql');
const {dbConnectionOptions} = require('./config');




const autoCreateDb = () => {
  const connection = mysql.createConnection(dbConnectionOptions);

  const connectToDatabase = () => {
    connection.connect((err) => {
      if (err) {
        console.log({
          error : "Error connecting to database, Retrying...",
          message : err
        });
        setTimeout(connectToDatabase, 5000); // Retry after 3 seconds
      } else {
        console.log('Database connection successful');
        createDatabase();
      }
    });
  };

  const createDatabase = () => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbConnectionOptions.name} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`, (err) => {
      connection.end();

      if (err) {
        console.log('Unable to create databases.', err.message, err.stack);
      } else {
        console.log('Database creation successful');
      } 
    });
  };

  connectToDatabase();  
};

module.exports = {
  autoCreateDb,
};
