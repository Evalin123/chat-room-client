import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import webSocket from "socket.io-client";
import Home from "./pages/home";
import Chat from "./pages/chat";

const ws = webSocket("https://chat-room-server.onrender.com", {
  transports: ["websocket"],
});

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                username={username}
                setUsername={setUsername}
                room={room}
                setRoom={setRoom}
                socket={ws}
              />
            }
          />
          <Route
            path="/chat"
            element={<Chat username={username} room={room} socket={ws} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
