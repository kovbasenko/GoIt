import React from "react";

const FeedbackOptions = ({ counter }) => {
  return (
    <>
      <button name="good" onClick={counter}>
        Good
      </button>
      <button name="neutral" onClick={counter}>
        Neutral
      </button>
      <button name="bad" onClick={counter}>
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;
