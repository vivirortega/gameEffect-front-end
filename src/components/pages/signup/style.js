import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100vh;

  @media (max-width: 700px) {
    border-radius: 0px;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  input {
    width: 300px;
    height: 55px;
    border: none;
    border-radius: 15px;
    background-color: #9aa9d8;
    font-family: poppins;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 20px;
    //font-weight: bold;
    @media (min-width: 900px) {
      width: 500px;
      height: 65px;
    }
  }

  button {
    margin-top: 20px;
    width: 300px;
    height: 65px;
    border: none;
    border-radius: 100px;
    background-color: #ab69ac;
    font-family: poppins;
    color: white;
    font-size: 30px;
    font-weight: bold;

    @media (min-width: 900px) {
      height: 70px;
      font-size: 40px;
    }
  }

  .loading {
    display: flex;
    //align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-family: poppins;
  font-size: 40px;
  font-weight: bold;
  background: -webkit-linear-gradient(#9ad9f2, #ab69ac);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 900px) {
    font-size: 60px;
  }
`;

const StyledLink = styled.h1`
  font-family: poppins;
  color: white;

  span {
    color: #9aa9d8;
    text-decoration: underline;
  }
`;

export { Title, StyledLink, Form };
