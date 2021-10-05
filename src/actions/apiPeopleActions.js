import {  
  GET_HEROES,
  DELETE_HEROES,
  ADD_HEROES,
} from "../store/types/apiPeopleTypes";

import {  
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF
} from "../store/types/loaderTypes";

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON
  }
}
export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF
  }
}

export function errorOn(text) {
  return dispatch => {
    dispatch({
      type: ERROR_DISPLAY_ON,
      text
    });
    setTimeout(() => {
      dispatch(errorOff());
    }, 2000)
  }
}
export function errorOff() {
  return {
    type: ERROR_DISPLAY_OFF,
  }
}

export const setHeroes = (heroes) => ({
  type: GET_HEROES,
  payload: heroes,
});
export const deleteHehoes = (payload) => ({
  type: DELETE_HEROES,
  payload: payload,
});
export const addHeroes = (heroes) => {
  return {
    type: ADD_HEROES,
    payload: { ...heroes },
  };
};

export const getHeroes = () => (dispatch) => {
  try {
    dispatch(loaderOn());
    setTimeout(() => {
      fetch("https://swapi.dev/api/people?_limit=10")
        .then((response) => response.json())
        .then((data) => {
          for (let i = 0; i < data.results.length; i++) {
            fetch(data.results[i].url)
              .then((response) => response.json())
              .then((data) => dispatch(addHeroes(data)));
          }
        });
        dispatch(loaderOff());
    }, 5000);
  } catch(err) {
    dispatch(errorOn('Ошибка API'));
    dispatch(loaderOff());
  }
};
// export function getHeroes() {
//   return async dispatch => {
//     try {
//       dispatch(loaderOn());
//       const response = await fetch('https://swapi.dev/api/people?_limit=10');
//       const jsonData = await response.json();
//       setTimeout(() => {
//         dispatch({
//           type: ADD_HEROES,
//           data: jsonData
//         });
//         dispatch(loaderOff());
//       }, 5000);
//     } catch(err) {
//       dispatch(errorOn('Ошибка API'));
//       dispatch(loaderOff());
//     }
//   }
// }
