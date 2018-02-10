const express = require('express')
const router = express.Router();

router.get('/exercise/?', function(req, res){
  res.send('exercise one')
})

router.get('/exercise/:id/?', function(req, res){
  res.send('exercise ' + req.params.id)
})

module.exports = router;