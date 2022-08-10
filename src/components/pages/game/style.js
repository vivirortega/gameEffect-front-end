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

  .poster {
    width: 217px;
    height: 271px;
    border-radius: 10%;
  }
`;

const Blue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 500px;
  background-color: #d9f6f9;
  border-top-right-radius: 70px;
  border-top-left-radius: 70px;

  h1 {
    margin-top: 50px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    text-shadow: 20px #180202;
  }

  h2, h3 {
    font-size: 18px;
    font-weight: bold;
  }
`;

export { Background, Blue };
