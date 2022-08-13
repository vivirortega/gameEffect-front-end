import Footer from "../../footer/footer";
import { useContext } from "react";
import UserContext from "../../../contexts/usercontext";
import { UserPage } from "./style";

export default function User() {
  const { image, username } = useContext(UserContext);
  return (
    <>
      <UserPage>
        <h1>{username}</h1>
        <img src={image} className="icon" />
      </UserPage>
      <Footer />
    </>
  );
}


