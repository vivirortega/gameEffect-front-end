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
  const { token, image, userId, avaliation, setAvaliation, heartit, setHeartit } =
    useContext(UserContext);
  const [game, setGame] = useState({});
  const [newReview, setNewReview] = useState(false);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [rate, setRate] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(heartit)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(avaliation);

  useEffect(() => {
    const promise = axios.get(`http://localhost:5000/game/${id}`, config);
    promise.then((response) => {
      setGame(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    const promise = axios.get(`http://localhost:5000/game/${id}/rate`, config);
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

  function insertAvaliation(event) {
    const newAvaliation = { review: review, rate: avaliation, isFavorite: heartit };
    event.preventDefault();
    setLoading(true);

    const promise = axios.post(
      `http://localhost:5000/game/${id}/avaliation`,
      newAvaliation,
      config
    );
    promise.then((response) => {
      console.log("deu certo");

      //localStorage.setItem("token", response.data.token);
    });
    promise.catch((error) => {
      alert("Confira os dados e tente novamente");
      console.log(error);
      console.log(avaliation);
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
          <Link to="/">
            <HiChevronLeft className="return" />
          </Link>
          <div>
            <HiBookmark className="save" />
            <Link to={`/user/${userId}`}>
              <img src={image}></img>
            </Link>
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
                  <Star onChange={(e) => setAvaliation(e.target.value)} />
                  <Heart value={heartit}/>
                </Icons>
                <input
                  required
                  value={review}
                  placeholder="review"
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
