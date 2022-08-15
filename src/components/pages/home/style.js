import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;

  h1 {
    margin-top: 70px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin-left: 10px;
    margin-bottom: 30px;
  }
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(99, 179, 182);
  background: linear-gradient(
    0deg,
    rgba(99, 179, 182, 1) 35%,
    rgba(99, 179, 182, 1) 57%,
    rgba(113, 220, 215, 1) 75%
  );
  width: 198.23px;
  height: 100%;
  border-radius: 20px;
  position: relative;
  text-decoration: none;

  .link {
    text-decoration: none;
  }
  img {
    width: 160px;
    height: 200px;
    border-radius: 10px;
    margin-top: 10px;
  }

  h2 {
    margin-top: 5px;
    padding-bottom: 5px;
    color: white;
    font-family: "Poppins";
    margin-bottom: 5px;
    font-weight: bold;
    text-align: center;
    font-size: 20px;
  }

  h3 {
    margin-bottom: 5px;
    font-weight: bold;
    color: black;
    text-align: center;
    font-size: 15px;
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

  a {
    text-decoration: none;
  }
`;

export { Div, Background, Cards };
