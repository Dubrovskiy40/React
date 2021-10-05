import { 
  GET_HEROES,
  DELETE_HEROES,
  ADD_HEROES
} from './types/apiPeopleTypes';

const initialState = [];

const apiPeopleReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_HEROES:
      return [...payload];

    case DELETE_HEROES:
      return state.filter((hero, index) => index !== payload);

    case ADD_HEROES:
      return [payload, ...state];

    default:
      return state;
  }
};

export default apiPeopleReducer;
