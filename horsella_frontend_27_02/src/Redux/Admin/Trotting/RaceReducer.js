import {
  POST_RACE_REQUEST,
  POST_RACE_SUCCESS,
  POST_RACE_FAILURE,
  GET_RACE_FAILURE,
  GET_RACE_REQUEST,
  GET_RACE_SUCCESS,
  GET_RACE_FAILURE_BY_ID,
  GET_RACE_REQUEST_BY_ID,
  GET_RACE_SUCCESS_BY_ID,
  UPDATE_RACE_FAILURE,
  UPDATE_RACE_REQUEST,
  UPDATE_RACE_SUCCESS,
  DELETE_RACE_FAILURE,
  DELETE_RACE_REQUEST,
  DELETE_RACE_SUCCESS,
  POST_PARTICIPATE_REQUEST,
  POST_PARTICIPATE_FAILURE,
  POST_PARTICIPATE_SUCCESS
} from "./RaceActionTypes";

const initialState = {
  loading: false,
  data: "",
  error: "",
};

const raceReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_RACE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_RACE_SUCCESS:
      console.log(action.payload);
      console;
      return {
        loading: false,
        data: action.payload.centerName,
        error: "",
      };
    case POST_RACE_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.payload,
      };

    case GET_RACE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_RACE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case GET_RACE_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.payload.error,
      };

    case GET_RACE_REQUEST_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case GET_RACE_SUCCESS_BY_ID:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case GET_RACE_FAILURE_BY_ID:
      return {
        loading: false,
        data: null,
        error: action.payload.error,
      };

    case UPDATE_RACE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_RACE_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
        error: "",
      };
    case UPDATE_RACE_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.payload.error,
      };

    case DELETE_RACE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_RACE_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
        error: "",
      };
    case DELETE_RACE_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.payload.error,
      };

      case POST_PARTICIPATE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case POST_PARTICIPATE_SUCCESS:
        console.log(action.payload);
        console;
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case POST_PARTICIPATE_FAILURE:
        return {
          loading: false,
          data: null,
          error: action.payload,
        };

    default:
      return state;
  }
};

export default raceReducer;
