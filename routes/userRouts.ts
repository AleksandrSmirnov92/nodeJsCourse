import express from 'express';
const usersRoute = express.Router();
const path = require('path');
const fs = require('fs');
const usersjson = JSON.parse(
  fs.readFileSync(`${path.join(__dirname, '../../dev-data', '/user.json')}`)
);
const getAllUsers = (req: any, res: any) => {
  res.status(200).json({
    status: 'success',
    requestedaAt: req.requestTime,
    results: usersjson.length,
    data: usersjson,
  });
};
const createUsers = (req: any, res: any) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
};
const getUser = (req: any, res: any) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
};
const updateUser = (req: any, res: any) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
};
const deleteUser = (req: any, res: any) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
};
const routs = express.Router();
routs.route('/').get(getAllUsers).post(createUsers);
routs.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = routs;
