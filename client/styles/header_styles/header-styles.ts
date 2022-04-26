import styled from "styled-components";
import logo from '../../public/img/logo.svg';

export const HeaderStyles = styled.header`
  position: relative;
  background: rgba(174, 204, 234, 0.3);
  padding: 0.8rem;
  text-align: center;
  .logo{
    background: url("${logo.src}") no-repeat;
    background-size: contain;
    width: 15rem;
    height: 5rem;
    float: left;
  }
`;