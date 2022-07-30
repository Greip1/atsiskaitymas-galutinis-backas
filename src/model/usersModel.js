const { executeDb } = require('../utils/helper');

function getAllUsersDb() {
  const sql = 'SELECT * FROM users';
  return executeDb(sql, []);
}
function addUserToDb(username, email, password) {
  const sql = `
    INSERT INTO users(username, email, password)
    VALUES (?, ?)
    `;
  return executeDb(sql, [username, email, password]);
}
function registerUserDb(username, email, password) {
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  return executeDb(sql, [username, email, password]);
}
function findUserByEmail(email) {
  const sql = 'SELECT * FROM users WHERE email = ?';
  return executeDb(sql, [email]);
}
module.exports = {
  getAllUsersDb,
  addUserToDb,
  registerUserDb,
  findUserByEmail,
  executeDb,
};
