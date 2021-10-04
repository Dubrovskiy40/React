import {  
  GET_HEROES,
  DELETE_HEROES,
  ADD_HEROES,
} from "../store/types/apiPeopleTypes";

export const setHeroes = (heroes) => ({
  type: GET_HEROES,
  payload: heroes,
});
export const deleteHehoes = (heroesId) => ({
  type: DELETE_HEROES,
  payload: heroesId,
});
export const addHeroes = (heroes) => {
  return {
    type: ADD_HEROES,
    payload: { ...heroes },
  };
};

export const getHeroes = () => (dispatch) => {
  fetch("https://swapi.dev/api/people/")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.results.length; i++) {
        fetch(data.results[i].url)
          .then((response) => response.json())
          .then((data) => dispatch(addHeroes(data)));
      }
    });
};

// export const searchPokemon = (pokemonName) => (dispatch) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
//     .then((response) => response.json())
//     .then((data) => {
//       dispatch(addPokemon(data));
//     });
// };
