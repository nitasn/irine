import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalCss = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  gap: 15px;
`;

const Headline = styled.h1`
  font-size: 2rem;
`;

const DateInput = styled.input.attrs({ type: "date" })`
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

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Headline>Welcome.</Headline>
        <DateInput />
      </Container>
    </>
  );
}

export default App;
