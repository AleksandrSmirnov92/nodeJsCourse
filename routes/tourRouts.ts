import express from 'express';
const path = require('path');
const fs = require('fs');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  checkID,
  checkBody,
} = require('../controlers/tourControler');

const routs = express.Router();
routs.param('id', checkID);
routs.route('/').get(getAllTours).post(checkBody, createTour);
routs.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = routs;
