import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, Title, StyledLink } from "./style";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function createUser(event) {
    event.preventDefault();

    const data = { email, password, username };
    const promise = axios.post("http://localhost:5000/signup", data);
    promise.then((response) => {
      navigate("/login");
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          required
        ></input>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        ></input>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        ></input>
        <button type="submit">Signup</button>
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
