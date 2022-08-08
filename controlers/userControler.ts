import path from 'path';
const fs = require('fs');
const usersjson = JSON.parse(
  fs.readFileSync(`${path.join(__dirname, '../../dev-data', '/user.json')}`)
);
exports.getAllUsers = (req: any, res: any) => {
  res.status(200).json({
    status: 'success',
    requestedaAt: req.requestTime,
    results: usersjson.length,
    data: usersjson,
  });
};
exports.createUsers = (req: any, res: any) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
};
exports.getUser = (req: any, res: any) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
};
exports.updateUser = (req: any, res: any) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
};
exports.deleteUser = (req: any, res: any) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
};
