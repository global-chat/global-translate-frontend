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
      storedMessage: [],
      language: "en",
      showEmojiPicker: false,
    };
  }
 
  componentDidMount() {
    ws = new Sockette(
      `wss://6u0sg2u4x6.execute-api.us-west-2.amazonaws.com/Test?username=${this.props.userName}`,
      {
        timeout: 5e3,
        maxAttempts: 1,
        onopen: e => {
          console.log("connected:", e);
        },
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

  sendInitial = () => {
    ws.json({
      message: "sendMessage",
      data: "Initial"
    });
  }

  onMessageReceived = ({ data }) => {
    let message = JSON.parse(data);
    console.log(message);
    this.setState({ storedMessage: [...this.state.storedMessage, message] });
  };
 
  onSendMessage =async event => {
    event.preventDefault();

    const result = await fetch(`https://rop898gbik.execute-api.us-west-2.amazonaws.com/initial`, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({'source': "en", 'target': this.state.language, 'text': event.target.chat.value})
      });
      const content = await result.json();
      const msg=content.body.TranslatedText;
    ws.json({
      message: "sendMessage",
      data: { "chat": msg, "userName": this.props.userName, "language": this.state.language }
    });
  };

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

  selectLanguage = async event => {
    let newArr=[];
    const language =  event.target.value;
    this.setState({
      "language":language
    });
    for (let i = 0; i < this.state.storedMessage.length; i++) {
      const result = await fetch(`https://rop898gbik.execute-api.us-west-2.amazonaws.com/initial`, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({'source': this.state.storedMessage[i].language, 'target': language, 'text': this.state.storedMessage[i].chat})
      });
      const content = await result.json();
      let newM={
        "chat":content.body.TranslatedText,
        "userName":this.props.userName,
        "language":language
      }
          newArr.push(newM);
      console.log(content.body.TranslatedText);
    }
   this.setState({
     storedMessage: newArr
   });
  }

  render() {
    const {
      // [..]
      showEmojiPicker,
    } = this.state;
    console.log("running");

    return (
      <Fragment>
        <form onChange={event => this.selectLanguage(event)}>
          <select>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="es">Spanish</option>
          </select>
        </form>
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
      {this.state.storedMessage.map( (message,i) => <li key={i}>{message.userName} says: {message.chat}.</li>)}
      </ul>
      </Fragment>
    );
  }
};

