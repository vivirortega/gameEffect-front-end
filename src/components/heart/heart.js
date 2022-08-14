import { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import "./style.css";

export default function Heart() {
  //const [heart, setHeart] = useState(localStorage.getItem("heart"));
  const [heart, setHeart] = useState(false);
  console.log(heart);

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
