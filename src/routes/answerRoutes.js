const express = require('express');
const { validateToken } = require('../middleWare');
const {
  getAllAnswers,
  postAnswer,
  editAnswer,
  deleteAnswer,
} = require('../controller/AnswerController');

const answerRoute = express.Router();

answerRoute.get('/questions/:q_id/answers', getAllAnswers);

answerRoute.post('/questions/:q_id/answers', validateToken, postAnswer);

answerRoute.patch('/answers/:a_id', validateToken, editAnswer);

answerRoute.delete('/answers/:a_id', validateToken, deleteAnswer);

module.exports = answerRoute;
