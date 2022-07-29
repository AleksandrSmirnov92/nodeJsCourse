import { response } from "express";
import http from "http";
const EventEmitter = require("events"); /**покдлючаем */

const myEmitter = new EventEmitter(); /**создаем */
const server = http.createServer();
server.on("request", (request, response) => {
  console.log("Сервер перезагрузился");
  response.end("my server");
});
server.on("close", () => {
  /**событие когда сервер закрывается  */
  console.log("Сервер перезагрузился");
  response.end("my server");
});
server.listen(3000);
myEmitter.on("randomName", () => {
  /**события для randomName */
  console.log("there was new emitter");
});
myEmitter.on("randomName", () => {
  console.log("two event for randomName"); /**Второе событие для randomName */
});
myEmitter.on("randomName", (num: number) => {
  /**можем передовать аргументы */
  console.log("this is" + num);
});
myEmitter.emit(
  "randomName",
  9
); /**присваиваем любое имя на которое будет реагировать обработчик а так же можем присваивать аргументы  */
