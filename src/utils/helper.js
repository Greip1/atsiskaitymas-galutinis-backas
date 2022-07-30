require('dotenv').config();
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { dbConfig } = require('../config');

async function executeDb(sql, dataToDBArr = []) {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    const [result] = await conn.execute(sql, dataToDBArr);
    return result;
  } catch (error) {
    throw new Error('Error in executeDb!!', error);
  } finally {
    conn?.end();
  }
}

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function passwordsMatch(givenPassword, hashedStored) {
  return bcrypt.compareSync(givenPassword, hashedStored);
}

function generateToken(payload) {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) throw new Error('generateJwtToken no secret');
  return jwt.sign(payload, jwtSecret, { expiresIn: '2h' });
}
module.exports = {
  executeDb,
  hashPassword,
  passwordsMatch,
  generateToken,
};
