import React, { useState } from "react";
import { Select } from "../../components";
import Wrapper from "../../components/wrapper";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { setTeamInfo } from "../../redux/action/team";
import TitleBetween from "../../components/title";
import { useNavigate } from "react-router-dom";
import { FORMAT, TEAM, STATRELEVANCE } from "../../constant";
import Input from "../../components/input";

const Selection = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [selectedformat, setFormat] = useState("");
  const [statRelevance, setStatRelevance] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    // Dispatch the action to update the team information in the store
    console.log("seeting", { name, format: selectedformat });
    dispatch(setTeamInfo({ name, format: selectedformat }));
    navigate("/stats");
  };
  return (
    <Wrapper>
      <div className="bg-primary p-10 m-10 rounded-3xl h-3/4 mt-10">
        <TitleBetween title="Select" />
        <div className="flex gap-x-7 p-4 ">
          <div className="flex-1">
            <Select
              size="large"
              options={FORMAT}
              placeholder="Select Format"
              onSelect={(value) => setName(value)}
              label="Select Format"
            />
          </div>
          <div className="flex-1">
            <Select
              size="large"
              options={TEAM}
              placeholder="Select Team"
              onSelect={(value) => setFormat(value)}
              label="Select Team"
            />
          </div>
          <div className="flex-1">
            <Select
              size="large"
              options={STATRELEVANCE}
              placeholder="Select Stat Relevance"
              onSelect={(value) => setStatRelevance(value)}
              label="Select Stat Relevance"
            />
          </div>
        </div>
        {statRelevance === "timePerion" ? (
          <div className="flex  p-8">
            <div className="w-1/4 mx-auto">
              <Input placeholder="Input days" type="number" />
            </div>
          </div>
        ) : null}
        {statRelevance === "lastMatches" ? (
          <div className="flex  p-8">
            <div className="w-1/4 mx-auto">
              <Input
                placeholder="Input number of recent matches"
                type="number"
              />
            </div>
          </div>
        ) : null}
        <div className="pl-5 pt-52 w-full">
          <Button onClick={handleSubmit} danger type="primary">
            Next
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Selection;
