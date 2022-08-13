import styled from "styled-components";

const UserPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(30px + 15px);
    gap: 15px;

    .icon {
        width: 104px;
        height: 104px;
        border: none;
        border-radius: 100%;
    }

    h1 {
        font-size: 30px;
        font-family: 'Oswald';
        color: white;
        font-weight: 500;
    }

`

const Edit = styled.button`
    border: none;
    width: 70px;
    height: 25px;
    background-color: #9aa9d8;
    border-radius: 100px;
    font-size: 15px;
    font-family: 'Poppins';

`
export {UserPage, Edit};