import React from "react";
import { connect } from "react-redux";

import imageName from "../../assets/img/jump_race_1.png";

function TrainingCenterDetails({ trainingCenter }) {
  return (
    <div style={{ marginTop: "80px", marginBottom: "30px" }}>
      <div style={{ backgroundColor: "#1bbd36", padding: "10px" }}>
        <h2>
          <b style={{ color: "white" }}>Training Center</b>
        </h2>
      </div>
      <br />
      <div class="row">
        <div class="col-md-6">
          <div class="row mx-4">
            <div class="col-12">
              <figure class="view overlay rounded z-depth-1 main-img">
                <img src={imageName} class="img-fluid z-depth-1" />
              </figure>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <h5></h5>
          <p>
            <span>
              <strong>{trainingCenter.center_name}</strong>
            </span>
          </p>

          <div class="table-responsive">
            <table class="table table-sm table-borderless mb-0">
              <tbody>
                <tr>
                  <th class="pl-0 w-25 text-right text-capitalize" scope="row">
                    <strong>Owner Name</strong>
                  </th>
                  <td className="text-left pl-4">
                    {trainingCenter.owner_name}
                  </td>
                </tr>
                <tr>
                  <th class="pl-0 w-25 text-right text-capitalize" scope="row">
                    <strong>experience</strong>
                  </th>
                  <td className="text-left pl-4">
                    {trainingCenter.experience}
                  </td>
                </tr>
                <tr>
                  <th class="pl-0 w-25 text-right text-capitalize" scope="row">
                    <strong>email</strong>
                  </th>
                  <td className="text-left pl-4">{trainingCenter.email}</td>
                </tr>
                <tr>
                  <th class="pl-0 w-25 text-right text-capitalize" scope="row">
                    <strong>contact</strong>
                  </th>
                  <td className="text-left pl-4">{trainingCenter.contact}</td>
                </tr>

                <tr>
                  <th class="pl-0 w-25 text-right text-capitalize" scope="row">
                    <strong>address</strong>
                  </th>
                  <td className="text-left pl-4">{trainingCenter.address}</td>
                </tr>
                <tr>
                  <th class="pl-0 w-25 text-right text-capitalize" scope="row">
                    <strong>website</strong>
                  </th>
                  <td className="text-left pl-4">{trainingCenter.website}</td>
                </tr>
                <tr>
                  <th class="pl-0 w-25 text-right text-capitalize" scope="row">
                    <strong>working hours</strong>
                  </th>
                  <td className="text-left pl-4">
                    {trainingCenter.working_hours}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          {/* <a href="/Products/Edit/@Model.Id" class="btn btn-success">
        Edit
      </a>
      <a href="/Products/Delete/@Model.Id" class="btn btn-danger">
        Delete
      </a> */}
        </div>
      </div>
      <div class="row" style={{ margin: "0 80px" }}>
        <p className=" text-capitalize">
          <strong>Description</strong>
        </p>

        <p>
          <br />
          {trainingCenter.description}
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    trainingCenter: state.trainingreducer.data,
  };
};

export default connect(mapStateToProps, null)(TrainingCenterDetails);
