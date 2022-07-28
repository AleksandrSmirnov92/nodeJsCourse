const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  const a = 4;
  if (a > 5) {
    res.send("Hello World!");
  } else {
    res.send("lower 5");
  }
});
app.get("/home", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("My home");
});
app.post("/sumuray", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("We created samurai!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
