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
    margin-top:10px;
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
    margin-left:20px;
  }
`;

export { Background, Blue, PosterDiv };
