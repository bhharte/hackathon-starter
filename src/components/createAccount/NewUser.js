import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import { Link } from "react-router-dom";
// import "./LoginForm.css";

class NewUser extends React.Component {
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

  render() {
    const { loading } = this.props;
    return (
      // <div className="newUser">
      //   <form id="newUser" onSubmit={this.handleLogin}>
      //     <button type="submit" disabled={loading}>
           <Link to="/newuser"> New? Create account </Link>
      //     </button>
      //   </form>
      //   {loading && <Spinner name="circle" color="blue" />}
      // </div>
    );
  }
}

export default withAsyncAction("auth", "login")(NewUser);
