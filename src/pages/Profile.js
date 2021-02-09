import React from "react";
import Menu from "../components/menu/Menu";
import Messages from "../components/messages/Messages"
import { userIsAuthenticated } from "../redux/HOCs";

class Profile extends React.Component {
  
  getPhoto = () => {
    return this.props.getPicture(this.props.match.params.username);
  }

  

  render() {
    console.log(this.props)
    let profilePic = this.getPhoto;
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div className="container d-flex">
          <div className="border p-3">
            <h2>Welcome, {this.props.match.params.username}!</h2>
            <img src="https://ca.slack-edge.com/TCNHBFEG3-UHRD555K8-4858433c8bd5-512" alt="Profile Picture" className="img-thumbnail"/>
            <p className="font-weight-bold">Cliche bio!</p>
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
