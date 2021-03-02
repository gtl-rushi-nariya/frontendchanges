import axios from "axios";

export const postRace = async (raceDetails, token) => {
  const headers = {
    //Authorization: "Bearer " + token.replace(/"/g, ""),
    //'content-type':'multipart/form-data'
  };

  return axios
    .post("____________________________-", raceDetails, {
      headers: headers,
    })
    .then(function (res) {
      console.log("race response : " + res);
      return res.data.data;
    })
    .catch(function (error) {
      console.log("race error message   : " + error.message);
      return error.message;
    });
};

export const updateRace = async (id, raceDetails, token) => {
  const headers = {
    //Authorization: "Bearer " + token.replace(/"/g, ""),
    //'content-type':'multipart/form-data'
  };

  return axios
    .put("_______________________________-----" + id, raceDetails, {
      headers: headers,
    })
    .then(function (res) {
      console.log("race response : " + res);
      return res.data.data;
    })
    .catch(function (error) {
      console.log("race error message   : " + error.message);
      return error.message;
    });
};

export const getRace = async (token) => {
  const headers = {
    //Authorization: "Bearer " + token.replace(/"/g, ""),
  };

  return axios
    .get(
      "___________________________________",

      {
        headers: headers,
      }
    )
    .then(function (res) {
      console.log("race response : " + res.data.data);
      return res.data.data;
    })
    .catch(function (error) {
      console.log("race error message   : " + error.message);
      return error.message;
    });
};

export const getRaceById = async (id, token) => {
  const headers = {
    //Authorization: "Bearer " + token.replace(/"/g, ""),
  };
  console.log("f", id);

  return axios
    .get(
      "________________________________________________________-" + id,

      {
        headers: headers,
      }
    )
    .then(function (res) {
      console.log("________________________________________---", id);
      console.log("race response : " + res.data.data);
      return res.data.data;
    })
    .catch(function (error) {
      console.log("race error message   : " + error.message);
      return error.message;
    });
};

export const deleteRace = async (id, token) => {
  const headers = {
    //Authorization: "Bearer " + token.replace(/"/g, ""),
    //'content-type':'multipart/form-data'
  };

  return axios
    .delete(
      "_______________________________________________---" + id,

      {
        headers: headers,
      }
    )
    .then(function (res) {
      console.log("race response : " + res);
      return res.data.data;
    })
    .catch(function (error) {
      console.log("race error message   : " + error.message);
      return error.message;
    });
};

export const postParticipate = async (participateDetails, token) => {
  const headers = {
    //Authorization: "Bearer " + token.replace(/"/g, ""),
    //'content-type':'multipart/form-data'
  };

  return axios
    .post("____________________________-", participateDetails, {
      headers: headers,
    })
    .then(function (res) {
      console.log("participate response : " + res);
      return res.data.data;
    })
    .catch(function (error) {
      console.log("participate error message   : " + error.message);
      return error.message;
    });
};