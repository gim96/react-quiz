import React, { Component } from "react";

class Logout extends Component {
  constructor(props) {
    super(props);

    localStorage.removeItem("s_user");

    if (!localStorage.getItem("s_user")) {
      this.props.history.push("/components/login");
    }
  }

  render() {
    return <div></div>;
  }
}

export default Logout;
