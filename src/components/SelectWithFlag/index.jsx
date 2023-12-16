import { Select } from "antd";
import "./style.css";
import { useRef, useState } from "react";
const CustomOption = ({ label, value, disabled, ...restProps }) => {
  return (
    <div className="flex gap-4 items-center">
      <img className="h-10 w-10" src="/images/pak2.png" alt="" />
      <div>{label}</div>
    </div>
  );
};
const FlagSelect = ({}) => {
  const [visible, setVisible] = useState(false);
  const selectRef = useRef(null);

  const handleClick = () => {
    setVisible(!visible);

    if (selectRef.current) {
      selectRef.current.focus();
    }
  };

  const handleSelectBlur = () => {
    setVisible(false);
  };
  return (
    <div
      className="flex bg-purple rounded-3xl px-7 justify-between cursor-pointer "
      onClick={handleClick}
    >
      <div>
        <img src="/images/pak2.png" alt="" className="h-16 w-20" />
      </div>
      <div>
        <Select
          ref={selectRef}
          open={visible}
          onBlur={handleSelectBlur}
          defaultValue="Pakistan"
          style={{
            width: 220,
            border: "none",
            background: "#35336E",
          }}
          dropdownStyle={{
            width: 370,
            textTransform: "uppercase",
          }}
          bordered={false}
          onChange={(val) => console.log(val)}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
          ]}
          optionRender={CustomOption}
        />
      </div>
    </div>
  );
};

export default FlagSelect;