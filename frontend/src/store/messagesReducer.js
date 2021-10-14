import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  DELETE_MESSAGELIST,
} from "./types/messageTypes";

const initialState = {
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

const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [payload.chatId]: [
          ...state[payload.chatId],
          {
            id: state[payload.chatId].length,
            ...payload.message,
          },
        ],
      };

    case DELETE_MESSAGE:
      return {
        ...state,
        [payload.chatId]: state[payload.chatId].filter(
          (message) => message.id !== payload.id
        ),
      };

    case DELETE_MESSAGELIST:
      return {
        ...state,
        [payload]: [],
      };
    default:
      return state;
  }
};

export default messagesReducer;
