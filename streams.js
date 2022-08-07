"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**Допустим нам нужно прочитать большой файл из системы а потом отправить его клиенту  */
const fs_1 = __importDefault(require("fs")); /**подключаем фалувую систему */
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer();
server.on("request", (request, response) => {
    /**Пример 1 */
    //   fs.readFile("./dist/text/textStream.txt", (err, data) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       response.writeHead(200, {
    //         "Content-Type": "text/plain; charset=utf-8",
    //       });
    //       response.end(data);
    //     }
    //   });
    /**Пример 2 */
    //   const readable = fs.createReadStream(
    //     "./dist/text/textStream.txt"
    //   ); /**мы создали поток и теперь можем читать файл по частям каждый раз когда поток запускает части мы можем слушать его */
    //   readable.on("data", (chunk: string) => {
    //     response.writeHead(200, {
    //       "Content-Type": "text/plain; charset=utf-8",
    //     });
    //     response.write(chunk);
    //   });
    //   readable.on("end", () => {
    //     response.end();
    //   });
    //   readable.on("error", (err: Error) => {
    //     response.statusCode = 505;
    //     response.end("здесь ошибка");
    //   });
    /**Пример 3 */
    const readable = fs_1.default.createReadStream("./dist/text/textStream.txt");
    response.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
    });
    readable.pipe(response);
});
server.listen(3000);
