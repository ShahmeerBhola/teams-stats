import React from "react";
import { Select as AntSelect } from "antd";
import "./select.css";

const Select = ({ value, options, ...rest }) => {
  return (
    <div className="select-wrapper">
      <AntSelect
        value={value}
        options={options}
        {...rest}
      />
    </div>
  );
};

export default Select;
