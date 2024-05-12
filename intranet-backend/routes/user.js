var express = require('express')
const connection = require('../data/db')

var router = express.Router()

const db = require("../data/db")

router.get("/list", (req, res) => {
   connection.query('SELECT * FROM user_tb', (e, results, fields) => {
      if (e) {
         console.error('Fail to Search:', e)
      } else {
         console.log(results.map(user => user.name))
         res.send(`<h1>Hello USER LIST!!! ${results.map(user => user.name)}</h1>`)
      }
   })
})

router.post("/add", (req, res) => {
   res.send("")
})

router.patch("/update", (req, res) => {
   res.send("")
})

router.delete("/delete", (req, res) => {
   res.send("")
})

module.exports = router