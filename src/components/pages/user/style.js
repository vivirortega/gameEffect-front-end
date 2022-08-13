import styled from "styled-components";

const UserPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(30px + 15px);

    .icon {
        width: 104px;
        height: 104px;
        border: none;
        border-radius: 100%;
    }

    h1 {
        font-size: 24px;
        font-family: 'Poppins';
        color: white;
        font-weight: 500;
    }

`
export {UserPage};