const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const habitList = [];

app.get('/', (req, res) => {
  console.log(req);
  res.send('aplikacja działa');
});
app.listen(8888, () => {
  console.log('aplikacja wystartowała');
});

app.post('/habits', (req, res) => {
  habitList.push(req.body);
  res.status(200).end();
});
app.get('/habits', (req, res) => {
  res.json({ habitList });
});
app.delete('/habits/:habitId', (req, res) => {
  const habitId = req.params.habitId;
  const habitItemIndex = habitList.findIndex((e) => {
    return e.id === habitId;
  });
  if (habitItemIndex !== -1) {
    habitList.splice(habitItemIndex, 1);
    res.status(200).end();
  } else {
    res.status(404).end();
  }
});
