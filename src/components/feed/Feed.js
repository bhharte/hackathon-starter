import React from "react";
import { withAsyncAction } from "../../redux/HOCs";
import { Link } from "react-router-dom";

class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render() {
    return (
        <div>
            
        </div>
    )
  }
}

export default withAsyncAction("auth", "login")(Feed);
