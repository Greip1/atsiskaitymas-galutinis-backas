const express = require('express');
const { validateToken } = require('../middleWare');
const {
  getAllQuestions,
  postQuestion,
  editQuestion,
} = require('../controller/questionController');

const questionRoute = express.Router();

questionRoute.get('/questions', getAllQuestions);

questionRoute.post('/questions', validateToken, postQuestion);

questionRoute.patch('/questions/:q_id', validateToken, editQuestion);

module.exports = questionRoute;
