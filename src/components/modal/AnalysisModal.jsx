import React from "react";
import { Modal } from "antd";

import "./style.css";
import FlagSelect from "../SelectWithFlag";
const AnalysisModal = ({ open, setOpen, onSelectTeam }) => {
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
          <FlagSelect showModal="customSelect" />
        </div>
      </Modal>
    </>
  );
};
export default AnalysisModal;
