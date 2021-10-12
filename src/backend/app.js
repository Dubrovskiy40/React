const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');

const users = [
    { email: "admin@admin.ru", password: "123" },
    { email: "1@1.ru", password: "1" },
];

const strings = ["test1", "test2", "test3", "test4", "test5", "test6"];

const chats = [
  {id: 0, name: 'Штурмовики'},
  {id: 1, name: 'Джедаи'},
  {id: 2, name: 'Принцесса Лея 18+'},
  {id: 3, name: 'Дроны'},
  {id: 4, name: 'Ситхи'}
];



app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(logger("dev")); // мидвар, который позволяет выводить все логи в консоль

app.post("/auth", (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        return res.json(users[i]);
      }
    }
  }
  res.sendStatus(400);
});

app.get("/dialogs", (req, res) => {
  console.log('chats--->', chats)
  res.json(chats);
});
// app.post("/dialogs", (req, res) => {
//   console.log(req.body, "body");
//   const { value } = req.body;
//   console.log(value);
//   chats.push(value);
//   res.json(chats);
// });



app.get("/test", (req, res) => {
  res.json(strings);
});

app.delete("/test", (req, res) => {
  console.log(req.query, "id delete");
});

app.post("/test", (req, res) => {
  console.log(req.body, "body");
  const { value } = req.body;
  console.log(value);
  strings.push(value);
  res.json(strings);
});


//app.listen всегда указываем в самом низу! Запускает сервер. 
app.listen(3001, () => {
  console.log("servak start");
});