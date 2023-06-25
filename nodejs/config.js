const port = process.env.PORT || 5000;
const dbUser = process.env.DATABASE_USER || "nill user"
const dbHost = process.env.DATABASE_HOST || "nill hoset"
const dbPort = process.env.DATABASE_PORT || "nill port"
const dbPassword = process.env.DATABASE_PASSWORD || "nill password"



const dbConnectionOptions = {
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  name : process.env.DATABASE_NAME
}
module.exports = {dbConnectionOptions};
