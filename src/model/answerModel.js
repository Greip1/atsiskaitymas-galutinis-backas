/* eslint-disable camelcase */
const { executeDb } = require('../utils/helper');

// --------------------------
function getAllAnswersDb(q_id) {
  const sql = `SELECT * FROM atsakymai WHERE atsakymai.q_id = ${q_id}`;
  return executeDb(sql, []);
}

function postAnswerDb(q_id, answer, user_id) {
  const sql = 'INSERT INTO atsakymai (q_id, answer, user_id) VALUES (?,?,?)';
  return executeDb(sql, [q_id, answer, user_id]);
}

function editAnswerDb(answer, a_id) {
  const sql = `UPDATE atsakymai SET answer = (?) WHERE atsakymai.a_id = ${a_id} `;
  return executeDb(sql, [answer]);
}

function deleteAnswerDb(a_id) {
  const sql = `UPDATE atsakymai SET archivedA = 1 WHERE atsakymai.a_id = ${a_id} `;
  return executeDb(sql, []);
}
module.exports = {
  getAllAnswersDb,
  postAnswerDb,
  editAnswerDb,
  deleteAnswerDb,
};
