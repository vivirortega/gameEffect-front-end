import { Form, Title, Background } from "./style";
import { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import UserContext from "../../../contexts/usercontext";
import Header from "../../header/header";
import Footer from "../../footer/footer";

export default function CreateGame() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [description, setDescription] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useContext(UserContext);
  const URL = `https://gameeffects.herokuapp.com`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function createGame(event) {
    event.preventDefault();
    setLoading(true);

    const data = { name, genre, releaseDate, description, pictureUrl };
    const promise = axios.post(`${URL}/game`, data, config);
    promise.then((response) => {
      console.log("deu certo");
      setLoading(false);
      setName("");
      setGenre("");
      setReleaseDate("");
      setDescription("");
      setPictureUrl("");
    });
    promise.catch((error) => {
      alert("Jogo já cadastrado no nosso banco de dados");
      setLoading(false);
    });
  }

  return (
    <>
    <Header/>
    <Background>
      <Form onSubmit={createGame}>
        <Title>Insert data and create a game in our database!</Title>
        <input
          type="text"
          value={name}
          disabled={loading}
          onChange={(e) => setName(e.target.value)}
          placeholder="Title"
          required
        ></input>
        <input
          type="text"
          disabled={loading}
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Genre"
        ></input>
        <input
          type="text"
          value={releaseDate}
          disabled={loading}
          onChange={(e) => setReleaseDate(e.target.value)}
          placeholder="ReleaseDate"
          required
        ></input>
        <input
          type="text"
          disabled={loading}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        ></input>
        <input
          type="text"
          disabled={loading}
          value={pictureUrl}
          onChange={(e) => setPictureUrl(e.target.value)}
          placeholder="Game poster URL"
          required
        ></input>
        <button type="submit" disabled={loading}>
          {loading ? (
            <div className="loading">
              <ThreeDots color="#fff" />{" "}
            </div>
          ) : (
            "Create game"
          )}
        </button>
      </Form>
    </Background>
    <Footer/>
    </>
  );
}
