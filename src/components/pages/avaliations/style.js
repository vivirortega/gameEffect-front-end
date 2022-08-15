import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  background-color: #9aa9d8;
  border: none;
  border-radius: 10px;
  word-wrap: break-word;
  //white-space: pre-line;
  overflow: hidden;
  overflow-y: scroll;
  width: 330px;
  @media (min-width: 900px) {
    width: 450px;
    height: 130px;
  }

  .user-info {
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-left: 10px;
  }

  img {
    width: 35px;
    height: 35px;
    border-radius: 100px;
    @media (min-width: 900px) {
      width: 50px;
      height: 50px;
    }
  }

  h2 {
    margin-top: 10px;
    white-space: pre-line;
    margin-left: 10px;
    @media (min-width: 900px) {
      font-size: 20px;
      margin-top: 10px;
      margin-left: 15px;
    }
  }

  .user {
    font-weight: 400;
    font-family: "Oswald";
    font-size: 20px;

    @media (min-width: 900px) {
      font-size: 25px;
    }
  }
`;

const AvaliationsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 30px;
    font-size: 30px;
    color: white;
    font-weight: bold;

    @media (min-width: 900px) {
      font-size: 40px;
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  width: 100%;
  justify-content: flex-start;

  .return {
    color: white;
    width: 40px;
    height: 50px;
    margin-left: 30px;
    margin-top: 30px;

    @media (min-width: 900px) {
      width: 50px;
      height: 45px;
    }
  }
`;

const Gap = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

const Review = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 5px;
  margin-right: 10px;

  .star {
    color: #f2f536;
    width: 20px;
    height: 20px;
    @media (min-width: 900px) {
      width: 30px;
      height: 25px;
    }
  }

  .review {
    font-size: 20px;
    @media (min-width: 900px) {
      font-size: 25px;
    }
  }
`;

export { Background, AvaliationsPage, Header, Gap, Review };
