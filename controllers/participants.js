<<<<<<< HEAD
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
=======
const axios = require('axios').default

const getAll = async (req, res) => {
  try {
    const { data } = await axios.post(
      'http://192.168.252.203:8096/participants',
      {
        page: 0,
        size: 224,
        recherche: 'string',
        departementCode: 'string',
        programmes: ['string'],
      }
    )
    res.status(200).json(data)
  } catch (err) {
    res.status(400).json(err)
  }
>>>>>>> 34fee0d6cf0dd70bee30621f3f81d3858b4e0944
}

module.exports = { getAll }
