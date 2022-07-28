import http from "http";
let fs = require("fs");

const readFile = (path: string) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err: any, data: unknown) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
let server = http.createServer(async (request, response) => {
  switch (request.url) {
    case "/home": {
      const data = await readFile("pages/index.html");
      response.write(data);
      response.end();
      break;
    }
    default: {
      response.write("404 not found");
      response.end();
    }
  }
});

server.listen(3003);
