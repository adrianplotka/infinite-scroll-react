import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
display: grid;
gap: 20px;
`

export const Text = styled.p`
font-size: 20px;

${({ center }) => center && css`   
text-align: center;
`}

${({ small }) => small && css`   
font-size:15px;

@media(max-width: 767px){
    font-size: 10px;
    }
`}

@media(max-width: 767px){
    font-size: 10px;
    }
`

export const ArticleHeader = styled.h1`
    font-size: 35px;
    margin: 0px 0px 10px 0px;

@media(max-width: 767px){
    font-size: 25px;
    }
`

export const StyledArticle = styled.article`
 display: grid;
  gap: 20px;
  max-width: 1326px;
  width: calc(100% - 2 * 12px);
  background-color: teal;
  border-radius: 10px;
  margin: auto;
  padding: 15px;
  color:white;  
`

export const MainHeader = styled.h1`
text-align: center;
font-size: 50px;

@media(max-width: 767px){
    font-size: 35px;
    }
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid #000000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite; 
`;

export const LoadContainer = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
`



