import { ADD_SUCCESS_MESSAGE, REMOVE_SUCCESS_MESSAGE } from "../actionTypes";

const successReducer = (state = { message: null }, action) => {
  switch (action.type) {
    case ADD_SUCCESS_MESSAGE:
      return { ...state, message: action.success };
    case REMOVE_SUCCESS_MESSAGE:
      return { ...state, message: null };
    default:
      return state;
  }
};

export default successReducer;