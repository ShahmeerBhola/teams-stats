import React from "react";
import { Select as AntSelect } from "antd";
import "./select.css";

const Select = ({ value, options, label, ...rest }) => {
  return (
    <div className="select-wrapper">
      {label ? <div className="text-base font-semibold py-3 px-2">{label} :</div> : null}
      <AntSelect value={value} options={options} {...rest} />
    </div>
  );
};

export default Select;
