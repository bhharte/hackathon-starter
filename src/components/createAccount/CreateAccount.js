import React from "react";
// import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
// import "./LoginForm.css";

class CreateAccount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          username: "",
          password: ""
        };
      }
    
      handleLogin = e => {
        e.preventDefault();
        this.props.login(this.state);
      };
    
      handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

 render (){
     return (<div className="createAccount"><h1> Welcome to Kwitter! </h1>
     <h3> Create a new account: </h3>
     <form id="create-form" onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <button type="submit">
            Create *send me somewhere
          </button>
        </form>
     </div>)
    }
}

export default withAsyncAction("auth", "login")(CreateAccount);
