import Footer from "../../footer/footer";
import { useContext, useState, useEffect } from "react";
import UserContext from "../../../contexts/usercontext";
import { UserPage, Edit, Form, Favorites, RecentActivities } from "./style";
import { ThreeDots } from "react-loader-spinner";
import { useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import axios from "axios";

export default function User() {
  const { image, username, token, bio, userId, gameId } =
    useContext(UserContext);
  const [edit, setEdit] = useState(false);
  const [favorite, setIsFavorite] = useState([]);
  const [recent, setRecent] = useState([]);
  const [newBio, setNewBio] = useState("");
  const [newImage, setNewImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [hide, setHide] = useState(false);
  const { id } = useParams();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(`https://gameeffects.herokuapp.com/game/${id}`, config);
    promise.then((response) => {});
    promise.catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    const promise = axios.get(`https://gameeffects.herokuapp.com/${userId}`, config);
    promise.then((response) => {
      setIsFavorite(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }, []);

  function editUser(event) {
    event.preventDefault();
    setLoading(true);

    const data = { bio: newBio, icon: newImage };
    const promise = axios.put(`https://gameeffects.herokuapp.com/user/${id}`, data, config);
    promise.then((response) => {
      setLoading(false);
      setHide(false);
      setEdit(false);
    });
    promise.catch((error) => {
      alert("Confira os dados e tente novamente");
      console.log(error);
      setLoading(false);
    });
  }

  useEffect(() => {
    const promise = axios.get(`https://gameeffects.herokuapp.com/${userId}/recent`, config);
    promise.then((response) => {
      setRecent(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }, []);

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
        <h4 className="recent">Recent Activity</h4>
        <RecentActivities className="recent">
          {recent.map((recents, i) => {
            while (i < 10) {
              return (
                <div className="all">
                  <div className="star-recent">
                    <FaStar className="star" />
                    <h4>{recents.rate}</h4>
                  </div>
                  <div className="card">
                    <img src={recents.pictureUrl} className="recent-image" />
                    <h5>{recents.name}</h5>
                  </div>
                </div>
              );
            }
          })}
        </RecentActivities>
      </UserPage>
      <Footer />
    </>
  );
}
