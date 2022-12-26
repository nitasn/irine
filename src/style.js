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
    margin: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 30px;
`;

export const Headline = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 45px;
  color: rgb(0 0 0 /0.8);
`;

export const DateInput = styled.input.attrs({ type: "date" })`
  width: 250px;
  height: 45px;
  background-color: white;
  color: black;
  border: 2px solid #677788;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
`;

const answerColor = {
  yes: "green",
  no: "maroon",
  error: "gray",
};

export const AnswerText = styled.p`
  font-size: 1.45rem;

  strong {
    font-weight: bold;
  }

  color: ${(props) => answerColor[props.variant]};
`;

export const Spacer = styled.div`
  height: 30vh;
`;
