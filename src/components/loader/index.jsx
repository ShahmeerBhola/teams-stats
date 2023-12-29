import React from "react";
import "./loader.css";
const Loader = ({ text }) => {

  return (
    <div class="sphere-container bg-purple">
      <div class="sphere sphere1">
      <img
          className=""
          src="/images/ball1.png"
          alt=""
        />
      </div>
      <div class="sphere sphere2">
      <img
          className=""
          src="/images/ball1.png"
          alt=""
        />
      </div>
      <div class="sphere sphere3">
      <img
          className=""
          src="/images/ball1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Loader;
