import express from 'express';

const usersRoute = express.Router();
const fs = require('fs');
const {
  getAllUsers,
  createUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controlers/userControler');

const routs = express.Router();
routs.route('/').get(getAllUsers).post(createUsers);
routs.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = routs;
