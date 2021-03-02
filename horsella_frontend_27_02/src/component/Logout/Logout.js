import React from "react";
import { setClient, unsetClient } from "../../Redux/Index";
import { connect } from "react-redux";

function Logout({ unsetClient, history }) {
  const logout = () => {
    unsetClient();
    history.push("/");
  };

  return <div>{logout()}</div>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    unsetClient: () => dispatch(unsetClient()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
