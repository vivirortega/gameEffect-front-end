import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  margin-top: 30px;
  z-index: 1;

  input {
    border: none;
    width: 200px;
    height: 40px;
    border-radius: 100px;
    text-align: center;
  }

  img {
    width: 55px;
    height: 55px;
    border-radius: 100%;
    margin-right: 30px;

    @media (min-width: 900px) {
      width: 70px;
      height: 65px;
    }
  }

  .react-icon {
    color: white;
    width: 40px;
    height: 28px;

    @media (min-width: 900px) {
      height: 40px;
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
  right: 130px;

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
