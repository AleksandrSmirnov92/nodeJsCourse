let http = require("http");
const url = require("url");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/text/first.json`, "utf-8");
console.log(__dirname);
console.log(__dirname);
const obData = JSON.parse(data);
let server = http.createServer(
  (
    request: { url: any },
    responce: {
      end: (arg0: string) => void;
      writeHead: (arg0: number, arg1: { "Content-type": string }) => void;
    }
  ) => {
    const pathName = request.url;
    if (pathName === "/" || pathName === "/name") {
      responce.end("heloo this is my first server");
    } else if (pathName === "/api") {
      responce.writeHead(200, {
        "Content-type": "application/json",
      });
      responce.end(data);
    } else {
      responce.writeHead(404, {
        "Content-type": "text/html",
      });
      responce.end("Pages not found");
    }
  }
);
server.listen(3005, "127.0.0.1", () => {
  console.log("Server listening");
});
