const { SET_TEST } = require("../store/types/backendTypes");

export const setTest = (data) => ({ //укладывает в store
  type: SET_TEST,
  payload: data,
});

export const fetchTest = () => (dispatch) => {
  fetch("http://localhost:3001/test")
    .then((response) => response.json())
    .then((data) => dispatch(setTest(data)));
};

export const deleteTask = () => {
  fetch("http://localhost:3001/test?id=123", {
    // `http://localhost:3001/test?id=${id}`
    method: "DELETE",
  });
};

export const addTest = (value) => (dispatch) => {
  fetch("http://localhost:3001/test", {
    method: "POST",
    headers: {
      "Content-Type": "text/javascript; charset=utf-8",
    },
    body: value,
  })
    .then((response) => response.json())
    .then((newData) => dispatch(setTest(newData)));
};