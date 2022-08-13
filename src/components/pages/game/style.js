import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
  }

  .return,
  .save {
    color: white;
    width: 40px;
    height: 50px;
    margin-left: 30px;
  }
  img {
    width: 55px;
    height: 55px;
    border-radius: 100%;
    margin-right: 30px;
  }
`;

const PosterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;

  .poster {
    width: 217px;
    height: 271px;
    border-radius: 10%;
    margin-top: 70px;
    z-index: 1;
  }
`;

const Blue = styled.div`
  position: absolute;
  margin-top: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(217, 246, 249);
  background: linear-gradient(
    0deg,
    rgba(217, 246, 249, 1) 8%,
    rgba(82, 169, 172, 1) 72%
  );
  border-top-right-radius: 70px;
  border-top-left-radius: 70px;

  h1 {
    margin-top: 65px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    text-shadow: 0px 4px 4px rgba(24, 2, 2, 0.25);
  }

  h2,
  h3 {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    text-align: center;
    margin-top: 18px;
    font-size: 18px;
    font-weight: bold;
    font-family: "Oswald";
    line-height: 26.68px;
    margin-right: 20px;
    margin-left: 20px;
  }

  .button {
    margin-top: 20px;
    width: 30px;
    height: 30px;
    color: black;
  }
`;

const Ratings = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;

  h5 {
    font-size: 18px;
    color: black;
    font-weight: bold;
    font-family: "Oswald";
  }

  h6 {
    font-size: 14px;
    font-weight: bold;
    font-family: "Oswald";
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  height: 230px;
  background-color: #121212;
  border: none;
  border-radius: 10px;
  margin-top: 10px;

  input {
    margin-top: 10px;
    width: 300px;
    height: 60px;
    border: none;
    border-radius: 100px;
    text-align: center;
    font-family: "Poppins";
    font-size: 20px;
  }
  span {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 18px;
    color: white;
  }

`

export { Background, Blue, PosterDiv, Ratings, Form };
