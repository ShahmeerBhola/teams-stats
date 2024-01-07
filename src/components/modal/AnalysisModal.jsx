import React from "react";
import { Modal } from "antd";

import "./style.css";
import FlagSelect from "../SelectWithFlag";
import FormatDropdown from "../teamComparision/FormatDrorpdown";
import { FORMAT, LIMIT, PITCH, TYPE } from "../../constant";
const AnalysisModal = ({
  open,
  setOpen,
  onSelectTeam,
  firstPage = false,
  limit,
  format,
  pitch,
  type,
  limitHandler,
  formatHandler,
  pitchHandler,
  typeHandler,
  submitHandler,
}) => {
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        title="Select Opponent Team"
        open={open}
        onCancel={handleCancel}
        footer={null}
        styles={{
          contentBg: "puprle",
        }}
      >
        <div className="">
          <FlagSelect showModal="customSelect" changeHandler={onSelectTeam} />
        </div>
        {firstPage ? (
          <div>
            <div className="">
              <div className="flex w-full items-center justify-between py-3">
                <div>
                  <FormatDropdown
                    value={format}
                    changeHandler={formatHandler}
                    options={FORMAT}
                    classCss
                    label="Format"
                  />
                </div>
                <div>
                  <FormatDropdown
                    value={limit}
                    changeHandler={limitHandler}
                    options={LIMIT}
                    classCss
                    label="Last Matches"
                  />
                </div>
              </div>
              <div className="flex w-full items-center justify-between">
                <div>
                  <FormatDropdown
                    value={type}
                    changeHandler={typeHandler}
                    options={TYPE}
                    classCss
                    label="Playing Style"
                  />
                </div>
                <div>
                  <FormatDropdown
                    value={pitch}
                    changeHandler={pitchHandler}
                    options={PITCH}
                    classCss
                    label="Pitch"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex">
              <button
                className="bg-purple text-lg font-semibold uppercase w-36 rounded-3xl h-16 pt-1 px-5 text-center mt-10 cursor-pointer text-white mx-auto"
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
};
export default AnalysisModal;
