import { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";

export default function Heart() {
    const [heart, setHeart] = useState(localStorage.getItem("heart"));
  return <BsFillHeartFill className="heart"/>;
}
