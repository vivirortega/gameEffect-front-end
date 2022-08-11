import { Background, Blue, PosterDiv } from "./style";
import { HiChevronLeft, HiBookmark } from "react-icons/hi";
import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import icontest from "../../../assets/icon.png";
import poster from "../../../assets/poster.png";
import UserContext from "../../../contexts/usercontext";

export default function Game() {
  const [game, setGame] = useState([]);
  const [newGame, setNewGame] = useState([]);
  const { id } = useParams();
  const { token } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    console.log(config);
    renderGame();
  }, []);

  function renderGame() {
    const promise = axios.get(`http://localhost:5000/game/${id}`, config);
    promise.then((response) => {
      setGame(response.data);
      setNewGame(response.data);
      console.log("deu certo");
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <Background>
        <div className="header">
          <Link to="/">
          <HiChevronLeft className="return" />
          </Link>
          <div>
            <HiBookmark className="save" />
            <img src={icontest}></img>
          </div>
        </div>
        <PosterDiv>
        <img src={poster} className="poster"></img>
        </PosterDiv>
        <Blue>
          <h1>Final Fantasy 7 Remake</h1>
          <h2>JRPG</h2>
          <h3>Release Date 04/10</h3>
          <h4>
            The story takes place in the dystopian metropolis of Midgar and
            follows mercenary Cloud Strife, who joins an eco-terrorist group in
            an attempt to stop a powerful Shinra megacorporation from using the
            planet's vital essence as a source of energy.
          </h4>
        </Blue>
      </Background>
    </>
  );
}
