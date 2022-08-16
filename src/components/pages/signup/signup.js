import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Title, StyledLink } from "./style";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [icon, setIcon] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const URL = `http://localhost:5000`;

  function createUser(event) {
    event.preventDefault();
    setLoading(true);

    const data = { email, password, username, icon, bio };
    const promise = axios.post(`${URL}`, data);
    promise.then((response) => {
      navigate("/login");
      console.log("deu certo");
      setEmail("");
      setPassword("");
      setIcon("");
      setUsername("");
      setBio("");
    });

    promise.catch((error) => {
      alert("Confira os dados e tente novamente");
      setLoading(false);
    });
  }

  return (
    <>
      <Form onSubmit={createUser}>
        <Title>GameEffect</Title>
        <input
          type="text"
          name="username"
          value={username}
          disabled={loading}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          required
        ></input>
        <input
          type="text"
          name="icon"
          disabled={loading}
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          placeholder="avatar"
        ></input>
        <input
          type="email"
          name="email"
          value={email}
          disabled={loading}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        ></input>
        <input
          type="password"
          name="password"
          disabled={loading}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        ></input>
        <input
          type="text"
          name="bio"
          value={bio}
          disabled={loading}
          onChange={(e) => setBio(e.target.value)}
          placeholder="bio"
        ></input>
        <button type="submit" disabled={loading}>
          {loading ? (
            <div className="loading">
              <ThreeDots color="#fff" />{" "}
            </div>
          ) : (
            "Signup"
          )}
        </button>
        <StyledLink>
          Already have an account?{" "}
          <Link to="/login">
            <span>Sign In</span>{" "}
          </Link>
        </StyledLink>
      </Form>
    </>
  );
}
