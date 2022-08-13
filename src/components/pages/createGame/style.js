import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;
  margin-top: 50px;
  margin-bottom: 70px;

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
  font-size: 30px;
  font-weight: bold;
  background: -webkit-linear-gradient(#9ad9f2, #ab69ac);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 25px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
`;

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export { Title, Form, Background };
