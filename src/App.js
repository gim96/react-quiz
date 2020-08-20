import React, { Component } from "react";
import Tasks from "./components/Tasks";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Redirect from="/app" to="/components/login" />
          <Route path="/components/task" component={Tasks} />
          <Route path="/components/login" component={Login} />
          <Route path="/components/register" component={Register} />
          <Route path="/components/logout" component={Logout} />
        </div>
      </Router>
    );
  }
}

export default App;
