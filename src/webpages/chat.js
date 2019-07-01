import React, { useEffect, useState } from "react";
import Sockette from "sockette";
import Navigation from "./nav";
let ws = null;

const ChatWindow = props => {

  useEffect(
    () => {
        ws = new Sockette(
          "wss://6u0sg2u4x6.execute-api.us-west-2.amazonaws.com/Test",
          {
            timeout: 5e3,
            maxAttempts: 1,
            onopen: e => console.log("connected:", e),
            onmessage: e => onMessageReceived(e),
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
    },
  );

  const onMessageReceived = ({ data }) => {
    console.log(data);
  };


  return (
    <>
    <Navigation></Navigation>
    <div>
    </div>
    </>
  );
};

export default ChatWindow;
