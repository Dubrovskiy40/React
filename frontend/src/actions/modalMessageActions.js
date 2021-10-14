import { 
   SHOW_MODAL_MESSAGE, 
   HIDE_MODAL_MESSAGE 
} from "../store/types/modalMessageTypes"

export const showModalMessage = (message) => ({
   type: SHOW_MODAL_MESSAGE,
   payload: message
});

export const hideModalMessage = (hide) => ({
   type: HIDE_MODAL_MESSAGE,
   payload: hide
});