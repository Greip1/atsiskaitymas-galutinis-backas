/* eslint-disable camelcase */
const {
  getAllAnswersDb,
  postAnswerDb,
  editAnswerDb,
  deleteAnswerDb,
} = require('../model/answerModel');

// ------------------------------------------
async function getAllAnswers(req, res) {
  const { q_id } = req.params;

  try {
    const questArr = await getAllAnswersDb(q_id);
    res.json(questArr);
  } catch (error) {
    console.log('error in getting Answer route ===', error);
    res.sendStatus(500);
  }
}

async function postAnswer(req, res) {
  const { answer, user_id } = req.body;
  const { q_id } = req.params;

  try {
    const saveResult = await postAnswerDb(q_id, answer, user_id);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Answer successfully added');
      return;
    }
    res.status(400).json('Error in adding new Answer ');
  } catch (error) {
    console.log('POST /Answer ===', error);

    res.sendStatus(500);
  }
}
async function editAnswer(req, res) {
  const { answer } = req.body;
  const { a_id } = req.params;
  console.log('req.body', req.body);
  console.log('req.params', req.params);

  try {
    const saveResult = await editAnswerDb(answer, a_id);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Answer successfully updated');
      return;
    }
    res.status(400).json('Error in updating Answer ');
  } catch (error) {
    console.log('patch /Answer ===', error);

    res.sendStatus(500);
  }
}
async function deleteAnswer(req, res) {
  const { a_id } = req.params;

  try {
    const saveResult = await deleteAnswerDb(a_id);
    if (saveResult.affectedRows === 1) {
      res.status(201).json('Answer successfully archived');
      return;
    }
    res.status(400).json('Error in archiving Answer ');
  } catch (error) {
    console.log('patch /Answer ===', error);

    res.sendStatus(500);
  }
}

module.exports = {
  getAllAnswers,
  postAnswer,
  editAnswer,
  deleteAnswer,
};
