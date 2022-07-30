/* eslint-disable camelcase */
const { executeDb } = require('../utils/helper');

function getOneQuestionDb(q_id) {
  const sql = `SELECT * FROM klausimai WHERE q_id = ${q_id}`;
  return executeDb(sql, []);
}
function getUserQuestionsDb(user_id) {
  const sql = `SELECT * FROM klausimai WHERE user_id = ${user_id}  AND archivedQ = 0`;
  return executeDb(sql, []);
}
function getAllQuestionsDb() {
  const sql = 'SELECT * FROM klausimai WHERE  archivedQ = 0';
  return executeDb(sql, []);
}

function postQuestionDb(q_title, question, user_id) {
  const sql = 'INSERT INTO klausimai (q_title, question, user_id) VALUES (?,?,?)';
  return executeDb(sql, [q_title, question, user_id]);
}

function editQuestionDb(question, q_id) {
  const sql = `UPDATE klausimai SET question = (?), isEdited = 1  WHERE klausimai.q_id = ${q_id}`;
  return executeDb(sql, [question]);
}

function deleteQuestionDb(q_id) {
  const sql = `UPDATE klausimai SET archivedQ = 1 WHERE klausimai.q_id = ${q_id}`;
  return executeDb(sql, []);
}
module.exports = {
  getAllQuestionsDb,
  getOneQuestionDb,
  postQuestionDb,
  editQuestionDb,
  deleteQuestionDb,
  getUserQuestionsDb,
};
