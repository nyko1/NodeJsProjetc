const db = require('../config/mysqlConn')

let sql

const post = (req, res) => {
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

const getAll = (req, res) => {
  sql = 'SELECT * FROM projets'
  db.query(sql, (err, results) => {
    if (err) {
      res.status(400).json(err)
    }
    res.status(200).json(results)
  })
}

const getOne = (req, res) => {
  sql = `SELECT projets.projet_description, projets.projet_description_longue, projets.projet_img, equipes.equipe_id, 
  participants.participant_id FROM projets, equipes, participants 
  WHERE equipes.equipe_id = projets.equipe_id AND equipes.equipe_id = participants.equipe_id AND projets.projet_id = ?`
  db.execute(sql, [req.params.id], (err, results) => {
    if (err) {
      res.status(400).json(err)
    }
    res.status(200).json(results)
  })
}

const getByProgram = (req, res) => {
  sql = `SELECT projet_description, projet_img
   FROM projets WHERE sous_programme_id = ?`
  db.execute(sql, [req.params.id], (err, results) => {
    if (err) {
      res.status(400).json(err)
    }
    res.status(200).json(results)
  })
}

module.exports = { post, getAll, getOne, getByProgram }
