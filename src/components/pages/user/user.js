import Footer from "../../footer/footer";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../../contexts/usercontext";
import { UserPage, Edit, Form, Favorites } from "./style";
import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function User() {
  const { image, username, token, bio, userId } = useContext(UserContext);
  const [edit, setEdit] = useState(false);
  const [favorite, setIsFavorite] = useState([]);
  const [newBio, setNewBio] = useState("");
  const [newImage, setNewImage] = useState("");
  //const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);
  const { id } = useParams();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(`http://localhost:5000/game/${id}`, config);
    promise.then((response) => {
      //setBio(response.data);
      console.log("Resposta", response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    const promise = axios.get(`http://localhost:5000/${userId}`, config);
    promise.then((response) => {
      setIsFavorite(response.data);
      console.log(favorite);
      console.log("deu certo");
    });
    promise.catch((error) => {
      console.log(error);
    });
  }, []);

  function editUser(event) {
    event.preventDefault();
    setLoading(true);
    console.log("cliquei");

    const data = { bio: newBio, icon: newImage };
    const promise = axios.put(`http://localhost:5000/user/${id}`, data, config);
    promise.then((response) => {
      console.log("deu certo");
      setLoading(false);
      setHide(false);
      setEdit(false);
      console.log(response);
      console.log(newBio, newImage);
    });
    promise.catch((error) => {
      alert("Confira os dados e tente novamente");
      console.log(error);
      setLoading(false);
    });
  }

  function editing() {
    setEdit(true);
    setHide(true);
  }

  return (
    <>
      <UserPage>
        <h1>{username}</h1>
        <img src={image} className="icon" />
        {edit === true ? <h2>{newBio}</h2> : <h2>{bio}</h2>}
        {edit === true ? (
          <Form onSubmit={editUser}>
            <input
              type="text"
              value={newImage}
              disabled={loading}
              onChange={(e) => setNewImage(e.target.value)}
              placeholder="new image url..."
            ></input>
            <input
              type="text"
              value={newBio}
              disabled={loading}
              onChange={(e) => setNewBio(e.target.value)}
              placeholder="new bio..."
            ></input>
            <button type="submit" disabled={loading}>
              {loading ? (
                <div className="loading">
                  <ThreeDots color="#fff" />{" "}
                </div>
              ) : (
                "Send"
              )}
            </button>
          </Form>
        ) : (
          <></>
        )}

        {hide === true ? <></> : <Edit onClick={editing}>Edit</Edit>}
        <h3>Favorite Games</h3>
        <Favorites>
          {favorite.map((favorite, i) => {
            while (i < 3) {
              return <img src={favorite.picture} className="image" />;
            }
          })}
        </Favorites>
      </UserPage>
      <Footer />
    </>
  );
}
