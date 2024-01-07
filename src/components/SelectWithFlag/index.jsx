import { Select } from "antd";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import { TEAM } from "../../constant";

const FlagSelect = ({ showModal, bgColor, dValue, changeHandler }) => {
  const [visible, setVisible] = useState(false);
  const selectRef = useRef(null);
  const [value, setValue] = useState(dValue ?? TEAM[0]);

  const handleClick = () => {
    setVisible(!visible);

    if (selectRef.current) {
      selectRef.current.focus();
    }
  };
  useEffect(() => {
    if (dValue) {
      setValue(dValue);
    }
  }, [dValue]);
  const handleSelectBlur = () => {
    setVisible(false);
  };
  const CustomOption = ({ label, value, disabled, imgSrc, ...restProps }) => {
    // console.log({ imgSrc });
    // console.log({ label });
    // console.log(restProps.data);
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
  return (
    <div
      className={`flex  rounded-3xl px-7 justify-between cursor-pointer ${
        bgColor ? "bg-white" : "bg-purple"
      }  items-center
`}
      onClick={handleClick}
    >
      <div className="h-16 w-40">
        <img
          src={
            TEAM.find((item) => item.value === value)?.imgSrc ?? TEAM[0].imgSrc
          }
          alt=""
          className="h-16 w-40  object-contain "
        />
      </div>
      <div className={` w-3/4   ${bgColor ? "text-black" : "text-white"}`}>
        <Select
          popupClassName={showModal}
          ref={selectRef}
          open={visible}
          onBlur={handleSelectBlur}
          defaultValue={value}
          style={{
            border: "none",
            background: `${bgColor ? "#fff" : "#35336E"}`,
            color: `${bgColor ? "#000" : "#fff"}`,
            textTransform: "uppercase",
          }}
          dropdownStyle={{
            width: 370,
            textTransform: "uppercase",
          }}
          value={value}
          bordered={false}
          onChange={(val) => onSelect(val)}
          onSelect={(val) => onSelect(val)}
          options={TEAM}
          optionRender={CustomOption}
        />
      </div>
    </div>
  );
};

export default FlagSelect;
