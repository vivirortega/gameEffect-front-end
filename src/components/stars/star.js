import { FaStar } from "react-icons/fa";
import UserContext from "../../contexts/usercontext";
import { useState, useContext } from "react";
import "./style.css";

export default function StarRating() {
  const { setAvaliation } = useContext(UserContext);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  setAvaliation(rating);
  return (
    <div className="div">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              size={30}
              color={ratingValue <= (hover || rating) ? "#f2f536" : "#A0A094"}
              className="star"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}
