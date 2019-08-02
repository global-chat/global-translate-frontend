import React, { Component, Fragment } from "react";
import { Smile } from 'react-feather';
import { Picker } from 'emoji-mart'
import Sockette from "sockette";
import Navigation from './nav';
import 'emoji-mart/css/emoji-mart.css'

let ws = null;
export default class ChatWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storedMessage: [],
      language: "en",
      target: "en",
      showEmojiPicker: false,
    };
  }

  componentDidMount() {
    ws = new Sockette(
      `wss://6u0sg2u4x6.execute-api.us-west-2.amazonaws.com/Test?username=${this.props.userName}&token=${this.props.userToken}`,
      {
        timeout: 5e3,
        maxAttempts: 1,
        onopen: e => {
          console.log("connected:", e);
          this.sendInitial();
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
      data: { "chat": `${this.props.userName} has joined the chat.`, "userName": this.props.userName, "language": "en", "state": "onconnect" }
    });
  }

  onMessageReceived = async ({ data }) => {
    let message = JSON.parse(data);
    if (!message.isEmoji) {
      const result = await fetch(`https://rop898gbik.execute-api.us-west-2.amazonaws.com/initial`, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 'source': message.language, 'target': this.state.target, 'text': message.chat })
      });
      const content = await result.json();
      let msg;
      if (content.body) {
        msg = content.body.TranslatedText;
      } else {
        msg = message.chat;
      }
      message.chat = msg;
      message.language = this.state.target;
    }
    this.setState({ storedMessage: [...this.state.storedMessage, message] });
  };

  onSendMessage = async event => {
    let messageValue = event.target.chat.value;
    event.preventDefault();
    if (event.native != null) {
      ws.json({
        message: "sendMessage",
        data: { "chat": event.native, "userName": this.props.userName, "language": this.state.language, "isEmoji": true }
      });
    } else {


      const result = await fetch(`https://rop898gbik.execute-api.us-west-2.amazonaws.com/initial`, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 'source': "auto", 'target': this.state.target, 'text': event.target.chat.value })
      });
      const content = await result.json();
      let msg;
      if (content.body) {
        msg = content.body.TranslatedText;
      } else {
        msg = messageValue;
      }
      ws.json({
        message: "sendMessage",
        data: { "chat": msg, "userName": this.props.userName, "language": this.state.target, "isEmoji": false }
      });


    }
  };
  addEmoji = (e) => {
    ws.json({
      message: "sendMessage",
      data: { "chat": e.native, "userName": this.props.userName, "isEmoji": true }
    });
  };

  //toggle emoji box
  changeStatus = (e) => {
    this.setState({ showEmojiPicker: !this.state.showEmojiPicker });
  };

  selectLanguage = async event => {
    let newArr = [];
    const trlanguage = event.target.value;
    this.setState({
      "target": trlanguage
    });
    for (let i = 0; i < this.state.storedMessage.length; i++) {
      if (!this.state.storedMessage[i].isEmoji) {
        const result = await fetch(`https://rop898gbik.execute-api.us-west-2.amazonaws.com/initial`, {
          mode: 'cors',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ 'source': this.state.storedMessage[i].language, 'target': trlanguage, 'text': this.state.storedMessage[i].chat })
        });
        const content = await result.json();
        let newM = {
          "chat": content.body.TranslatedText,
          "userName": this.props.userName,
          "language": trlanguage,
          "isEmoji": false
        }
        newArr.push(newM);
        console.log(content.body.TranslatedText);
      }
      else {
        newArr.push(this.state.storedMessage[i]);
      }
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
    return (
      <Fragment>
        <Navigation></Navigation>
        <form onChange={event => this.selectLanguage(event)}>
          <select>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="zh">Chinese</option>
            <option value="cs">Czech</option>
            <option value="da">Danish</option>
            <option value="nl">Dutch</option>
            <option value="fi">Finnish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="he">Hebrew</option>
            <option value="hi">Hindi</option>
            <option value="id">Indonesian</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
            <option value="ru">Russian</option>
            <option value="es">Spanish</option>

          </select>
        </form>
        <form onSubmit={event => this.onSendMessage(event)} >
          <div className="container">
            <input type="text" placeholder="Enter Text" name="chat" required />
            <button className="sendbtn">
              Send
            </button>
            <Smile onClick={e => this.changeStatus(e)} />
          </div>
          {showEmojiPicker ? (
            <Picker set="emojione" onSelect={this.addEmoji} />
          ) : null}

        </form>

        <ul>
          {this.state.storedMessage.map((message) => <li >{message.userName} says: {message.chat}.</li>)}
        </ul>
      </Fragment>
    );
  }
};

