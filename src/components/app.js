import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../contexts/usercontext"
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import Home from ".//pages/home/home";
import User from "./pages/user";
import Game from "./pages/game/game";
import CreateGame from "./pages/createGame/createGame";

export default function App() {
  const [token, setToken] = useState("");
  const [image, setImage] = useState("");
  return (
    <UserContext.Provider value={{token, setToken, image, setImage}}>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game" element={<CreateGame />}></Route>
        <Route path="/game/:id" element={<Game />}></Route>
        <Route path="/user/:id" element={<User />}></Route>
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}
