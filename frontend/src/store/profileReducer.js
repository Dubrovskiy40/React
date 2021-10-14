import { 
    ADD_PROFILE, 
    DELETE_PROFILE 
} from './types/profileTypes';

const initialState = {};

const profileReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_PROFILE:
            return {...state, ...payload};
        case DELETE_PROFILE:
            return {}   
        default:
            return state;
    }
};
export default profileReducer;