const express = require('express');
const { validateToken } = require('../middleWare');
const {
  getAllQuestions,
  postQuestion,
  editQuestion,
  deleteQuestion,
  getOneQuestion,
  getUserQuestions,
} = require('../controller/questionController');

const questionRoute = express.Router();

questionRoute.get('/questions', getAllQuestions);

questionRoute.get('/questions/:q_id', getOneQuestion);

questionRoute.get('/questions/user/:user_id', getUserQuestions);

questionRoute.post('/questions', validateToken, postQuestion);

questionRoute.patch('/questions/:q_id', validateToken, editQuestion);

questionRoute.delete('/questions/:q_id', validateToken, deleteQuestion);

module.exports = questionRoute;
