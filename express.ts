const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req: any, res: { send: (arg0: { message: string }) => void }) => {
  res.send({ message: 'hello world' });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
