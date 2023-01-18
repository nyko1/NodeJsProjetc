// const db = require('../config/mysqlConn')
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))

const getUserByName = async (req, res) => {
  try {
    const res = await fetch('http://192.168.252.203:8096/participants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page: 0,
        size: 224,
        recherche: req.body?.recherche || '',
        departementCode: 'string',
        programmes: ['string'],
      }),
    }).then((data) => {
      return data.json()
    })
    res.status(200).json(res)
  } catch (err) {
    res.status(400).json(err)
  }
}

module.exports = { getUserByName }
