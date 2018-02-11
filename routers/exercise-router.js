const express = require('express')
const router = express.Router();
const exerciseController = require('../controller/exercise-controller')

router.get('/exercise/?', function(req, res){
  res.send(exerciseController.listExercises())
})

router.get('/exercise/:id/?', function(req, res){
  var id = req.params.id
  res.send(exerciseController.getExercise(id))
})

module.exports = router;