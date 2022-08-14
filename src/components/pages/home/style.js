import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;

  h1 {
    margin-top: 70px;
    margin-bottom: 60px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin-left: 10px;
  }
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ab69ac;
  width: 198.23px;
  height: 224.62px;
  border-radius: 20px;
  position: relative;
  text-decoration: none;

  img {
    width: 160px;
    height: 200px;
    border-radius: 10px;
    bottom: 0;
  }

  h2 {
    font-size: 14px;
    color: white;
    font-family: "Poppins";
    margin-bottom: 5px;
    font-weight: bold;
  }

  h3 {
    font-size: 10px;
    margin-bottom: 5px;
    font-weight: bold;
    color: black;
  }
`;
const Cards = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 30px;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

export { Div, Background, Cards };
