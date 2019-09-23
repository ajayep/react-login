import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";
import axios from "axios";
import Noty from "noty";
import "noty/lib/noty.css";

// my components
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";

import "./styles.css";

class App extends Component {
  state = {
    username: "",
    password: "",
    isLogInPage: true,
    isLoggedIn: false
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSigninSubmit = async () => {
    const { userID, password } = this.state;
    await axios
      .post("https://jasmine.actiotech.com/register", {
        userID,
        password
      })
      .then(res => {
        console.log(res);
        new Noty({
          text: "This is a " + res.data + " notification!",
          layout: "topLeft",
          theme: "mint",
          type: "success",
          timeout: 20
        }).show();
        this.setState({
          userID: "",
          password: "",
          isLoggedIn: false
        });
      })
      .catch(err => {
        console.log(err);
        new Noty({
          text: "Error in API!",
          layout: "top",
          theme: "mint",
          type: "error",
          timeout: 20
        }).show();
        this.setState({
          userID: "",
          password: "",
          isLoggedIn: false
        });
      });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/signin"
            render={props => (
              <SignIn
                {...props}
                form={this.state}
                handleSigninSubmit={this.handleSigninSubmit}
                handleChange={this.handleChange}
              />
            )}
          />
          <Route path="/dashboard" component={Home} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
