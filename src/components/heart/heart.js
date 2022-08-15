import { useState, useContext } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import "./style.css";
import UserContext from "../../contexts/usercontext";

export default function Heart() {
  const { setHeartit } = useContext(UserContext);
  const [heart, setHeart] = useState(localStorage.getItem("heart", false));
  setHeartit(heart);

  function toggleHeart() {
    setHeart(true);
  }

  return (
    <BsFillHeartFill
      className="heart"
      onClick={toggleHeart}
      color={heart === true ? "red" : "#A0A094"}
    />
  );
}
