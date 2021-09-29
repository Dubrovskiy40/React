import { 
   SHOW_MODAL_MESSAGE, 
   HIDE_MODAL_MESSAGE 
} from "./types/modalMessageTypes";

const initialState = {}

const modalMessageReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case SHOW_MODAL_MESSAGE:
         return {
            show: true,
            message: payload
         }
      case HIDE_MODAL_MESSAGE:
         return {
            ...state,
            show: payload
         }
      default:
         return state;
   }
}
export default modalMessageReducer;