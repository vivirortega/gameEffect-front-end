import { Background, Blue, PosterDiv, Ratings, Form } from "./style";
import { HiChevronLeft, HiBookmark } from "react-icons/hi";
import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import icontest from "../../../assets/icon.png";
import UserContext from "../../../contexts/usercontext";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";
import Star from "../../stars/star";

export default function Game() {
  const [game, setGame] = useState({});
  const [newReview, setNewReview] = useState(false);
  const [review, setReview] = ("");
  const { id } = useParams();
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
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
      console.log(response.data);
      console.log("deu certo");
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  function toAvaliations() {
    navigate(`/game/${id}/avaliations`);
  }

  function toAvaliationPost() {
    setNewReview(true);
  }

  return Object.keys(game).length > 0 ? (
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
        <>
          <PosterDiv>
            <img src={game.pictureUrl} className="poster"></img>
          </PosterDiv>
          <Blue>
            <h1>{game.name}</h1>
            <h2>{game.genre}</h2>
            <h3>{game.releaseDate}</h3>
            <h4>{game.description}</h4>
            <Ratings>
              <h5>Ratings and Reviews</h5>
              <h6 onClick={toAvaliations}>See All</h6>
            </Ratings>
            <BsFillPlusSquareFill
              className="button"
              onClick={toAvaliationPost}
            />
            {newReview === true ? 
            <Form>
            <span>Rate</span>
           <Star/>
           <input
              required
              value={review}
              placeholder="review"
              onChange={(e) => setReview(e.target.value)}
            ></input>
            </Form> : <></>}
          </Blue>
        </>
      </Background>
    </>
  ) : (
    <img src={ThreeDots} />
  );
}
