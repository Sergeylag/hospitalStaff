import styled from "styled-components";
import logo from '../../public/img/logo.svg';

export const HeaderStyles = styled.header`
  background: rgba(174, 204, 234, 0.3);
  padding: 0.8rem;
  text-align: center;
  .logo{
    background: url("${logo.src}") no-repeat;
    background-size: contain;
    width: 100%;
    height: 5rem;
    margin: 1rem;
    h1{
      margin: 0;
      padding-top: 1rem;
    }
  }
`;