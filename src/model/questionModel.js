/* eslint-disable camelcase */
const { executeDb } = require('../utils/helper');

// --------------------------
function getAllQuestionsDb() {
  const sql = 'SELECT * FROM klausimai';
  return executeDb(sql, []);
}

function postQuestionDb(q_title, question, user_id) {
  const sql = 'INSERT INTO klausimai (q_title, question, user_id) VALUES (?,?,?)';
  return executeDb(sql, [q_title, question, user_id]);
}

function editQuestionDb(question, q_id) {
  const sql = `UPDATE klausimai SET question = (?) WHERE klausimai.q_id = ${q_id}`;
  return executeDb(sql, [question]);
}

function deleteQuestion() {
  const sql = '';
  return executeDb(sql, []);
}
module.exports = {
  getAllQuestionsDb,
  postQuestionDb,
  editQuestionDb,
  deleteQuestion,
};
