import { userRegisterRequest, userRegisterSuccess } from "./UserActions";
import {
  CLIENT_SET,
  CLIENT_UNSET,
  SET_TOKEN,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  GET_USER_BY_ID,
  GET_HORSE
} from "./UserActionTypes";

const initialSate = {
  // id: null,
  email: null,
  token: null,
  loading: false,
  error: "",
  horses:""
};

const reducer = function clientReducer(state = initialSate, action) {
  switch (action.type) {
    case CLIENT_SET:
      sessionStorage.setItem("token", JSON.stringify(action.token));
      return {
        // id: action.token.userId,
        ...state,
        token: action.token,
        email: action.email,
      };

    case CLIENT_UNSET:
      sessionStorage.removeItem("token");
      return {
        // id: null,
        ...state,
        email: null,
        token: null,
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
      };

    case USER_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

      case GET_USER_BY_ID:
        return {
          loading: false,
          data: action.payload,
          error: "",
        };

      case GET_HORSE:
        return {
          ...state,
          horses: action.payload.horses,
          email: action.payload.email,
          error:""
        }

    default:
      return state;
  }
};

export default reducer;
