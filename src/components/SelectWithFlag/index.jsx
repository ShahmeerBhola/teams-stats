import { Select } from "antd";
import "./style.css";
import { useRef, useState } from "react";

const flagOptions = [
  {
    value: "jack",
    label: "Jack",
    imgSrc: "/images/pak2.png",
  },
  {
    value: "lucy",
    label: "Lucy",
    imgSrc: "/images/aus.png",
  },
  {
    label: "yiminghe",
    value: "Yiminghe",
    imgSrc: "/images/pak2.png",
  },
];

const FlagSelect = ({ showModal, bgColor, dValue, changeHandler }) => {
  const [visible, setVisible] = useState(false);
  const selectRef = useRef(null);
  const [value, setValue] = useState(dValue ?? flagOptions[0]);

  const handleClick = () => {
    setVisible(!visible);

    if (selectRef.current) {
      selectRef.current.focus();
    }
  };

  const handleSelectBlur = () => {
    setVisible(false);
  };
  const CustomOption = ({ label, value, disabled, imgSrc, ...restProps }) => {
    console.log({ imgSrc });
    console.log({ label });
    console.log(restProps.data);
    return (
      <div className="flex gap-4 items-center">
        <img className="h-10 w-10" src={restProps.data.imgSrc} alt="" />
        <div>{label}</div>
      </div>
    );
  };
  const onSelect = (val) => {
    setValue(val);
    changeHandler(val);
  };
  console.log(value, "value");
  return (
    <div
      className={`flex  rounded-3xl px-7 justify-between cursor-pointer ${
        bgColor ? "bg-white" : "bg-purple"
      }
`}
      onClick={handleClick}
    >
      <div>
        <img
          src={
            flagOptions.find((item) => item.value === value)?.imgSrc ??
            flagOptions[0].imgSrc
          }
          alt=""
          className="h-16 w-20"
        />
      </div>
      <div>
        <Select
          popupClassName={showModal}
          ref={selectRef}
          open={visible}
          onBlur={handleSelectBlur}
          defaultValue={value}
          style={{
            width: 220,
            border: "none",
            background: `${bgColor ? "#fff" : "#35336E"}`,
            color: `${bgColor ? "#000" : "#fff"}`,
          }}
          dropdownStyle={{
            width: 370,
            textTransform: "uppercase",
          }}
          value={value}
          bordered={false}
          onChange={(val) => onSelect(val)}
          options={flagOptions}
          optionRender={CustomOption}
        />
      </div>
    </div>
  );
};

export default FlagSelect;
