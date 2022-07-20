const http = require("http"); /**подключаем */
const server = http.createServer((req, res) => {
  /**оба аргумента обьекты  req - входящий запрос это гиганский обьект ,responce - ответ от сервера*/
  console.log(req);
  if (req.url === "/") {
    res.end("hello this my first server");
  }
  if (req.url === "/about") {
    res.end("this page about me");
  }
  req.end(`
     <h1>OOps! mybe try again write current page</h1>
     <a href="/"> back page</a>
     `);
  //   res.write("welcome");
  //   res.end();
}); /**создаем */
server.listen(5000); /**название сервера */
