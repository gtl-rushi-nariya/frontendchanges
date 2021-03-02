import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  POST_PARTICIPATE_SUCCESS,
  POST_PARTICIPATE_FAILURE,
  POST_PARTICIPATE_REQUEST
} from "../../Redux/Admin/Trotting/RaceActionTypes";

function AddParticipate({
  postRaceRequest,
  postRaceSuccess,
  postRaceFailure,
  token,

}) {

  const dt = data


  const [horseId, sethorseId] = useState();
  const [riderName, setRiderName] = useState();

  //change the names in use state
  const [userName,setUserName] = useState(email?email:null);
  const [raceName,setRaceName] = useState(dt?dt.description:null);
  const [raceCourse,RaceCourse] = useState(dt?dt.owner_name:null);
  const [raceDate,setRaceDate] = useState(dt?dt.experience:null);
  const [raceLength,setRaceLength] = useState(dt?dt.address:null);
  const [RaceAgeCriteria,setraceAgeCriteria] = useState(dt?dt.email:null);
  const [raceWeightCriteria,setRaceWeightCriteria] = useState(dt?dt.website:null);

  const handleSubmit = async e => {
    e.preventDefault();

    postRaceRequest();
    const res = await postParticipate({
      horseName: horseName,
      riderName: riderName
    });
    console.log(res);
    if (typeof res != "string") {
      postRaceSuccess(res);
    } else {
      postRaceFailure(res);
    }
    history.push("/training");
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <div style={{ backgroundColor: "#1bbd36", padding: "10px" }}>
        <h2>
          <b style={{ color: "white" }}>Race Participation</b>
        </h2>
      </div>
      <br />
      <main id="main">
        <section id="trainingStatic" className="trainingStatic">
          <div className="container">
            <div className="row content">
              <div className="row">
                <div className="col-lg-12 pt-4 pt-lg-0">
                  <div>
                    <form class="row g-3" onSubmit={handleSubmit}>
                      <div class="col-lg-6 col-md-6">
                        <label for="FirstName" class="form-label">
                          User Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="FirstName"
                          onChange={(e) => set(e.target.value)}
                          />
                      </div>

                      <div class="col-lg-6 col-md-6">
                        <label for="MiddleName" class="form-label">
                          Race Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="MiddleName"
                        />
                      </div>

                      <div class="col-lg-6 col-md-6">
                        <label for="FirstName" class="form-label">
                          Rider Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="FirstName"
                          onChange={(e) => setRiderName(e.target.value)}
                        />
                      </div>

                      <div class="col-lg-6 col-md-6">
                        <label for="MiddleName" class="form-label">
                          Race Course
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="MiddleName"
                        />
                      </div>
                      <div class="col-lg-6 col-md-6">
                        <label for="FirstName" class="form-label">
                          Race Date
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="FirstName"
                        />
                      </div>

                      <div class="col-lg-6 col-md-6">
                        <label for="MiddleName" class="form-label">
                          Race Length
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="MiddleName"
                        />
                      </div>

                      <div class="col-lg-6 col-md-6">
                        <label for="FirstName" class="form-label">
                          Race Age Criteria
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="FirstName"
                        />
                      </div>

                      <div class="col-lg-6 col-md-6">
                        <label for="MiddleName" class="form-label">
                          Race Weight Criteria
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="MiddleName"
                        />
                      </div>

                      <div class="col-md-6 select">
                        <label for="HorseList" class="form-label">
                          Horse Name
                        </label>
                        <br />
                        <select
                          class="form-select form-select-lg mb-3 selectpicker f"
                          aria-label=".form-select-lg example"
                          id="HorseList"
                        >
                          <option selected>Select Horse</option>
                          <option value="1">Breeder</option>
                          <option value="2">Trainer</option>
                          <option value="3">Owner</option>
                          <option value="1">Staff</option>
                        </select>
                      </div>

                      <div class="col-12">
                        <br />
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                          />
                          <label class="form-check-label" for="gridCheck">
                            By clicking submit you agree to our Privacy Policy
                            and Terms and Conditions
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <br />
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <br />
      <br />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    token: state.user.token,
    email: state.user.email,
    horse: state.user.horses,
    data: state.racereducer.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postRaceRequest: () => dispatch(postRaceRequest()),
    postRaceSuccess: data => dispatch(postRaceSuccess(data)),
    postRaceFailure: error => dispatch(postRaceFailure(error))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddParticipate);
