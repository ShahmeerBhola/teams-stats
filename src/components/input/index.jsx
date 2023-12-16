import React from "react";
import { Input as AntInput } from "antd";

const Input = ({ placeholder, type }) => (
  <AntInput placeholder={placeholder} type={type} />
);

export default Input;
