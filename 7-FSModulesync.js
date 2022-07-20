// модуль для работы с файловой системой
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./text/first.txt", "utf8");
const second = readFileSync("./text/second.txt", "utf8");
// console.log(first, second);
writeFileSync("./text/result-sync.txt", `there result ${first} and ${second}`);
