import express from 'express';
import student from './tsfile2';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  let studentObj = new student("vishnu","prakash","dps");
  res.send(studentObj.getfullname());
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});