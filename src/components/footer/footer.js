import { Background } from "./style";
import { FiUser } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Background>
      <Link to="/">
        <HiOutlineHome className="home" />
      </Link>
      <Link to="/game">
        <FiPlusCircle className="plus" />
      </Link>
      <Link to="/user/2">
        <FiUser className="user" />
      </Link>
    </Background>
  );
}
