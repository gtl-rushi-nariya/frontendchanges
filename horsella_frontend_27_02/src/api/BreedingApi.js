import axios from "axios";

export const postBreeder = async (breedingDetails,token) => {
    const headers = {
        //Authorization: "Bearer " + token.replace(/"/g, ""),
        //'content-type':'multipart/form-data'
      };


    return axios
    .post(
      "http://localhost:3000/api/breeding-center/add",
      breedingDetails,
      {
        headers: headers,
      }
    )
      .then(function (res) {
        console.log("breeding response : " + res);
        return res.data.data;
      })
      .catch(function (error) {
        console.log("breeding error message   : " + error.message);
        return error.message;
      });
    
}

export const updateBreeder = async (id,breedingDetails,token) => {
  const headers = {
      //Authorization: "Bearer " + token.replace(/"/g, ""),
      //'content-type':'multipart/form-data'
    };


  return axios
  .put(
    "http://localhost:3000/api/breeding-center/update/"+id,
    breedingDetails,
    {
      headers: headers,
    }
  )
    .then(function (res) {
      console.log("breeding response : " + res);
      return res.data.data;
    })
    .catch(function (error) {
      console.log("breeding error message   : " + error.message);
      return error.message;
    });
  
}






export const getBreeder = async (token) => {
    const headers = {
        //Authorization: "Bearer " + token.replace(/"/g, ""),
      };


    return axios
    .get(
      "http://localhost:3000/api/breeding-center/all",
      
      {
        headers: headers,
      }
    )
      .then(function (res) {
        console.log("breeding response : " + res.data.data);
        return res.data.data;
      })
      .catch(function (error) {
        console.log("breeding error message   : " + error.message);
        return error.message;
      });
    
}

export const getBreederById = async (id,token) => {
  const headers = {
      //Authorization: "Bearer " + token.replace(/"/g, ""),
    };
console.log("f",id)

  return axios
  .get(
    "http://localhost:3000/api/breeding-center/"+id,
    
    {
      headers: headers,
    }
  )
    .then(function (res) {
      console.log("http://localhost:3000/api/breeding-center/",id)
      console.log("breeding response : " + res.data.data);
      return res.data.data;
    })
    .catch(function (error) {
      console.log("breeding error message   : " + error.message);
      return error.message;
    });
  
}



export const deleteBreeder = async (id,token) => {
  const headers = {
      //Authorization: "Bearer " + token.replace(/"/g, ""),
      //'content-type':'multipart/form-data'
    };


  return axios
  .delete(
    "http://localhost:3000/api/breeding-center/delete/"+id,
    
    {
      headers: headers,
    }
  )
    .then(function (res) {
      console.log("breeding response : " + res);
      return res.data.data;
    })
    .catch(function (error) {
      console.log("breeding error message   : " + error.message);
      return error.message;
    });
  
}
