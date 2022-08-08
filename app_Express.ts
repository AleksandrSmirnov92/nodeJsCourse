import express from 'express'; /** Подключаем экспресс*/
const path = require('path');
const morgan = require('morgan');
const fs = require('fs');
const toursRoute = require('./routes/tourRouts');
const usersRoute = require('./routes/userRouts');
const app = express(); /**вызываем метод экспресс */
// 1) MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  console.log('hello from middleware');
  next();
});

app.use((req: any, res, next) => {
  req.requestTime = new Date().toDateString();
  next();
});
// 2)ROUTES HANDLERS
// USERS
// 3 ROUTES
// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.use('/api/v1/tours', toursRoute);
app.use('/api/v1/users', usersRoute);

// 4) START SERVER
const port = 3000; /**создаем порт на котором будет работать сервер  */
app.listen(port, () => {
  /**говорим слушать этот сервер  */
  console.log(`this port listening on port ${port}`);
});
