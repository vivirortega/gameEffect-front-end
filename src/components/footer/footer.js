import { Background } from "./style";
import { FiUser } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/usercontext";
import { useContext } from "react";

export default function Footer() {
  const { userId } = useContext(UserContext);
  return (
    <Background>
      <Link to="/home">
        <HiOutlineHome className="home" />
      </Link>
      <Link to="/game">
        <FiPlusCircle className="plus" />
      </Link>
      <Link to={`/user/${userId}`}>
        <FiUser className="user" />
      </Link>
    </Background>
  );
}
