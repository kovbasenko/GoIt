import React from "react";
import Loader from "react-loader-spinner";

export default function DataLoader() {
  return (
    <div className="Loader">
      <Loader type="Circles" color="#00BFFF" height={80} width={80} />
    </div>
  );
}
