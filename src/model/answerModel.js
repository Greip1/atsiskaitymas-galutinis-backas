/* eslint-disable max-len */
/* eslint-disable camelcase */
const { executeDb } = require('../utils/helper');

// AND SELECT question FROM klausimai WHERE klausimai.q_id = ${q_id}
// `SELECT * FROM atsakymai AND klausimai LEFT JOIN atsakymai ON atsakymai.q_id = klausimai.q_id WHERE atsakymai.q_id = ${q_id} ORDER BY  klausimai.q_id`

// --------------------------
function getAllAnswersDb(q_id) {
  const sql = `SELECT * FROM atsakymai JOIN klausimai ON klausimai.q_id = atsakymai.q_id WHERE atsakymai.q_id = ${q_id} `;
  return executeDb(sql, []);
}

function getUserAnswersDb(user_id) {
  const sql = `SELECT * FROM atsakymai WHERE archivedA = 0 AND user_id = ${user_id} `;
  return executeDb(sql, []);
}

function postAnswerDb(q_id, answer, user_id) {
  const sql = 'INSERT INTO atsakymai (q_id, answer, user_id) VALUES (?,?,?)';
  return executeDb(sql, [q_id, answer, user_id]);
}

function editAnswerDb(answer, a_id) {
  const sql = `UPDATE atsakymai SET answer = (?), isEditedA = 1 WHERE atsakymai.a_id = ${a_id} `;
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
  getUserAnswersDb,
};
