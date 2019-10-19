import React from "react";

const Section = ({ title, children, test }) => {
  return (
    <section>
      <h2 onClick={test}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
