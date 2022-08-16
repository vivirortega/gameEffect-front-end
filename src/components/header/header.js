import { Div, Form } from "./style";
import { FaSearch } from "react-icons/fa";
import UserContext from "../../contexts/usercontext";
import { Link } from "react-router-dom";
import { BiChevronUpSquare } from "react-icons/bi";
import { BiChevronDownSquare } from "react-icons/bi";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Header() {
  const { image, userId, token, setToken } = useContext(UserContext);
  const [search, setSearch] = useState(false);
  const [searchings, setSearchings] = useState([]);
  const [name, setName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const URL = `https://gameeffects.herokuapp.com`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function searching() {
    setSearch(true);
  }

  function renderSearchings(event) {
    event.preventDefault();
    console.log("cliquei");

    const promise = axios.get(`${URL}/game?name=${name}`, config);
    promise.then((response) => {
      setSearchings(response.data);
      console.log(response);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  function logoff() {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  }

  return (
    <Div>
      {isOpen === true ? (
        <div className="down">
          <BiChevronDownSquare className="logout" />
          <button className="button-logout" onClick={logoff}>
            LogOut
          </button>
        </div>
      ) : (
        <BiChevronUpSquare className="up" onClick={() => setIsOpen(true)} />
      )}

      {search === true ? (
        <Form onChange={renderSearchings}>
          <input
            type="text"
            placeholder="search for games..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          {searchings.map((find, i) => {
            while (i < 5) {
              return (
                <Link to={`/game/${find.id}`} className="a">
                  <label className="response">{find.name}</label>
                </Link>
              );
            }
          })}
        </Form>
      ) : (
        <></>
      )}
      <div className="lupe">
        <FaSearch className="react-icon" onClick={searching} />
        <Link to={`/user/${userId}`}>
          <img src={image} alt="icone"></img>
        </Link>
      </div>
    </Div>
  );
}
