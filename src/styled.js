import styled, { css } from "styled-components";

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

