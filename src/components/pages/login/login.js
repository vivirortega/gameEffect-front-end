import { Link, useNavigate} from "react-router-dom";
import { useState, useContext } from "react";
import { Form, Title, StyledLink } from "../signup/style";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import UserContext from "../../../contexts/usercontext";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setToken, setImage } = useContext(UserContext);
  const navigate = useNavigate();

  function createUser(event) {
    event.preventDefault();
    setLoading(true);

    const data = { login, password };
    const promise = axios.post("http://localhost:5000/login", data);
    promise.then((response) => {
      navigate("/game/2");
      setToken(response.data.token);
      setImage(response.data.image);
      console.log(response.data.token);
      setLogin("");
      setPassword("");
      
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
          {loading ? <div className="loading"><ThreeDots color="#fff" /> </div>: "Login"}
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
