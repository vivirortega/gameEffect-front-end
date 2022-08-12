import { Div } from "./style";
import { FaSearch } from "react-icons/fa";
import UserContext from "../../contexts/usercontext";
import { useContext } from "react";

export default function Header() {
  const { image } = useContext(UserContext);
  console.log(image);

  return (
    <Div>
      <input type="text" placeholder="search for games..."></input>
      <FaSearch className="react-icon" />
      <img src={image} alt="icone"></img>
    </Div>
  );
}
