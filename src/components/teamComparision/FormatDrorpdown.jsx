import { Select } from "antd";
import { FORMAT } from "../../constant";
import "./format.css";
const FormatDropdown = ({ value, options,changeHandler, ...rest }) => {
  return (
    <div className="format mx-auto text-center">
      <Select
        style={{
          border: "none",
          background: "#E1486D",
          color: "#fff",
        }}
        value={value ?? FORMAT[0]}
        options={FORMAT}
        onChange={(val) => changeHandler(val)}
        {...rest}
      />
    </div>
  );
};

export default FormatDropdown;
