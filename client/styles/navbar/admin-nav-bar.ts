import styled from "styled-components";

export const AdminNavBarMain = styled.main`
    .MuiPaper-root{
      background-color: #0070f3;
    }
`;


export const AdminNavBar = styled.div`
  .MuiButtonBase-root {
    color: #ffffff;
    font-family: ‘Raleway’, sans-serif;
    font-size: 15px;
    font-weight: 800;
    line-height: 40px;
    margin: 0 24px;
    text-align: center;
    text-transform: uppercase;
    opacity: 0.7;

    &:active, &:focus {
      opacity: 1;
    }
  }
`;