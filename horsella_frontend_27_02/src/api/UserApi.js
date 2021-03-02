import axios from "axios";

export const loginUser = async (credentials) => {
  //   const data = { token: "anfesfbsdugbsoigvsbodivbe" };

  //   return data;
  console.log(credentials);
  return axios
    .post("https://horsella-test.herokuapp.com/api/user/login", credentials)
    .then(function (res) {
      // console.log(res.data.data);
      return res.data.data;
    });
};

export const registerUser = async (userDetails, token) => {
  //   const data = { token: "anfesfbsdugbsoigvsbodivbe" };

  //   return data;
  console.log(userDetails);
  const headers = {
    Authorization: "Bearer " + token.replace(/"/g, ""),
  };
  console.log(headers);
  // const tokenBearer = "Bearer " + token.toString();
  // console.log("tokenBearer: " + tokenBearer);
  return axios
    .post(
      "https://horsella-test.herokuapp.com/api/user/register",
      userDetails,
      {
        headers: headers,
      }
    )
    .then(function (res) {
      console.log("register response====== : " + res);
      return res.data.data;
    })
    .catch(function (error) {
      console.log("register response======message   : " + error.message);
      return error.message;
    });
};

export const getHorse = (id, token) => {
  const headers = {
    //Authorization: "Bearer " + token.replace(/"/g, ""),
  };
console.log("f",id)

return axios
.get(
  "_______________________________"+id,
  
  {
    headers: headers,
  }
)
  .then(function (res) {
    console.log("horses response : " + res.data.data);
    return res.data.data;
  })
  .catch(function (error) {
    console.log("horses error message   : " + error.message);
    return error.message;
  });

}