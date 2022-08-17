import {
  Background,
  Blue,
  PosterDiv,
  Ratings,
  Form,
  Rate,
  Stars,
  Icons,
  Buttons,
} from "./style";
import { HiChevronLeft, HiBookmark } from "react-icons/hi";
import { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../../contexts/usercontext";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { ThreeDots } from "react-loader-spinner";
import Star from "../../stars/star";
import Heart from "../../heart/heart";
import { FaStar } from "react-icons/fa";

export default function Game() {
  const { token, image, userId, avaliation, setAvaliation, heartit, setGameId } =
    useContext(UserContext);
  const [game, setGame] = useState({});
  const [gamelist, setGamelist] = useState(false);
  const [newReview, setNewReview] = useState(false);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [rate, setRate] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  setGameId(game.id);
  const URL = `https://gameeffects.herokuapp.com`;

  useEffect(() => {
    const promise = axios.get(`${URL}/game/${id}`, config);
    promise.then((response) => {
      setGame(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    const promise = axios.get(`${URL}/game/${id}/rate`, config);
    promise.then((response) => {
      setRate(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }, []);

  function toAvaliations() {
    navigate(`/game/${id}/avaliations`);
  }

  function toAvaliationPost() {
    setNewReview(true);
  }

  function saveGamelist(event){
    setGamelist(true);
    event.preventDefault();

    const response = { gamelist: gamelist };
  
    const promise = axios.post(
      `${URL}/game/${id}/gamelist`,
      response,
      config
    );
    promise.then((response) => {
      console.log("gamelist deu certo")
      console.log(response)
    });
    promise.catch((error) => {
      alert("Confira os dados e tente novamente");
      console.log(error);
    
    });
    promise.finally(() => {
      setLoading(false);
      setNewReview(false);
    });
  }


  function insertAvaliation(event) {
    const newAvaliation = { review: review, rate: avaliation, isFavorite: heartit };
    event.preventDefault();
    setLoading(true);

    const promise = axios.post(
      `${URL}/game/${id}/avaliation`,
      newAvaliation,
      config
    );
    promise.then((response) => {

    });
    promise.catch((error) => {
      alert("Confira os dados e tente novamente");
      console.log(error);
      setReview("");
    });
    promise.finally(() => {
      setLoading(false);
      setNewReview(false);
    });
  }

  return Object.keys(game).length > 0 ? (
    <>
      <Background>
        <div className="header">
          <Link to="/home">
            <HiChevronLeft className="return" />
          </Link>
          <div>
            <div className="icon">
            <HiBookmark className="save" onClick={saveGamelist} />
            <Link to={`/user/${userId}`}>
              <img src={image}></img>
            </Link>
            </div>
          </div>
        </div>
        <>
          <PosterDiv key={game.id}>
            <img src={game.pictureUrl} className="poster"></img>
          </PosterDiv>
          <Blue>
            <h1>{game.name}</h1>
            <h2>{game.genre}</h2>
            <h3 className="date">{game.releaseDate}</h3>
            <h4>{game.description}</h4>
            <Ratings>
              <Rate>
                <h5>Ratings and Reviews</h5>
                <Stars>
                  {rate.map((rates) => {
                    return <span>{rates.rate}</span>;
                  })}
                  <FaStar className="star" />
                </Stars>
              </Rate>
              <h6 onClick={toAvaliations}>See All</h6>
            </Ratings>
            <BsFillPlusSquareFill
              className="button"
              onClick={toAvaliationPost}
            />
            {newReview === true ? (
              <Form onSubmit={insertAvaliation}>
                <span>Rate</span>
                <Icons>
                  <Star className="avaliation" onChange={(e) => setAvaliation(e.target.value)} />
                  <Heart value={heartit}/>
                </Icons>
                <input
                  required
                  value={review}
                  placeholder="write your review"
                  onChange={(e) => setReview(e.target.value)}
                ></input>
                <Buttons>
                  <button type="submit" disabled={loading}>
                    {loading ? (
                      <div className="loading">
                        <ThreeDots color="#fff" />{" "}
                      </div>
                    ) : (
                      "Review"
                    )}
                  </button>
                  <button
                    className="cancel"
                    onClick={() => setNewReview(false)}
                  >
                    Cancel
                  </button>
                </Buttons>
              </Form>
            ) : (
              <></>
            )}
          </Blue>
        </>
      </Background>
    </>
  ) : (
    <img src={ThreeDots} />
  );
}
