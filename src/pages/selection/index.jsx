import React from "react";
import { Select } from "../../components";

const format = [
  {
    label: "T20",
    value: "t20",
  },
  { label: "ODI", value: "odi" },
  { label: "Test", value: "test" },
];

const Selection = () => {
  return (
    <div>
      <Select size="large" options={format} placeholder="select Format" />
    </div>
  );
};

export default Selection;
