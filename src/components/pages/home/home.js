import Footer from "../../footer/footer";
import Header from "../../header/header";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../../contexts/usercontext";
import axios from "axios";
import { Div, Background, Cards, Jrpgs } from "./style";
import { Link } from "react-router-dom";

export default function Home() {
  const [game, setGame] = useState([]);
  const [jrpg, setJrpg] = useState([]);;
  const [recent, setRecent] = useState([]);
  const { token, userId } = useContext(UserContext);
  const URL = `https://gameeffects.herokuapp.com`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(`${URL}/recent`, config);
    promise.then((response) => {
      setGame(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    const promise = axios.get(`${URL}/${userId}/recent`, config);
    promise.then((response) => {
      setRecent(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }, []);


  useEffect(() => {
    const promise = axios.get(`${URL}/jrpg`, config);
    promise.then((response) => {
      setJrpg(response.data);
      console.log("rpg deu certo");
    });
    promise.catch((error) => {
      console.log(error);
      console.log("rpg deu errado");
    });
  }, []);

  return (
    <>
      <Header />
      <Div>
        <h1>Recently added</h1>
        <Cards>
          {game.map((games, i) => {
            while (i < 10) {
              return (
                <Link className="link" to={`/game/${games.id}`}>
                  <Background>
                    <img src={games.pictureUrl} />
                    <h2>{games.name}</h2>
                    <h3>{games.releaseDate}</h3>
                  </Background>
                </Link>
              );
            }
          })}
        </Cards>
        <h4 className="rpgs">J-RPG Games</h4>
        <Jrpgs>
          {jrpg.map((jrpgs, i) => {
            while (i < 10) {
              return (
                <Link to={`/game/${jrpgs.id}`}>
                  <img src={jrpgs.pictureUrl} />
                </Link>
              );
            }
          })}
        </Jrpgs>
      </Div>

      <Footer />
    </>
  );
}
