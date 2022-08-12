import { Background, Blue, PosterDiv } from "./style";
import { HiChevronLeft, HiBookmark } from "react-icons/hi";
import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import icontest from "../../../assets/icon.png";
import poster from "../../../assets/poster.png";
import UserContext from "../../../contexts/usercontext";
import { ThreeDots } from "react-loader-spinner";

export default function Game() {
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
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
    });
  }

  if (game.length === 0) {
    return <h1>Loading</h1>;
  } else {
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
          {game.map((games) => {
            return (
              <>
                <PosterDiv>
                  <img src={games.pictureUrl} className="poster"></img>
                </PosterDiv>
                <Blue>
                  <h1>{games.name}</h1>
                  <h2>{games.genre}</h2>
                  <h3>{games.releaseDate}</h3>
                  <h4>{games.description}</h4>
                </Blue>
              </>
            );
          })}
        </Background>
      </>
    );
  }
}
