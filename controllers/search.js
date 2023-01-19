const axios = require('axios').default

const getUserByName = async (req, res) => {
  try {
    const { data } = await axios.post(
      'http://192.168.252.203:8096/participants',
      {
        page: 0,
        size: 224,
        recherche: req.body.recherche || '',
        departementCode: 'string',
        programmes: ['string'],
      }
    )
    res.status(200).json(data)
  } catch (err) {
    res.status(400).json(err)
  }
}

module.exports = { getUserByName }
