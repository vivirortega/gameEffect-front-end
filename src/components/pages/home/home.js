import { FaSearch } from "react-icons/fa";
import icontest from "../../../assets/icon.png";
import { Div } from "./style";
import Footer from "../../footer/footer";

export default function Home() {
  return (
    <>
      <Div>
        <input type="text" placeholder="search for games..."></input>
        <FaSearch className="react-icon"/>
        <img src={icontest}></img>
      </Div>
      <Footer />
    </>
  );
}
