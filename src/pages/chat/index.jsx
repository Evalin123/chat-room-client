import Messages from "./messages";
import SendMessage from "./send-message";
import RoomAndUsers from "./room-and-user";
import "../../assets/styles/Chat.sass";

const Chat = ({ username, room, socket }) => {
  return (
    <div className="chat">
      <div className="chat__container">
        <div className="chat__row">
          <div className="chat__room">
            <RoomAndUsers socket={socket} username={username} room={room} />
          </div>
          <div className="chat__content">
            <div className="chat__messages">
              <Messages socket={socket} username={username} />
            </div>
            <div className="chat__sendBox">
              <SendMessage socket={socket} username={username} room={room} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
