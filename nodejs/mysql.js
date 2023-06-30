const mysql = require('mysql');
const { dbConnectionOptions } = require('./config');

const autoCreateDb = () => {
  const connection = mysql.createConnection(dbConnectionOptions);

  const connectToDatabase = () => {
    connection.connect((err) => {
      if (err) {
        console.log({
          error: 'Error connecting to database, Retrying...',
          message: err,
        });
        setTimeout(connectToDatabase, 5000); // Retry after 5 seconds
      } else {
        console.log('Database connection successful');
        createDatabase();
      }
    });
  };

};

module.exports = {
  autoCreateDb,
};
