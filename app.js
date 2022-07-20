const _ = require("lodash");
const mas = [1, [2, [3, [6]]]];
const newItems = _.flattenDeep(mas);
console.log(newItems);
