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
      // let messageId = this.state.messages[0].id;
      this.props.addLike(Number(JSON.parse(event.target.id).id)).then(() => {
        this.fetchMessages();
        this.setState({
          message: ''
        })
      })
      // .catch(
      //   console.log("caught"),
      //   this.props.removeLike(Number(JSON.parse(event.target.id).likes[0].id)).then(() => {
      //     this.fetchMessages();
      //     this.setState({
      //       // message: ''
      //     })
      //   })
      //   )
  }

  // JSON.stringify(value.likes[0])

  render() {
    let display = (<div>No Messages Found</div>)
    // console.log(this.state.messages);
    // console.log(this.state.message);
    
    if (this.state.messages) {
      display = this.state.messages.map((value) => {
        let isLiked = (value.likes[0])?"Liked (" + value.likes.length + ")":"Like";
        // let likeId = (value.likes[0].id)?(value.likes[0].id):"";
        // console.log(likeId);
        let theLike = value.likes[0];
        return (<div className="d-flex">
          <li className="list-group-item border bg-light rounded font-weight-bold flex-grow-1 my-1" key={value.id}>{value.text}  
          <br/></li>
        <button id={JSON.stringify(value)} onClick={this.handleLike} className="btn btn-sm btn-primary float-right my-1">{isLiked}
          </button>
          </div>
        )
      })
    }

    return (
      <div className="Messages">
        <div className="NewMessage container d-flex">
          <input className="form-control" name="message" onChange={this.handleChange} value={this.state.message}/>
          <button className="float-right btn btn-sm btn-primary" onClick={this.newMessageHandler}>Create Post</button>
        </div>
        <div className="ListMessage d-flex-column">
          {display}
        </div>
      </div>
    );
  }
}

export default withAsyncAction("profile", "all")(Messages);
