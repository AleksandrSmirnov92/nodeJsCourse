import express from 'express'; /** Подключаем экспресс*/
const fs = require('fs');
const app = express(); /**вызываем метод экспресс */
app.use(express.json());
/**создаем url запрос  всегда принимает два параметра request  response*/
// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'hello this is response server', app: 'notours' });
//   //  .send(
//   //    'hello this is response server'
//   //  ); /**сдесь мы отправили ответ и статус состояния обратно пользователю */
// });
// app.post('/post', (req, res) => {
//   res.send('you caun post url');
// });

const toursjson = JSON.parse(
  fs.readFileSync(`${__dirname}/text/tourssimple.json`)
);
app.get('/api/v1/tours', (req, res) => {
  //**получаем данные */
  res.status(200).json({
    status: 'success',
    results: toursjson.length,
    data: {
      tours: toursjson,
    },
  });
});
app.post('/api/v1/tours', (req, res) => {
  //отправляем данные ,добовляем новый тур для этого мы теперь используем request чтобы
  // чтобы добвать запрос мы должны добавить промежуточное окружение app.use(express.json())
  const newId = toursjson[toursjson.length - 1].id + 1;
  const newObj = Object.assign({ id: newId }, req.body);
  toursjson.push(newObj);
  fs.writeFile(
    `${__dirname}/text/tourssimple.json`,
    JSON.stringify(toursjson),
    (err: Error) => {
      res.status(201).json({
        status: 'success',
        data: {
          tours: newObj,
        },
      });
    }
  );
  console.log(req.body);
  // res.send('done');
});
const port = 3000; /**создаем порт на котором будет работать сервер  */
app.listen(port, () => {
  /**говорим слушать этот сервер  */
  console.log(`this port listening on port ${port}`);
});
