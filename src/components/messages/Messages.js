import React from "react";
import { withAsyncAction } from "../../redux/HOCs";

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      message: '',
      count: 0,
      image: ''
    }
  }

  componentDidMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.getMessage(this.props.username).then((res) => {
      console.log(res.payload)
      this.setState({
        messages: res.payload.messages,
        count: res.payload.count
      })
    })
  }

  newMessageHandler = () => {
    let text = this.state.message;
    this.props.createMessage(text).then(() => {
      this.fetchMessages();
      this.setState({
        message: ''
      })
    })
  }

  handleChange = (event) => {
    let data = {...this.state};
   
    data[event.target.name] = event.target.value;   

    this.setState(data);
  }

  handleLike = (event) => {
    // like
  }

  render() {
    let display = (<div>No Messages Found</div>)
    if (this.state.messages) {
      display = this.state.messages.map((value) => {
        return (<div className="d-flex">
          <li className="list-group-item border bg-light rounded font-weight-bold flex-grow-1 my-1" key={value.id}>{value.text}  
          <br/></li>
          <button onClick={this.handleLike} className="btn btn-sm btn-primary float-right my-1">Like
          </button>
          </div>
        )
      })
    }

    return (
      <div className="Messages">
        <div className="NewMessage container d-flex">
          <input className="flex-grow-1" name="message" onChange={this.handleChange} value={this.state.message}/>
          <button className="float-right btn btn-primary" onClick={this.newMessageHandler}>Create Post</button>
        </div>
        <div className="ListMessage d-flex-column">
          {display}
        </div>
      </div>
    );
  }
}

export default withAsyncAction("profile", "all")(Messages);
