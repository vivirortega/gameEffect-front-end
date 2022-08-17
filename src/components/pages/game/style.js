import { BsDisplay } from "react-icons/bs";
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

  .icon {
    display: flex;
    align-items: center;
  }
  .return,
  .save {
    color: white;
    margin-left: 30px;
    width: 40px;
    height: 35px;
    @media (min-width: 900px) {
      width: 50px;
      height: 55px;
    }
  }
  img {
    width: 45px;
    height: 45px;
    border-radius: 100%;
    margin-right: 30px;
    @media (min-width: 900px) {
      width: 55px;
      height: 55px;
    }
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
    @media (min-width: 900px) {
      width: 250px;
      height: 330px;
    }
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
    rgba(217, 246, 249, 1) 10%,
    rgba(82, 169, 172, 1) 46%
  );
  border-top-right-radius: 70px;
  border-top-left-radius: 70px;
  @media (min-width: 900px) {
    width: 100%;
    height: 100;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: white;
    text-shadow: 0px 4px 4px rgba(24, 2, 2, 0.25);
    margin-top: 40px;
    text-align: center;
    @media (min-width: 900px) {
      font-size: 55px;
      margin-top: calc(40px + 65px);
    }
  }

  h2,
  h3 {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    @media (min-width: 900px) {
      font-size: 25px;
    }
  }

  .date {
    @media (min-width: 900px) {
      font-size: 20px;
    }
  }

  h4 {
    text-align: justify;
    font-size: 18px;
    font-weight: bold;
    font-family: "Oswald";
    line-height: 26.68px;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 5px;
    @media (min-width: 900px) {
      font-size: 29px;
      margin-top: 20px;
      margin-right: 80px;
      margin-left: 80px;
    }
  }

  .button {
    margin-top: 10px;
    width: 30px;
    height: 30px;
    color: black;
    @media (min-width: 900px) {
      width: 45px;
      height: 50px;
    }
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

    @media (min-width: 900px) {
      font-size: 40px;
      margin-top: 20px;
    }
  }

  h6 {
    font-size: 14px;
    font-weight: bold;
    font-family: "Oswald";
    color: #c4c4c4;
    height: 100%;
    margin-top: 7px;
    @media (min-width: 900px) {
      font-size: 30px;
      margin-top: 50px;
    }
  }
`;

const Rate = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 5px;

  span {
    font-size: 40px;
    font-weight: bold;
    margin-left: 10px;
    @media (min-width: 900px) {
      font-size: 60px;
    }
  }

  .star {
    color: #f2f536;
    width: 40px;
    height: 33px;
    @media (min-width: 900px) {
      width: 50px;
      height: 45px;
    }
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
  @media (min-width: 900px) {
    width: 480px;
    height: 260px;
    justify-content: center;
  }

  input {
    margin-top: 10px;
    width: 300px;
    height: 60px;
    border: none;
    border-radius: 100px;
    text-align: center;
    font-family: "Poppins";
    font-size: 20px;

    @media (min-width: 900px) {
      width: 340px;
      height: 80px;
    }
  }
  span {
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 23px;
    color: white;
    font-weight: bold;

    @media (min-width: 900px) {
    font-size: 30px;
  }
  }


  button {
    margin-top: 15px;
    width: 130px;
    height: 50px;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    color: black;
    background-color: white;
    font-weight: bold;
  }
`;

const Stars = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 5px;
  align-items: center;
  margin-left: 20px;

  @media (min-width: 900px) {
    gap: 10px;
  }
`;

const Icons = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  justify-content: space-around;

  .cancel {
    height: 30px;
    width: 70px;
    font-size: 15px;
    background-color: bisque;
  }
`;

export {
  Background,
  Blue,
  PosterDiv,
  Ratings,
  Form,
  Rate,
  Stars,
  Icons,
  Buttons,
};
