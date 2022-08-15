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

export { Div };
