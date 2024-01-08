import { Select } from "antd";

import "./format.css";
const FormatDropdown = ({
  label,
  value,
  options,
  changeHandler,
  classCss,
  ...rest
}) => {
  return (
    <div className={`format mx-auto text-center `}>
      {label ? (
        <p className="text-lg font-medium text-start py-2 ">{label} :</p>
      ) : null}
      <Select
        className="formatSelect"
        style={{
          border: "none",
          background: "#E1486D",
          color: "#fff",
          width: classCss ? "220px" : "100%",
          height: classCss ? "60px" : "40px",
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
