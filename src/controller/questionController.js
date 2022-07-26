/* eslint-disable camelcase */
const { getAllQuestionsDb, postQuestionDb } = require('../model/questionModel');

// ------------------------------------------
async function getAllQuestions(req, res) {
  try {
    const questArr = await getAllQuestionsDb();
    res.json(questArr);
  } catch (error) {
    console.log('error in getting Question route ===', error);
    res.sendStatus(500);
  }
}

async function postQuestion(req, res) {
  const { q_title, question, user_id } = req.body;

  try {
    const saveResult = await postQuestionDb(q_title, question, user_id);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Question successfully added');
      return;
    }
    res.status(400).json('Error in adding new Question ');
  } catch (error) {
    console.log('POST /Question ===', error);

    res.sendStatus(500);
  }
}

module.exports = {
  getAllQuestions,
  postQuestion,
};
