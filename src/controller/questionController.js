/* eslint-disable camelcase */
const {
  getAllQuestionsDb,
  postQuestionDb,
  editQuestionDb,
} = require('../model/questionModel');

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
async function editQuestion(req, res) {
  const { question } = req.body;
  const { q_id } = req.params;
  console.log('q_id', q_id);
  console.log('req.body', req.body);

  try {
    const saveResult = await editQuestionDb(question, q_id);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Question successfully updated');
      return;
    }
    res.status(400).json('Error in updating Question ');
  } catch (error) {
    console.log('patch /Question ===', error);

    res.sendStatus(500);
  }
}

module.exports = {
  getAllQuestions,
  postQuestion,
  editQuestion,
};
