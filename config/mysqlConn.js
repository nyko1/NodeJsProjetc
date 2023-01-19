const mysql = require('mysql2')
const { env } = require('node:process')

const connection = mysql.createConnection({
  host: env.MYSQL_HOST,
  database: env.MYSQL_DB,
  user: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  port: env.MYSQL_PORT,
})

module.exports = connection
