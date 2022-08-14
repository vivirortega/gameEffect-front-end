import styled from "styled-components";

const UserPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(30px + 15px);
  gap: 15px;

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
    color: #c4c4c4;
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
    width: 100%;
    height: 40px;
    background-color: #9aa9d8;
    text-align: center;
    border: none;
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

export { UserPage, Edit, Form };
