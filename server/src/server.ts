import express from 'express';

const port = 3333;
const app = express();

app.get('/users', (_req, res) => {
  return res.send('Hello users!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});