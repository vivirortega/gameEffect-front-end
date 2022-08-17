import styled from "styled-components";

const Background = styled.footer`
  z-index: 1;
  bottom: 0;
  position: fixed;
  margin-bottom: 30px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 40px;

  .home,
  .plus,
  .user {
    color: white;
    width: 28px;
    height: 28px;

    @media (min-width: 900px) {
    width: 40px;
    height: 40px;

  }
  }
`;

export { Background };
