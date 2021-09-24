import { ADD_PROFILE, DELETE_PROFILE } from '../store/profileList';

export const addProfile = (id) => ({
    type: ADD_PROFILE,
    payload: id
});

export const deleteProfile = () => ({
    type: DELETE_PROFILE
});