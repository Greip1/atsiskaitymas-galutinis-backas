const express = require('express');
const { validateToken } = require('../middleWare');
const { getAllQuestions, postQuestion } = require('../controller/questionController');

const questionRoute = express.Router();

questionRoute.get('/questions', getAllQuestions);

questionRoute.post('/questions', validateToken, postQuestion);

module.exports = questionRoute;
