import Footer from "../../footer/footer";
import { useContext, useState } from "react";
import UserContext from "../../../contexts/usercontext";
import { UserPage, Edit, Form } from "./style";
import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function User() {
  const { image, username, bio, token } = useContext(UserContext);
  const [edit, setEdit] = useState(false);
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

  function editUser(event) {
    event.preventDefault();
    setLoading(true);
    console.log("cliquei")

    const data = { newBio, newImage };
    const promise = axios.put(
      `http://localhost:5000/user/${id}`,
      data,
      config
    );
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

  function editing(){
    setEdit(true);
    setHide(true);
  }

  return (
    <>
      <UserPage>
        <h1>{username}</h1>
        <img src={image} className="icon" />
        <h2>{bio}</h2>
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
        
      </UserPage>
      <Footer />
    </>
  );
}
