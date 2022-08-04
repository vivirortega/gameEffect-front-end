import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import Home from "./pages/home";
import User from "./pages/user";
import Game from "./pages/game";


export default function App(){
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
         <Route path="/" element={<Home />}></Route>
         <Route path="/game/:id" element={<Game />}></Route>
         <Route path="/user/:id" element={<User />}></Route>
        </Routes>
        </BrowserRouter>
    )
}