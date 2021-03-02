import axios from "axios";

export const postTrainer = async (trainingDetails,token) => {
    const headers = {
        //Authorization: "Bearer " + token.replace(/"/g, ""),
        //'content-type':'multipart/form-data'
      };


    return axios
    .post(
      "http://localhost:3000/api/training-center/add",
      trainingDetails,
      {
        headers: headers,
      }
    )
      .then(function (res) {
        console.log("training response : " + res);
        return res.data.data;
      })
      .catch(function (error) {
        console.log("training error message   : " + error.message);
        return error.message;
      });
    
}

export const updateTrainer = async (id,trainingDetails,token) => {
  const headers = {
      //Authorization: "Bearer " + token.replace(/"/g, ""),
      //'content-type':'multipart/form-data'
    };


  return axios
  .put(
    "http://localhost:3000/api/training-center/update/"+id,
    trainingDetails,
    {
      headers: headers,
    }
  )
    .then(function (res) {
      console.log("training response : " + res);
      return res.data.data;
    })
    .catch(function (error) {
      console.log("training error message   : " + error.message);
      return error.message;
    });
  
}






export const getTrainer = async (token) => {
    const headers = {
        //Authorization: "Bearer " + token.replace(/"/g, ""),
      };


    return axios
    .get(
      "http://localhost:3000/api/training-center/all",
      
      {
        headers: headers,
      }
    )
      .then(function (res) {
        console.log("training response : " + res.data.data);
        return res.data.data;
      })
      .catch(function (error) {
        console.log("training error message   : " + error.message);
        return error.message;
      });
    
}

export const getTrainerById = async (id,token) => {
  const headers = {
      //Authorization: "Bearer " + token.replace(/"/g, ""),
    };
console.log("f",id)

  return axios
  .get(
    "http://localhost:3000/api/training-center/"+id,
    
    {
      headers: headers,
    }
  )
    .then(function (res) {
      console.log("http://localhost:3000/api/training-center/",id)
      console.log("training response : " + res.data.data);
      return res.data.data;
    })
    .catch(function (error) {
      console.log("training error message   : " + error.message);
      return error.message;
    });
  
}



export const deleteTrainer = async (id,token) => {
  const headers = {
      //Authorization: "Bearer " + token.replace(/"/g, ""),
      //'content-type':'multipart/form-data'
    };


  return axios
  .delete(
    "http://localhost:3000/api/training-center/delete/"+id,
    
    {
      headers: headers,
    }
  )
    .then(function (res) {
      console.log("training response : " + res);
      return res.data.data;
    })
    .catch(function (error) {
      console.log("training error message   : " + error.message);
      return error.message;
    });
  
}
