import React from "react";
import "./loader.css";
const Loader = ({ text }) => {
  return (
    <div className="loader">
      <div className="flex flex-col gap-y-9 w-full">
        <img
          className="fade h-40 w-40 mx-auto"
          src="/images/ball1.png"
          alt=""
        />
        <h2 className="text-4xl text-center">{text}</h2>
      </div>
    </div>
  );
};

export default Loader;
