const db = require('../config/mysqlConn')

let sql

const getAll = (req, res) => {
  sql = `SELECT * FROM participants`
  db.query(sql, (err, results) => {
    if (err) {
      res.status(400).json(err)
    }
    res.status(200).json(results)
  })
}

module.exports = { getAll }
