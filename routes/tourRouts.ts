import express from 'express';
const path = require('path');
const fs = require('fs');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
} = require('../controlers/tourControler');

const routs = express.Router();
routs.route('/').get(getAllTours).post(createTour);
routs.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = routs;
