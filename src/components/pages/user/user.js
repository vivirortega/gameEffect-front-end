import Footer from "../../footer/footer";
import { useContext } from "react";
import UserContext from "../../../contexts/usercontext";
import { UserPage, Edit } from "./style";

export default function User() {
  const { image, username } = useContext(UserContext);
  return (
    <>
      <UserPage>
        <h1>{username}</h1>
        <img src={image} className="icon" />
        <Edit>Edit</Edit>
      </UserPage>
      <Footer />
    </>
  );
}


