import React, { useState, useEffect } from "react";
import "../../css/table.css";
import { connect } from "react-redux";
import {
  getTrainer,
  getTrainerById,
  deleteTrainer,
} from "../../../../../api/TrainingApi";
import {
  getTrainingRequest,
  getTrainingSuccess,
  getTrainingFailure,
  getTrainingFailureById,
  getTrainingSuccessById,
  getTrainingRequestById,
  deleteTrainingRequest,
  deleteTrainingSuccess,
} from "../../../../../Redux/Admin/Training/TrainingActions";
import AddTrainingCenter from "./AddTrainingCenter";

function Training({
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
    getTrainingRequest: () => dispatch(getTrainingRequest()),
    getTrainingSuccess: (data) => dispatch(getTrainingSuccess(data)),
    getTrainingFailure: (error) => dispatch(getTrainingFailure(error)),

    getTrainingRequestById: () => dispatch(getTrainingRequestById()),
    getTrainingSuccessById: (data) => dispatch(getTrainingSuccessById(data)),
    getTrainingFailureById: (error) => dispatch(getTrainingFailureById(error)),

    deleteTrainingRequest: () => dispatch(deleteTrainingRequest()),
    deleteTrainingSuccess: (data) => dispatch(deleteTrainingSuccess(data)),
    deleteTrainingFailure: (error) => dispatch(deleteTrainingFailure(error)),
  };
};

export default connect(null, mapDispatchToProps)(Training);
