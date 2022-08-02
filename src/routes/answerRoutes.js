const express = require('express');
const { validateToken } = require('../middleWare');
const {
  getAllAnswers,
  postAnswer,
  editAnswer,
  deleteAnswer,
  getUserAnswers,
  getAllUsersAnswers,
  getJoined,
  addLike,
  minusLike,
} = require('../controller/answerController');

const answerRoute = express.Router();

answerRoute.get('/answers/joined/:q_id', getJoined);

answerRoute.get('/answersAll', getAllUsersAnswers);

answerRoute.get('/questions/:q_id/answers', getAllAnswers);

answerRoute.get('/answers/user/:user_id', getUserAnswers);

answerRoute.post('/questions/:q_id/answers', validateToken, postAnswer);

answerRoute.patch('/answers/:a_id', validateToken, editAnswer);

answerRoute.delete('/answers/:a_id', validateToken, deleteAnswer);

answerRoute.patch('/answers/addLike/:a_id', validateToken, addLike);

answerRoute.patch('/answers/minusLike/:a_id', validateToken, minusLike);

module.exports = answerRoute;
