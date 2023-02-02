import React, { useState } from "react";
import "../../assets/styles/Send.sass";

const SendMessage = ({ socket, username, room }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message !== "") {
      const __createdTime__ = Date.now();

      socket.emit("send_message", { username, room, message, __createdTime__ });
      setMessage("");
    }
  };

  return (
    <div className="send">
      <div className="send__container">
        <input
          className="send__input"
          placeholder="Message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button className="send__button" onClick={sendMessage}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
