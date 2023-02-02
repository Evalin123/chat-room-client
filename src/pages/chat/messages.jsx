import { useState, useEffect } from "react";
import "../../assets/styles/Messages.sass";

const Messages = ({ socket, username }) => {
  const [messagesReceived, setMessagesReceived] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      // console.log(data);
      setMessagesReceived((state) => [
        ...state,
        {
          message: data.message,
          username: data.username,
          __createdTime__: data.__createdTime__,
        },
      ]);
    });

    return () => socket.off("receive_message");
  }, [socket]);

  const formatDateFromTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className="message">
      <div className="message__container">
        {messagesReceived.map((msg, i) => (
          <div
            key={i}
            className={
              msg.username === username
                ? "message__box"
                : "message__box message__box--other"
            }
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>{msg.username}</p>
              <p>{formatDateFromTimestamp(msg.__createdTime__)}</p>
            </div>
            <p>{msg.message}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
