import styled from "styled-components";

export const Basement = styled.footer`
  background: var(--main-color-b-4-shade);
  font-size: var(--font-size-decreased);
  padding: var(--spacer-s) 0 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  
  .content-wrapper{
    align-items: start;
    display: grid;
    grid-auto-rows: auto;
    grid-gap: var(--spacer-s);
    grid-template-columns: repeat(2, 1fr) auto;

    padding-left: var(--spacer-xs);
    padding-right: var(--spacer-xs);
    position: relative;

    margin-left: auto;
    margin-right: auto;
    max-width: var(--content-width);
  }
  
  .logo{
    align-items: flex-start;
    display: flex;
    gap: var(--spacer-xs);
    margin: 0;
    
    a{
      flex: none;
      width: 6rem;
      text-decoration: underline;
      color: var(--link-color);
      transition: color .125s;
    }
    img{
      height: 100%;
      object-fit: contain;
      width: 100%;
    }
    .copyright {
      color: var(--text-color-secondary);
      font-weight: 300;
      flex: 1;
      font-size: var(--font-size-small);
    }
  }  
  
  .address{
    margin: 0;
  }
    
  .chief{
    color: var(--text-color-secondary);
    font-size: var(--font-size-small);
    font-weight: 300;
    line-height: 1.286;
    em{
      font-style: normal;
      font-weight: 400;
    }
  }    
`;
