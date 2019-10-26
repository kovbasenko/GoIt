import React from "react";

export default function Modal({ img }) {
  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={img} alt="img" />
      </div>
    </div>
  );
}
