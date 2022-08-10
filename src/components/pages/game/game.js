import { Background, Blue } from "./style";
import { HiChevronLeft, HiBookmark } from "react-icons/hi";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import icontest from "../../../assets/icon.png";
import poster from "../../../assets/poster.png";
import UserContext from "../../../contexts/usercontext";

export default function Game() {
  const [game, setGame] = useState([]);
  const {id} = useParams();
  const { token } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    renderGame();
  }, []);

  function renderGame() {
    const promise = axios.get(`http://localhost:5000/game/${id}`, config);
    promise.then((response) => {
      setGame(response.data);
      console.log("deu certo");
    });
    promise.catch((error) => {
      console.log(error);
      console.log(config);
    });
  }

  return (
    <>
      <Background>\
        <div className="header">
          <HiChevronLeft className="return" />
          <div>
            <HiBookmark className="save" />
            <img src={icontest}></img>
          </div>
        </div>
        <img src={poster} className="poster"></img>
        <Blue>
          <h1>Final Fantasy 7 Remake</h1>
          <h2>JRPG</h2>
          <h3>Release Date 04/10</h3>
        </Blue>
      </Background>
    </>
  );
}
