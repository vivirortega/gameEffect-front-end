import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Footer from "../../footer/footer";
import UserContext from "../../../contexts/usercontext";
import { useParams, Link } from "react-router-dom";
import { Background, AvaliationsPage, Header, Gap } from "./style";
import { HiChevronLeft } from "react-icons/hi";

export default function Avaliations() {
  const [avaliations, setAvaliations] = useState([]);
  const { id } = useParams();
  const { token, image, username } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    renderAvaliations();
  }, []);

  function renderAvaliations() {
    const promise = axios.get(
      `http://localhost:5000/game/${id}/avaliations`,
      config
    );
    promise.then((response) => {
      setAvaliations(response.data);
      console.log(response.data);
      console.log("deu certo");
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  return (
    <AvaliationsPage>
      <Header>
        <Link to="/">
          <HiChevronLeft className="return" />
        </Link>
      </Header>
      <h1>All Reviews</h1>
      <Gap>
      {avaliations.map((avaliation) => {
        return (
          <Background>
            <div className="user-info">
              <img src={image} />
              <span>{username}</span>
            </div>
            <h2>{avaliation.review}</h2>
          </Background>
        );
      })}
      </Gap>
      <Footer />
    </AvaliationsPage>
  );
}
