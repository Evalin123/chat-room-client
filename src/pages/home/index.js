import { useNavigate } from "react-router-dom";
import "../../assets/styles/Home.sass";

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();

  const joinRoom = () => {
    if (room !== "" && username !== "") {
      socket.emit("join_room", { username, room });
    }
    navigate("/chat", { replace: true });
  };

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__body">
          <h1 className="home__title">Chat Rooms</h1>
          <input
            className="home__input"
            placeholder="Username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <select
            className="home__input"
            onChange={(e) => setRoom(e.target.value)}
          >
            <option>-- Select Room --</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Node">Node</option>
            <option value="Express">Express</option>
            <option value="React">React</option>
          </select>
          <button className="home__button" onClick={joinRoom}>
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
