import express from 'express'; /** Подключаем экспресс*/

const app = express(); /**вызываем метод экспресс */
/**создаем url запрос  всегда принимает два параметра request  response*/
app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'hello this is response server', app: 'notours' });
  //  .send(
  //    'hello this is response server'
  //  ); /**сдесь мы отправили ответ и статус состояния обратно пользователю */
});
app.post('/post', (req, res) => {
  res.send('you caun post url');
});
const port = 3000; /**создаем порт на котором будет работать сервер  */
app.listen(port, () => {
  /**говорим слушать этот сервер  */
  console.log(`this port listening on port ${port}`);
});
