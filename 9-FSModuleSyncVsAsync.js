// модуль для работы с файловой системой
// console.log("start");
// const { readFileSync, writeFileSync } = require("fs");
// const first = readFileSync("./text/first.txt", "utf8");
// const second = readFileSync("./text/second.txt", "utf8");
// console.log("start2");
// writeFileSync("./text/result-sync.txt", `there result ${first} and ${second}`);
// console.log("start3");

// модуль для работы с файловой системой
console.log("start1");
const { readFile, writeFile, read } = require("fs");

readFile("./text/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./text/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./text/result-async.txt",
      `there result ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("start2");
      }
    );
  });
});
console.log("start3");
// первый способ выполняется по порядку start1 start2 start3
// второй способ не ждет пока программа выполнится идет дальше результат start1 start3 start2
