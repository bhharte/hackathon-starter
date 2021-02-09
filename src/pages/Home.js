import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="container d-flex align-items-center">
          <div className="m-5">
            <h2>Welcome to Kwitter,</h2>
            <h3 className="text-weight-lighter font-italic text-light bg-warning p-2">The internet's least utilized microblogging platform</h3>
          </div>
          <div className="d-flex-column justify-content-center m-5">
            <Menu />
            
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
