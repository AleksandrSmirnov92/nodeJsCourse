const os = require("os");
// info about current user
const user = os.userInfo();
// console.log(user);
// method returns about sistem uptime in seconds
// console.log(`they sistem uptime ${os.uptime()}`);
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
