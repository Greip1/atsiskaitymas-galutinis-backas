/* eslint-disable camelcase */
const {
  getAllQuestionsDb,
  postQuestionDb,
  editQuestionDb,
  deleteQuestionDb,
  getOneQuestionDb,
  getUserQuestionsDb,
} = require('../model/questionModel');

async function getOneQuestion(req, res) {
  const { q_id } = req.params;

  try {
    const questArr = await getOneQuestionDb(q_id);
    res.json(questArr);
  } catch (error) {
    res.sendStatus(500);
  }
}
async function getUserQuestions(req, res) {
  const { user_id } = req.params;

  try {
    const questArr = await getUserQuestionsDb(user_id);
    res.json(questArr);
  } catch (error) {
    res.sendStatus(500);
  }
}
async function getAllQuestions(req, res) {
  try {
    const questArr = await getAllQuestionsDb();
    res.json(questArr);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function postQuestion(req, res) {
  const { q_title, question, user_id } = req.body;

  try {
    const saveResult = await postQuestionDb(q_title, question, user_id);
    if (saveResult.affectedRows === 1) {
      res.status(201).json({ succes: 'Question successfully added' });
      return;
    }
    res.status(400).json({ err: 'Error in adding new Question ' });
  } catch (error) {
    res.sendStatus(500);
  }
}
async function editQuestion(req, res) {
  const { question } = req.body;
  const { q_id } = req.params;

  try {
    const saveResult = await editQuestionDb(question, q_id);
    if (saveResult.affectedRows === 1) {
      res.status(201).json({ succes: 'Question successfully updated' });
      return;
    }
    res.status(400).json({ err: 'Error in updating  Question ' });
  } catch (error) {
    res.sendStatus(500);
  }
}
async function deleteQuestion(req, res) {
  const { q_id } = req.params;

  try {
    const saveResult = await deleteQuestionDb(q_id);
    if (saveResult.affectedRows === 1) {
      res.status(201).json({ succes: 'Question successfully deleted' });
      return;
    }
    res.status(400).json({ err: 'Error in deleting  Question ' });
  } catch (error) {
    res.sendStatus(500);
  }
}

module.exports = {
  getAllQuestions,
  getOneQuestion,
  postQuestion,
  editQuestion,
  deleteQuestion,
  getUserQuestions,
};
