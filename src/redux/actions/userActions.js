// Actions
export const SET_NAME = "SET_NAME";
export const SET_LASTNAME = "SET_LASTNAME";
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_PHONE = "SET_PHONE";

// Action creators
export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: {
      name,
    },
  };
};

// Action creators
export const setLastname = (lastname) => {
  return {
    type: SET_LASTNAME,
    payload: {
      lastname,
    },
  };
};

// Action creators
export const setAddress = (address) => {
  return {
    type: SET_ADDRESS,
    payload: {
      address,
    },
  };
};

// Action creators
export const setPhone = (phone) => {
  return {
    type: SET_PHONE,
    payload: {
      phone,
    },
  };
};
