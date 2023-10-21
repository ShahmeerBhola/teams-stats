import React, { useState } from "react";
import { Loader } from "../../components";

const Product = () => {
  const [isLoader, setIsLoader] = useState(true);
  if (isLoader) {
    return <Loader />;
  }
  return (
    <div>
      Product
    </div>
  );
};

export default Product;
