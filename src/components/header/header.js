import { Div } from "./style";
import { FaSearch } from "react-icons/fa";
import UserContext from "../../contexts/usercontext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const { image, userId } = useContext(UserContext);
  const [search, setSearch] = useState(false);

  function searching() {
    setSearch(true);
  }

  return (
    <Div>
      {search === true ? (
        <input type="text" placeholder="search for games..."></input>
      ) : (
        <></>
      )}
      <FaSearch className="react-icon" onClick={searching} />
      <Link to={`/user/${userId}`}>
      <img src={image} alt="icone"></img>
      </Link>
    </Div>
  );
}
