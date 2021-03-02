import React, { useState ,useEffect} from "react";
import { connect } from "react-redux";
import { registerUser } from "../../../../../api/UserApi";
import {
  setClient,
  unsetClient,
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFailure,
} from "../../../../../Redux/Index";

function Registration({
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFailure,
  token,
  history,
}) {
  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneRegion, setPhoneRegion] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState();
  const [type, setType] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    userRegisterRequest();
    const res = await registerUser(
      {
        firstname: firstName,
        middlename: middleName,
        lastname: lastName,
        email: email,
        phoneRegion: phoneRegion,
        phoneNumber: phoneNumber,
        country: country,
        type: type,
        password: password,
      },
      token
    );
    console.log(res);
    userRegisterSuccess();
    history.push("/dashboard");

    // if (res.status == 201) {
    //   userRegisterSuccess();
    //   history.push("/dashboard");
    // } else {
    //   userRegisterFailure(res);
    //   history.push("/dashboard/register");
    // }
  };

  useEffect(() => {
    
      $(document).ready(function(e) {
        $('.selectpicker').selectpicker();
      })
    
    }, [])
  return (
    <div>
      <form class="row g-3" onSubmit={handleSubmit}>
        <div class="col-lg-4 col-md-6">
          <label for="FirstName" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            id="FirstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div class="col-lg-4 col-md-6">
          <label for="MiddleName" class="form-label">
            Middle Name
          </label>
          <input
            type="text"
            class="form-control"
            id="MiddleName"
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>

        <div class="col-lg-4 col-md-12">
          <label for="LastName" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            id="LastName"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div class="col-md-6">
          <label for="Email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div class="col-md-6">
          <label for="Password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div class="col-md-6">
          <label for="PhoneNumber" class="form-label">
            Phone Number
          </label>
          <input
            type="text"
            class="form-control"
            id="PhoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div class="col-md-6">
          <label for="PhoneRegion" class="form-label">
            Phone Region
          </label>
          <br />
          <select
            id="PhoneRegion"
            class="form-select selectpicker f"
            onChange={(e) => setPhoneRegion(e.target.value)}
          >
            <option selected>Phone Region...</option>
            <option value="IN">IN</option>
          </select>
        </div>

        <div class="col-md-6">
          <label for="Country" class="form-label">
            Country
          </label>
          <input
            type="text"
            class="form-control"
            id="Country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        
        <div class="col-md-6 select">
        <label for="UserRole" class="form-label">
            User Type
          </label>
          <br />
          <select class="form-select form-select-lg mb-3 selectpicker f" aria-label=".form-select-lg example"
            id="UserRole"
            onChange={(e) => setType(e.target.value)}
          >
            <option selected>User Role</option>
            <option value="1">Breeder</option>
            <option value="2">Trainer</option>
            <option value="3">Owner</option>
            <option value="1">Staff</option>
          </select>
        </div>

        <div class="col-12">
          <br />
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              By clicking submit you agree to our Privacy Policy and Terms and
              Conditions
            </label>
          </div>
        </div>
        <div class="col-12">
          <br />
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}




const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userRegisterRequest: () => dispatch(userRegisterRequest()),
    userRegisterSuccess: () => dispatch(userRegisterSuccess()),
    userRegisterFailure: () => dispatch(userRegisterFailure()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
