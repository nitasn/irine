import React from "react";
import { format_as_yyyyMMdd } from "./utils";
import {
  GlobalCss,
  Container,
  Headline,
  DateInput,
  AnswerText,
  Spacer,
} from "./style";

const baseDate = "Nov 27 2022";
const datesPattern = [0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1];

/**
 * @param {Date} date
 * @returns {[Error | null, boolean | null]}
 */
function isWithIrine(date) {
  const diffInMs = date - new Date(baseDate);

  if (diffInMs < 0)
    return [new Error(`Cannot do dates before ${baseDate}`), null];

  const msPerDay = 1000 * 60 * 60 * 24;
  const diffInDays = Math.floor(diffInMs / msPerDay);
  return [null, datesPattern[diffInDays % 14] === 1];
}

function Answer({ withIrine }) {
  const [err, boolean] = withIrine;

  return err ? (
    <AnswerText variant="error">{err.message}</AnswerText>
  ) : boolean ? (
    <AnswerText variant="yes">
      <strong>Yes</strong>, it's with Irine.
    </AnswerText>
  ) : (
    <AnswerText variant="no">
      <strong>No</strong>, it's without Irine.
    </AnswerText>
  );
}

function App() {
  const [date, setDate] = React.useState(() => new Date());

  return (
    <>
      <GlobalCss />
      <Container>
        <Headline>Is this Date with Irine?</Headline>
        <DateInput
          value={format_as_yyyyMMdd(date)}
          onChange={(event) => setDate(new Date(event.target.value))}
        />
        <Answer withIrine={isWithIrine(date)} />
        <Spacer />
      </Container>
    </>
  );
}

export default App;
