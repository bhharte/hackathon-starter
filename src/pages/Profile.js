import React from "react";
import Menu from "../components/menu/Menu";
import Messages from "../components/messages/Messages"
import { userIsAuthenticated } from "../redux/HOCs";

class Profile extends React.Component {
  
  render() {
    console.log(this.props)
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div className="container d-flex">
          <div>
            <h2>Other stuff</h2>
          </div>
          <div className="container float-right">
            <Messages username={this.props.match.params.username} />
          </div>
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
