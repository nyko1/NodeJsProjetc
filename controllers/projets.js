const db = require('../config/mysqlConn')

let sql

exports.post = (req, res) => {
  const { projet_description, sous_programme_id } = req.body
  sql =
    'INSERT INTO projets (projet_description, sous_programme_id) VALUES (?, ?)'
  db.execute(sql, [projet_description, sous_programme_id], (err, results) => {
    if (err) {
      res.status(400).json(err)
    }
    res.status(200).json(results)
  })
}

exports.getAll = (req, res) => {
  sql = 'SELECT * FROM projets'
  db.query(sql, (err, results) => {
    if (err) {
      res.status(400).json(err)
    }
    res.status(200).json(results)
  })
}
