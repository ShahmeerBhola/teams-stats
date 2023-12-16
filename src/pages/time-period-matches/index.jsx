import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Wrapper from "../../components/wrapper";
import { useNavigate } from "react-router-dom";

const TimePeriodMatches = () => {
  const navigate = useNavigate();
  const teamInfo = useSelector((state) => state.teamInfo);
  // console.log(teamInfo.name.length)
  // console.log(!teamInfo.name.length)
  // if (!teamInfo.name.length || !teamInfo.format.length) {
  //   navigate(-1);
  // }
  return <Wrapper>TimePeriodMatches</Wrapper>;
};

export default TimePeriodMatches;
