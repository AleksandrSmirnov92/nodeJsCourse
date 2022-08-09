import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
const appp = require('./app_Express');
const portt =
  process.env.PORT || 3000; /**создаем порт на котором будет работать сервер  */
// console.log(appp.get('env'));
// console.log(process.env);
appp.listen(portt, () => {
  /**говорим слушать этот сервер  */
  console.log(`this port listening on port ${portt}`);
});
