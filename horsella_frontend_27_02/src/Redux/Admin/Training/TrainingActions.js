import { POST_TRAINING_REQUEST,POST_TRAINING_SUCCESS,POST_TRAINING_FAILURE,GET_TRAINING_FAILURE,GET_TRAINING_REQUEST,GET_TRAINING_SUCCESS,GET_TRAINING_FAILURE_BY_ID,GET_TRAINING_REQUEST_BY_ID,GET_TRAINING_SUCCESS_BY_ID,UPDATE_TRAINING_FAILURE,UPDATE_TRAINING_REQUEST,UPDATE_TRAINING_SUCCESS,DELETE_TRAINING_FAILURE,DELETE_TRAINING_REQUEST,DELETE_TRAINING_SUCCESS } from "./TrainingActionTypes";


export const postTrainingRequest = () => {
    return {
      type: POST_TRAINING_REQUEST,
    };
  };

  export const postTrainingSuccess = (data) => {
      return {
          type:POST_TRAINING_SUCCESS,
          payload: data
      }
  }

  export const postTrainingFailure = (error) => {
    return {
      type: POST_TRAINING_FAILURE,
      payload: error,
    };
  };
  
  export const getTrainingRequest = () => {
    return {
      type: GET_TRAINING_REQUEST,
    };
  };

  export const getTrainingSuccess = (data) => {
      return {
          type:GET_TRAINING_SUCCESS,
          payload: data
      }
  }

  export const getTrainingFailure = (error) => {
    return {
      type: GET_TRAINING_FAILURE,
      payload: error,
    };
  };

  export const getTrainingRequestById = () => {
    return {
      type: GET_TRAINING_REQUEST_BY_ID,
    };
  };

  export const getTrainingSuccessById = (data) => {
      return {
          type:GET_TRAINING_SUCCESS_BY_ID,
          payload: data
      }
  }

  export const getTrainingFailureById = (error) => {
    return {
      type: GET_TRAINING_FAILURE_BY_ID,
      payload: error,
    };
  };



  export const updateTrainingRequest = () => {
    return {
      type: UPDATE_TRAINING_REQUEST,
    };
  };

  export const updateTrainingSuccess = (data) => {
      return {
          type:UPDATE_TRAINING_SUCCESS,
          payload: data
      }
  }

  export const updateTrainingFailure = (error) => {
    return {
      type: UPDATE_TRAINING_FAILURE,
      payload: error,
    };
  };
  

  export const deleteTrainingRequest = () => {
    return {
      type: DELETE_TRAINING_REQUEST,
    };
  };

  export const deleteTrainingSuccess = (data) => {
      return {
          type:DELETE_TRAINING_SUCCESS,
          payload: data
      }
  }

  export const deleteTrainingFailure = (error) => {
    return {
      type: DELETE_TRAINING_FAILURE,
      payload: error,
    };
  };
  