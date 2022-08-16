import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Footer from "../../footer/footer";
import UserContext from "../../../contexts/usercontext";
import { useParams, Link } from "react-router-dom";
import { Background, AvaliationsPage, Header, Gap, Review } from "./style";
import { HiChevronLeft } from "react-icons/hi";
import { FaStar } from "react-icons/fa";

export default function Avaliations() {
  const [avaliations, setAvaliations] = useState([]);
  const { id } = useParams();
  const { token, image, username, userId } = useContext(UserContext);
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
      `https://gameeffects.herokuapp.com/game/${id}/avaliations`,
      config
    );
    promise.then((response) => {
      setAvaliations(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  return (
    <AvaliationsPage>
      <Header>
        <Link to={`/game/${id}`}>
          <HiChevronLeft className="return" />
        </Link>
      </Header>
      <h1>All Reviews</h1>
      <Gap>
        {avaliations.map((avaliation) => {
          return (
            <Background>
              <div className="user-info">
                <img src={avaliation.icon} alt="icon"/>
                <span className="user">{avaliation.username}</span>
                <Review>
                  <span className="review">{avaliation.rate}</span>
                  <FaStar className="star" />
                </Review>
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
