import React, { useState, useEffect } from "react";
import "../../css/table.css";
import { connect } from "react-redux";
import { getRace, getRaceById, deleteRace } from "../../../../../api/RaceApi";
import {
  getRaceRequest,
  getRaceSuccess,
  getRaceFailure,
  getRaceFailureById,
  getRaceSuccessById,
  getRaceRequestById,
  deleteRaceRequest,
  deleteRaceSuccess,
} from "../../../../../Redux/Admin/Trotting/RaceActions";
import AddRaces from "./AddRaces";

function Races({
  history,
  getTrainingFailure,
  getTrainingRequest,
  getTrainingSuccess,
  getTrainingFailureById,
  getTrainingSuccessById,
  getTrainingRequestById,
  deleteTrainingRequest,
  deleteTrainingSuccess,
}) {
  const [records, setRecords] = useState({
    data: [],
  });
  useEffect(() => {
    getData();
  }, []);

  async function updateCenter(id) {
    getTrainingRequestById();
    const res = await getTrainerById(id);
    console.log(res);
    getTrainingSuccessById(res);
    history.push("/dashboard/edittrainingcenter");
  }

  async function deleteCenter(id) {
    deleteTrainingRequest();
    const res = await deleteTrainer(id);
    console.log(res);
    deleteTrainingSuccess(res);
    history.push("/dashboard/deletetrainingcenter");
  }

  async function getData() {
    getTrainingRequest();
    const res = await getTrainer();
    console.log("f", res);
    getTrainingSuccess(res);

    setRecords({
      data: res.map((r) => {
        return (
          <tr>
            <th scope="row">{r.id}</th>
            <td>{r.center_name}</td>
            <td>{r.owner_name}</td>
            <td>{r.description}</td>
            <td>{r.email}</td>
            <td>
              <i
                onClick={updateCenter.bind(this, r.id)}
                class="fas fa-edit"
              ></i>{" "}
              <i
                onClick={deleteCenter.bind(this, r.id)}
                class="fas fa-trash-alt"
              ></i>
            </td>
          </tr>
        );
      }),
    });
  }

  return (
    <div>
      <br />
      <br />

      <table class="table table-responsive table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Center Name</th>
            <th scope="col">Owner Name</th>
            <th scope="col">Description</th>
            <th scope="col">Email</th>
            <th scope="col">
              <i
                onClick={() => {
                  history.push("/dashboard/addtrainingcenter");
                }}
                class="fas fa-plus"
              ></i>
            </th>
          </tr>
        </thead>

        <tbody>{records.data}</tbody>
      </table>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRaceRequest: () => dispatch(getRaceRequest()),
    getRaceSuccess: (data) => dispatch(getRaceSuccess(data)),
    getRaceFailure: (error) => dispatch(getRaceFailure(error)),

    getRaceRequestById: () => dispatch(getRaceRequestById()),
    getRaceSuccessById: (data) => dispatch(getRaceSuccessById(data)),
    getRaceFailureById: (error) => dispatch(getRaceFailureById(error)),

    deleteRaceRequest: () => dispatch(deleteRaceRequest()),
    deleteRaceSuccess: (data) => dispatch(deleteRaceSuccess(data)),
    deleteRaceFailure: (error) => dispatch(deleteRaceFailure(error)),
  };
};

export default connect(null, mapDispatchToProps)(Races);
