import React from "react";

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  countPositiveFeedbackPercentage,
}) => {
  return total ? (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage}%</p>
    </>
  ) : (
    <p>No feedback given</p>
  );
};

export default Statistics;
