import styled from "styled-components";

const Background = styled.footer`
  bottom: 0;
  position: fixed;
  margin-bottom: 30px;
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
  }
`;

export { Background };
