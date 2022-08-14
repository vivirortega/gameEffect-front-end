import Footer from "../../footer/footer";
import Header from "../../header/header";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../../contexts/usercontext";
import axios from "axios";
import { Div, Background, Cards } from "./style";
import { Link } from "react-router-dom";

export default function Home() {
  const [game, setGame] = useState([]);
  const { token } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    renderRecentGame();
  }, []);

  function renderRecentGame() {
    const promise = axios.get(`http://localhost:5000/`, config);
    promise.then((response) => {
      setGame(response.data);
      console.log(response.data);
      console.log("deu certo");
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <Header />
      <Div>
        <h1>Recently added</h1>
        <Cards>
          {game.map((games, i) => {
            while(i < 5) {
            return (
              <Link to={`/game/${games.id}`}>
              <Background>
                <img src={games.pictureUrl} />
                <h2>{games.name}</h2>
                <h3>{games.releaseDate}</h3>
              </Background>
              </Link>
            );
          }})}
        </Cards>
      </Div>
      <Footer />
    </>
  );
}
