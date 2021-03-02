import { POST_BREEDING_REQUEST,POST_BREEDING_SUCCESS,POST_BREEDING_FAILURE,GET_BREEDING_FAILURE,GET_BREEDING_REQUEST,GET_BREEDING_SUCCESS,GET_BREEDING_FAILURE_BY_ID,GET_BREEDING_REQUEST_BY_ID,GET_BREEDING_SUCCESS_BY_ID,UPDATE_BREEDING_FAILURE,UPDATE_BREEDING_REQUEST,UPDATE_BREEDING_SUCCESS,DELETE_BREEDING_FAILURE,DELETE_BREEDING_REQUEST,DELETE_BREEDING_SUCCESS } from "./BreedingActionTypes";


export const postBreedingRequest = () => {
    return {
      type: POST_BREEDING_REQUEST,
    };
  };

  export const postBreedingSuccess = (data) => {
      return {
          type:POST_BREEDING_SUCCESS,
          payload: data
      }
  }

  export const postBreedingFailure = (error) => {
    return {
      type: POST_BREEDING_FAILURE,
      payload: error,
    };
  };
  
  export const getBreedingRequest = () => {
    return {
      type: GET_BREEDING_REQUEST,
    };
  };

  export const getBreedingSuccess = (data) => {
      return {
          type:GET_BREEDING_SUCCESS,
          payload: data
      }
  }

  export const getBreedingFailure = (error) => {
    return {
      type: GET_BREEDING_FAILURE,
      payload: error,
    };
  };

  export const getBreedingRequestById = () => {
    return {
      type: GET_BREEDING_REQUEST_BY_ID,
    };
  };

  export const getBreedingSuccessById = (data) => {
      return {
          type:GET_BREEDING_SUCCESS_BY_ID,
          payload: data
      }
  }

  export const getBreedingFailureById = (error) => {
    return {
      type: GET_BREEDING_FAILURE_BY_ID,
      payload: error,
    };
  };



  export const updateBreedingRequest = () => {
    return {
      type: UPDATE_BREEDING_REQUEST,
    };
  };

  export const updateBreedingSuccess = (data) => {
      return {
          type:UPDATE_BREEDING_SUCCESS,
          payload: data
      }
  }

  export const updateBreedingFailure = (error) => {
    return {
      type: UPDATE_BREEDING_FAILURE,
      payload: error,
    };
  };
  

  export const deleteBreedingRequest = () => {
    return {
      type: DELETE_BREEDING_REQUEST,
    };
  };

  export const deleteBreedingSuccess = (data) => {
      return {
          type:DELETE_BREEDING_SUCCESS,
          payload: data
      }
  }

  export const deleteBreedingFailure = (error) => {
    return {
      type: DELETE_BREEDING_FAILURE,
      payload: error,
    };
  };
  