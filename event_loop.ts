import fs = require("fs");

setTimeout(() => {
  console.log("начало");
}, 0);
setImmediate(() => {
  console.log("продолжение");
});
setImmediate(() => {
  console.log("------------");
});
fs.readFile("./text/text.txt", "utf8", (err: any, data: any) => {
  console.log("прочитал текст", data);
  setTimeout(() => {
    console.log("начало");
  }, 0);
  setImmediate(() => {
    console.log("продолжение");
  });
  process.nextTick(() => {
    console.log("procces.Nexttick");
  });
});

console.log("console.log");
