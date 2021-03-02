import {
  CLIENT_SET,
  CLIENT_UNSET,
  SET_TOKEN,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  GET_USER_BY_ID,
  GET_HORSE
} from "./UserActionTypes";

export function setClient(res) {
  return {
    type: CLIENT_SET,
    token: res.token,
    email: res.email,
  };
}

export function unsetClient() {
  return {
    type: CLIENT_UNSET,
  };
}

export function setToken(token) {
  return {
    type: SET_TOKEN,
    token,
  };
}

export const userRegisterRequest = () => {
  return {
    type: USER_REGISTER_REQUEST,
  };
};

export const userRegisterSuccess = () => {
  return {
    type: USER_REGISTER_SUCCESS,
  };
};

export const userRegisterFailure = (error) => {
  return {
    type: USER_REGISTER_FAILURE,
    error: error,
  };
};


export const getUserById = data => {
  return {
    type: GET_USER_BY_ID,
    payload: data
  };
};


export const getHorse = (data) => {
  return {
      type:GET_HORSE,
      payload: data
  }
}