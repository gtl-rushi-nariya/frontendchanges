import React, { useState, useEffect } from "react";

import "./Training.css";
import imageName from "../../assets/img/jump_race_1.png";
// import statisCenterImage from "../../../assets/img/group.pn";
import { connect } from "react-redux";
import {
  getTrainer,
  getTrainerById,
  deleteTrainer,
} from "../../api/TrainingApi";
import {
  getTrainingRequest,
  getTrainingSuccess,
  getTrainingFailure,
  getTrainingFailureById,
  getTrainingSuccessById,
  getTrainingRequestById,
  deleteTrainingRequest,
  deleteTrainingSuccess,
} from "../../Redux/Admin/Training/TrainingActions";

const Training = ({
  history,
  getTrainingFailure,
  getTrainingRequest,
  getTrainingSuccess,
  getTrainingFailureById,
  getTrainingSuccessById,
  getTrainingRequestById,
  deleteTrainingRequest,
  deleteTrainingSuccess,
}) => {
  const [records, setRecords] = useState({
    data: [],
  });

  useEffect(() => {
    getData();
  }, []);

  async function GetTrainingCenterById(id) {
    getTrainingRequestById();
    const res = await getTrainerById(id);
    console.log(res);
    getTrainingSuccessById(res);
    history.push("/training/" + id);
  }

  async function getData() {
    getTrainingRequest();
    const res = await getTrainer();
    console.log("f", res);
    getTrainingSuccess(res);

    setRecords({
      data: res.map((r) => {
        return (
          //----------------------------
          <div class="container bcontent">
            <hr />
            <div class="card">
              <div class="row no-gutters">
                <div class="col-lg-4 col-md-5">
                  <img class="card-img" src={imageName} alt="Training Center" />
                </div>
                <div class="col-lg-8 col-md-7">
                  <div class="card-body">
                    <h5 class="card-title" style={{ textAlign: "left" }}>
                      {r.center_name}
                    </h5>
                    <p class="card-text" style={{ textAlign: "left" }}>
                      Owner Name : {r.owner_name}
                      <br />
                      Location : {r.address} <br />
                    </p>
                    <button
                      className="btn btn-success"
                      onClick={GetTrainingCenterById.bind(this, r.id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          //----------------------------
        );
      }),
    });
  }

  return (
    <div style={{ marginTop: "80px" }}>
      <div style={{ backgroundColor: "#1bbd36", padding: "10px" }}>
        <h2>
          <b style={{ color: "white" }}>Training</b>
        </h2>
      </div>
      <br />
      <main id="main">
        <section id="trainingStatic" className="trainingStatic">
          <div className="container">
            <div className="row content">
              <div className="row" style={{ paddingBottom: "20px" }}>
                <div className="col-lg-12">
                  <img src={imageName} className="imageOwnership" />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 pt-4 pt-lg-0">
                  <h3>Our educational activities</h3>
                  <p>
                    For those of you who are interested in trotting and
                    trotting, there are many exciting courses. Everything from
                    boys' courses for the very young to high school educations,
                    courses to be able to compete and train trotting horses and
                    courses for competition officials. Here you can read more
                    about the educational activities and which educations are
                    available.
                  </p>
                  <p>
                    <strong>Trotting school</strong> - both for those who want
                    to start trotting and for those who are already active There
                    are a little more than 30 trotting schools from Boden in the
                    north to Jägersro in the south. Most of the trotting schools
                    are run by trotting clubs and are located next to a trotting
                    track. At the trotting school you can go regardless of
                    previous knowledge and they have everything from boys'
                    courses for the very youngest to license courses for you who
                    have come a long way and want to start competing or training
                    courses for you who want to know more about training
                    trotting horses. At travskola.se you can find your nearest
                    trotting school and book courses.
                  </p>
                  <p className="font-italic">
                    Training for the active <br />
                    For those who are active in the trotting sport, there are a
                    number of training courses to attend. You can read more
                    about the educations by clicking on the links below.
                  </p>
                </div>
              </div>
              {records.data}
              {/* {horseList} */}
            </div>
          </div>
        </section>
      </main>
      <br />
      <br />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTrainingRequest: () => dispatch(getTrainingRequest()),
    getTrainingSuccess: (data) => dispatch(getTrainingSuccess(data)),
    getTrainingFailure: (error) => dispatch(getTrainingFailure(error)),

    getTrainingRequestById: () => dispatch(getTrainingRequestById()),
    getTrainingSuccessById: (data) => dispatch(getTrainingSuccessById(data)),
    getTrainingFailureById: (error) => dispatch(getTrainingFailureById(error)),
  };
};

export default connect(null, mapDispatchToProps)(Training);
