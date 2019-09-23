import React, { Component } from "react";
import { Link } from "react-router-dom";
class SignIn extends Component {
  render() {
    return (
      <section className="wrapper">
        <section className="main-content">
          <h3>Log In</h3>
          <div className="log-in">
            <form name="login-form">
              <div className="input-group">
                <label htmlFor="userID">UserID</label>
                <input
                  onChange={this.props.handleChange}
                  type="text"
                  value={this.props.form.userID}
                  name="userID"
                  placeholder="Enter User ID"
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  onChange={this.props.handleChange}
                  type="password"
                  value={this.props.form.password}
                  name="password"
                  placeholder="Enter Password"
                />
              </div>
              <button
                id="sub-btn"
                type="button"
                onClick={e => this.props.handleSigninSubmit(e)}
                name="button"
                disabled={!this.props.form.userID | !this.props.form.password}
              >
                Log In
              </button>
            </form>
          </div>

          {/* <button onClick={e => this.props.handleGet(e)}>Test</button> */}
        </section>
      </section>
    );
  }
}

export default SignIn;
