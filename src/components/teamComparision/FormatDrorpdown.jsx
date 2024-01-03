import { Select } from "antd";

import "./format.css";
const FormatDropdown = ({ value, options,changeHandler, ...rest }) => {
  return (
    <div className="format mx-auto text-center">
      <Select
        className="formatSelect"
        style={{
          border: "none",
          background: "#E1486D",
          color: "#fff",
        }}
        value={value ?? options?.[0]}
        options={options}
        onChange={(val) => changeHandler(val)}
        {...rest}
      />
    </div>
  );
};

export default FormatDropdown;
