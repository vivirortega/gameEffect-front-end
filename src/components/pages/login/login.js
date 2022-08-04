import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Title, StyledLink } from "../signup/style";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function createUser(event) {
    event.preventDefault();

    const data = { login, password };
    const promise = axios.post("http://localhost:5000/login", data);
    promise.then((response) => {
      navigate("/");
      console.log("deu certo");
    });
    promise.catch((error) => {
      alert("Confira os dados e tente novamente");
    });
  }

  return (
    <>
      <Form onSubmit={createUser}>
        <Title>GameEffect</Title>
        <input
          type="text"
          name="username"
          value={login}
          disabled={loading}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="username or email"
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
        <button type="submit" disabled={loading}>
          {loading ? <ThreeDots color="#fff" /> : "Login"}
        </button>
        <StyledLink>
          Don't have an account?{" "}
          <Link to="/signup">
            <span>Sign Up</span>{" "}
          </Link>
        </StyledLink>
      </Form>
    </>
  );
}
