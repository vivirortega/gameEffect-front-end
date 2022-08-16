import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/usercontext";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import Home from ".//pages/home/home";
import User from "./pages/user/user";
import Game from "./pages/game/game";
import CreateGame from "./pages/createGame/createGame";
import Avaliations from "./pages/avaliations/avaliation";  

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [image, setImage] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [userId, setUserId] = useState("");
  const [avaliation, setAvaliation] = useState("");
  const [heartit, setHeartit] = useState("");
  const [gameId, setGameId] = useState("");

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        image,
        setImage,
        username,
        setUsername,
        bio,
        setBio,
        userId,
        setUserId,
        avaliation,
        setAvaliation,
        heartit,
        setHeartit,
        gameId, setGameId
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/game" element={<CreateGame />}></Route>
          <Route path="/game/:id" element={<Game />}></Route>
          <Route path="/game/:id/avaliations" element={<Avaliations />}></Route>
          <Route path="/user/:id" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
