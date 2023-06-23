const port = process.env.PORT || 5000;
const dbUser = process.env.DATABASE_USER || "nill user"
const dbHost = process.env.DATABASE_HOST || "nill hoset"
const dbPort = process.env.DATABASE_PORT || "nill port"
const dbPassword = process.env.DATABASE_PASSWORD || "nill password"



const configsData = {
  port,
  database_crendetials : {
    user : dbUser,
    host : dbHost,
    port : dbPort,
    password : dbPassword
  }
};

module.exports = {configsData};
