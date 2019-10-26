import React from "react";

export default function Button({ loadMore }) {
  return (
    <>
      <button className="Button" onClick={loadMore}>
        Load more
      </button>
    </>
  );
}
