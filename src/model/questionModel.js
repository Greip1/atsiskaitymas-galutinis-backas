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
module.exports = {
  getAllQuestionsDb,
  postQuestionDb,
};
