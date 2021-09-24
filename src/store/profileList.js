const defaultState = {profileList: []};

const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CHANGE_PROFILE":
            return {...state}; //дописать
        default:
            return state;
    }
};

export default profileReducer;