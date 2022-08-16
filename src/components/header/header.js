import { Div, Form } from "./style";
import { FaSearch } from "react-icons/fa";
import UserContext from "../../contexts/usercontext";
import { Link } from "react-router-dom";
import { BiChevronUpSquare } from "react-icons/bi";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

export default function Header() {
  const { image, userId, token } = useContext(UserContext);
  const [search, setSearch] = useState(false);
  const [searchings, setSearchings] = useState([]);
  const [name, setName] = useState("");
  console.log(name);
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

    const promise = axios.get(
      `http://localhost:5000/game?name=${name}`,
      config
    );
    promise.then((response) => {
      setSearchings(response.data);
      console.log(response);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  return (
    <Div>
      <BiChevronUpSquare/>
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
      <FaSearch className="react-icon" onClick={searching} />
      <Link to={`/user/${userId}`}>
        <img src={image} alt="icone"></img>
      </Link>
    </Div>
  );
}
