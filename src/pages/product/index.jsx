import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
const mainBgStyle = {
  backgroundImage: `url('/images/mainBG.webp')`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
const Product = () => {
  const navigate = useNavigate();
  return (
    <div style={mainBgStyle} className="h-screen w-screen overflow-hidden">
      <div className="shape ">
        <div className="child flex flex-col pt-48 text-white pl-10">
          <div
            className="text-4xl  uppercase
           font-bold"
          >
            <p className="pb-3">Best 11 team</p>
            <p>Selector</p>
          </div>
          <pre className="font-medium text-lg pt-10">
            "Crafting Victories, One Data-Driven <br /> Selection at a Time:
            Your Winning XI <br /> Unveiled!"
          </pre>
          <div
            className="bg-pink text-lg font-semibold uppercase w-36 rounded-3xl h-16 pt-3.5 px-5 text-center mt-10 cursor-pointer"
            onClick={()=>navigate("/view-team")}
          >
            Generate
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
