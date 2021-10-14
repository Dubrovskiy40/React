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
const messages = {
  0: [
    {
      id: 0,
      text: "Темная сторона захватила тебя",
      author: "Чубака",
    },
    {
      id: 1,
      text: "летим туда, там столько вкусного",
      author: "Штурмовик",
    },
  ],
  1: [
    {
      id: 0,
      text: "Принцесса в опасности!",
      author: "Люк",
    },
    {
      id: 1,
      text: "Крылья, лапы... главное хвост!",
      author: "Ящерица",
    },
  ],
  2: [
    {
      id: 0,
      text: "Необходимо лететь на другую планету",
      author: "R2D2",
    },
    {
      id: 1,
      text: "Необходимо захватить эту планету",
      author: "Ваш Дарт",
    },
  ],
  3: [
    {
      id: 0,
      text: "Предлагаю объединить наши силы",
      author: "Беженцы",
    },
    {
      id: 1,
      text: "Ситх предлагает сдаться",
      author: "Ситх",
    },
  ],
  4: [
    {
      id: 0,
      text: "У меня есть кое что, что поднимет тебе настроение и залечит раны",
      author: "Торговец сладостей",
    },
    {
      id: 1,
      text: "Жду, номер 42",
      author: "Незнакомка",
    },
  ],
};


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
  // console.log('chats-->', chats)
  res.json(chats);
});
app.post("/dialogs", (req, res) => {
  // console.log('body-->', req.body);
  const { value } = req.body;
  // console.log(value);
  chats.push(value);
  res.json(chats);
});

app.get("/dialogs", (req, res) => {
  // console.log('chats-->', chats)
  res.json(messages);
});
app.post("/dialogs", (req, res) => {
  // console.log('body-->', req.body);
  const { value } = req.body;
  // console.log(value);
  chats.push(value);
  res.json(messages);
});



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