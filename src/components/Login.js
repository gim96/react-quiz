import React, { Component } from "react";
import firebase from "./firebase";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      pass: "",
      userNN: "",
      passNN: "",
    };

    if (localStorage.getItem("s_user")) {
      this.props.history.push("/components/task");
    }

    this.handleChange_user = this.handleChange_user.bind(this);
    this.handleChange_pass = this.handleChange_pass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange_user(event) {
    this.setState({ user: event.target.value });
  }
  handleChange_pass(event) {
    this.setState({ pass: event.target.value });
  }

  handleSubmit(e) {
    if (this.state.user != "" && this.state.pass != "") {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.user, this.state.pass)
        .then((u) => {
          localStorage.setItem("s_user", this.state.user);
          this.props.history.push("/components/task");
          console.log(u);
        })
        .catch((err) => {
          alert("Email or password is wrong..!");
          console.log(err);
        });
    } else {
      alert("Username and Password are Reqired");
    }

    e.preventDefault();
  }

  render() {
    return (
      <div>
        <table width="100%" border="0" cellPadding="10">
          <tr>
            <td width="50%">
              {" "}
              <h5>English Tenses -Quize</h5>
            </td>

            <td width="50%" align="right">
              <Link to="/components/register">
                <button type="button" class="btn btn-outline-info">
                  Sign up
                </button>
              </Link>
            </td>
          </tr>
        </table>

        <br></br>
        <br></br>
        <div class="card" class="shadow p-3 mb-5 bg-white rounded">
          <form
            onSubmit={this.handleSubmit}
            class="text-center border border-light p-5"
          >
            <table align="center" border="0" width="22%" cellPadding="5">
              <tr>
                <td>
                  {" "}
                  <p class="h4 mb-4">LOGIN</p>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="text"
                    name="user"
                    placeholder="Username"
                    id="defaultLoginFormEmail"
                    class="form-control mb-10 "
                    onChange={this.handleChange_user}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="password"
                    name="pass"
                    placeholder="Password"
                    id="defaultLoginFormEmail"
                    class="form-control mb-6"
                    onChange={this.handleChange_pass}
                  />
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td align="right">
                  <button class="btn btn-info btn-block my-6">Login</button>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td align="center">
                  {" "}
                  <Link to="/components/register">Join as new player</Link>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
