import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  background-color:#17181f;
  color:#797a81;
  min-height:100vh;
`
export const Area = styled.div`
  margin: auto;
  max-width:860px;
  padding:10px;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`