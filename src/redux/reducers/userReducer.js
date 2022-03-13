import {
  SET_LASTNAME,
  SET_NAME,
  SET_ADDRESS,
  SET_PHONE,
} from "../actions/userActions";

const initialState = {
  name: "Carlos",
  lastname: "Hidalgo",
  phone: "+506 2010 1020",
  address: "San Jose, Costa Rica",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    case SET_LASTNAME:
      return {
        ...state,
        lastname: action.payload.lastname,
      };
    case SET_PHONE:
      return {
        ...state,
        phone: action.payload.phone,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload.address,
      };
    default:
      return state;
  }
};

export default user;
