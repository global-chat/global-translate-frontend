import React, { Component, Fragment } from "react";
import { Smile } from 'react-feather';
import { Picker } from 'emoji-mart'
import Sockette from "sockette";
import 'emoji-mart/css/emoji-mart.css'
let ws = null;

export default class ChatWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEmojiPicker: false,
      storedMessage: []
    };
  }
 
  componentDidMount() {
    ws = new Sockette(
      "wss://6u0sg2u4x6.execute-api.us-west-2.amazonaws.com/Test",
      {
        timeout: 5e3,
        maxAttempts: 1,
        onopen: e => console.log("connected:", e),
        onmessage: e => this.onMessageReceived(e),
        onreconnect: e => console.log("Reconnecting...", e),
        onmaximum: e => console.log("Stop Attempting!", e),
        onclose: e => console.log("Closed!", e),
        onerror: e => console.log("Error:", e)
      }
    );
    return function cleanup() {
      ws && ws.close();
      ws = null;
    };
  }

  onMessageReceived = ({ data }) => {
    let message = JSON.parse(data);
    this.setState({ storedMessage: [...this.state.storedMessage, message] });
  };
 
  onSendMessage = event => {
    event.preventDefault();
    ws.json({
      message: "sendMessage",
      data: {"chat":event.target.chat.value, "userName": this.props.userName}
    });
  }
  addEmoji = (e) => {
    console.log(e.native)
    let message= e.native;
    // this.setState({ storedMessage: [...this.state.storedMessage, message] });
    ws.json({
      message: "sendMessage",
      data: {"chat":e.native, "userName": this.props.userName}
    });
  };
  changeStatus = (e)=>{
  if(this.state.showEmojiPicker===false){
    this.setState({showEmojiPicker:true});
  }
  else{
    this.setState({showEmojiPicker:false});
  }

  };

  render() {
    const {
      // [..]
      showEmojiPicker,
    } = this.state;
    
    let messageList = [];
    for(let i = 0; i < this.state.storedMessage.length; i++) {
      messageList.push(
      <li key={i}>{this.state.storedMessage[i].userName} says: {this.state.storedMessage[i].chat}.</li>)
    }
    return (
      <Fragment>
      <form onSubmit={event => this.onSendMessage(event)} >
        <div className="container">
          <input type="text" placeholder="Enter Text" name="chat" required />
          <button className="sendbtn">
            Send         
            </button>
            <Smile onClick={e=>this.changeStatus(e)}/>          
        </div>
        {showEmojiPicker ? (
                  <Picker set="emojione" onSelect={this.addEmoji} />
                ) : null}

      </form>
     
      <ul>
      {messageList}
      </ul>
      </Fragment>
    );
  }
};

