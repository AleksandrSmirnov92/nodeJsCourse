const http = require("http");

const server = http.createServer((request, responce) => {
  responce.end("heloo this is my first server");
});
server.listen(3005, "127.0.0.1", () => {
  console.log("Server listening");
});
