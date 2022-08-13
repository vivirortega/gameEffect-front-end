import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 100px;
  background-color: #9aa9d8;
  border: none;
  border-radius: 10px;
  word-wrap: break-word; 
  //white-space: pre-line;
  overflow:hidden;
  overflow-y: scroll;

  .user-info {
    margin-top: 5px;
    margin-left: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 100px;
  }

  h2 {
    margin-top: 10px;
    margin-left: 5px;
    white-space: pre-line;
  }
`;

const AvaliationsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 30px;
    color: white;
    font-weight: bold;
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
  }
`;

const Gap = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export { Background, AvaliationsPage, Header, Gap };
