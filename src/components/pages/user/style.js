import styled from "styled-components";

const UserPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(30px + 15px);
  gap: 15px;
  overflow-x: hidden;
  overflow-y: hidden;

  .icon {
    width: 104px;
    height: 104px;
    border: none;
    border-radius: 100%;
  }

  h1 {
    font-size: 30px;
    font-family: "Oswald";
    color: white;
    font-weight: 500;
  }

  h2 {
    font-size: 14px;
    font-family: "Poppins";
    color: white;
  }

  .recent {
    margin-left: 30px;
    font-size: 24px;
    font-family: "Poppins";
    font-weight: bold;
    color: white;
    width: 100%;
    @media (min-width: 900px) {
      font-size: 20px;
      margin-left: 50px;
      text-align: center;
    }
  }

  h3 {
    font-size: 24px;
    font-family: "Poppins";
    font-weight: bold;
    color: white;
    width: 100%;
    margin-left: 30px;

    @media (min-width: 900px) {
      font-size: 30px;
      text-align: center;
    }
  }

  h4 {
    font-family: "Poppins";
    font-weight: bold;
    color: white;
    width: 100%;
    font-size: 20px;
    @media (min-width: 900px) {
      font-size: 30px;
    }
  }

  h5 {
    text-align: center;
    color: white;
    font-weight: bold;
    overflow: hidden;
    white-space: pre-line;
    word-wrap: break-word;
    font-size: 13px;
  }

  .image {
    height: 143px;
    border-radius: 10px;
    width: 110px;
  }
`;

const Edit = styled.button`
  display: flex;
  border: none;
  width: 70px;
  height: 25px;
  background-color: #9aa9d8;
  border-radius: 100px;
  font-size: 15px;
  font-family: "Poppins";
  text-align: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 200px;
  height: 130px;
  background-color: black;
  border-radius: 10px;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  input {
    height: 40px;
    background-color: #9aa9d8;
    text-align: center;
    border: none;
    width: 240px;
  }

  button {
    margin-top: 10px;
    width: 80px;
    height: 20px;
    background-color: #ab69ac;
    border-radius: 10px;
    border: none;
    padding-bottom: 10px;
    text-align: center;
    font-weight: bold;
    color: white;
  }
`;

const Favorites = styled.div`
  display: flex;
  gap: 10px;
`;

const RecentActivities = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  padding-right: 30px;
  gap: 20px;
  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .all {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .recent-image {
    border-radius: 10px;
    position: relative;
    width: 150px;
    height: 150px;
    bottom: 10px;
  }

  .card {
    background: rgb(99, 179, 182);
    background: linear-gradient(
      0deg,
      rgba(99, 179, 182, 1) 16%,
      rgba(99, 179, 182, 1) 48%,
      rgba(113, 220, 215, 1) 90%
    );
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    word-wrap: break-word;
    height: 180px;
    width: 170px;
    position: static;
    margin-top: 10px;
    justify-content: flex-start;
  }

  .star-recent {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;
  }

  .star {
    width: 30px;
    height: 25px;
    color: #f2f536;
  }
`;

export { UserPage, Edit, Form, Favorites, RecentActivities };
