import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 30px;
  z-index: 1;
  justify-content: space-between;

  input {
    border: none;
    width: 200px;
    height: 40px;
    border-radius: 100px;
    text-align: center;
  }

  img {
    width: 45px;
    height: 45px;
    border-radius: 100%;
    margin-right: 30px;

    @media (min-width: 900px) {
      width: 60px;
      height: 55px;
    }
  }

  .logout {
    color: white;
    width: 30px;
    height: 30px;
    //position: fixed;
  }

  .lupe {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    @media (min-width: 900px) {
      gap: 10px;
    }
  }

  .down {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .up {
    margin-left: 30px;
    color: white;
    width: 30px;
    height: 30px;
  }

  .button-logout {
    margin-left: 30px;
    border: none;
    width: 70px;
    height: 35px;
    border-radius: 10%;
    background-color: #633e80;
    font-weight: bold;
    color: white;
  }

  .react-icon {
    color: white;
    width: 25px;
    height: 25px;

    @media (min-width: 900px) {
      height: 30px;
      width: 30px;
    }
  }
`;

const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  z-index: 1;
  border-radius: 20px;
  gap: 15px;
  position: fixed;
  top: 40px;
  right: 120px;
  width: 200px;
  @media (min-width: 900px) {
    right: 200px; 
    width: 650px;
  }

  input {
    font-size: 16px;
  }

  .a {
    text-decoration: none;
  }

  .response {
    text-align: center;
    font-size: 14px;
    color: black;
    margin-left: 16px;
  }

  .react-icon {
    display: none;
  }
`;

export { Div, Form };
