import styled, { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Headline = styled.h1`
  font-size: 2rem;
`;

export const DateInput = styled.input.attrs({ type: "date" })`
  width: 250px;
  height: 30px;
  margin-bottom: 30px;
  margin-top: 50px;
  padding: 15px;
  background-color: white;
  color: black;
  border: 2px solid #677788;
  border-radius: 5;
  font-size: 20px;
`;

const answerColor = {
  yes: "green",
  no: "maroon",
  error: "gray",
};

export const AnswerText = styled.p`
  font-size: 20px;

  strong {
    font-weight: bold;
  }

  color: ${(props) => answerColor[props.variant]};
`;
