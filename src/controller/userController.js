/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
const { getAllUsersDb, registerUserDb, findUserByEmail } = require('../model/usersModel');

const { hashPassword, passwordsMatch, generateToken } = require('../utils/helper');

async function getUsers(req, res) {
  try {
    const usersArr = await getAllUsersDb();
    res.json(usersArr);
  } catch (error) {
    res.sendStatus(500);
  }
}
async function regUser(req, res) {
  const { username, email, password } = req.body;
  const newPassword = hashPassword(password);
  try {
    const savedRes = await registerUserDb(username, email, newPassword);
    if (savedRes.affectedRows === 1) {
      res.status(201).json({ msg: 'New user created', changes: 1 });
      return;
    }
    res.status(400).json({ err: 'No user was created', changes: 0 });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(400).json('This user alredy exists');
      return;
    }

    res.status(500).json({ err: 'No user was created', changes: 0 });
  }
}

async function loginUser(req, res) {
  const gotEmail = req.body.email;
  const gotPassword = req.body.password;

  const foundUserArr = await findUserByEmail(gotEmail);
  const foundUser = foundUserArr[0];
  if (!foundUser) {
    res.status(400).json({ err: 'This email or password was not found' });
    return;
  }
  if (!passwordsMatch(gotPassword, foundUser.password)) {
    res.status(400).json({ err: 'This email or password was not found' });
    return;
  }
  const payload = { userId: foundUser.id };
  const { username, user_id } = foundUser;
  const token = generateToken(payload);
  res.json({ success: true, token, username, user_id });
}

module.exports = {
  getUsers,
  regUser,
  loginUser,
};
