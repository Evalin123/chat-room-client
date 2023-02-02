import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/Room.sass";

const RoomAndUsers = ({ socket, username, room }) => {
  const [roomUsers, setRoomUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("chatroom_users", (data) => {
      //   console.log(data);
      setRoomUsers(data);
    });

    return () => socket.off("chatroom_users");
  }, [socket]);

  const leaveRoom = () => {
    const __createdTime__ = Date.now();
    socket.emit("leave_room", { username, room, __createdTime__ });
    // Redirect to home page
    navigate("/", { replace: true });
  };

  return (
    <div className="room">
      <div className="room__container">
        <h2 className="room__title">{room}</h2>
        <div>
          {roomUsers.length > 0 && <h3 className="room__title">Users :</h3>}
          <ul className="room__user">
            {roomUsers.map((user) => (
              <li
                style={{
                  fontWeight: `${
                    user.username === username ? "bold" : "normal"
                  }`,
                  margin: "10px 0",
                }}
                key={user.id}
              >
                {user.username}
              </li>
            ))}
          </ul>
        </div>

        <button className="room__button" onClick={leaveRoom}>
          Leave
        </button>
      </div>
    </div>
  );
};

export default RoomAndUsers;
