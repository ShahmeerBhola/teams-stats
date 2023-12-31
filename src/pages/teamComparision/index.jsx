import TeamHeader from "../../components/teamComparision/header";
import TeamStat from "../../components/teamComparision/teamStat";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const TeamComparison = ({ setLoading }) => {
  const teamInfo = useSelector((state) => state.teamInfo);
  const [format, setFormat] = useState("t20");
  const [teamA, setTeamA] = useState("Pakistan");
  const [teamB, setTeamB] = useState("Yiminghe");
  const formatHandler = (val) => {
    setFormat(val);
  };
  const teamAhandler = (val) => {
    setTeamA(val);
  };
  const teamBhandler = (val) => {
    setTeamB(setTeamB);
  };
  useEffect(() => {
    console.log({ teamInfo });
  }, [teamInfo]);
  return (
    <div className="bg-[#35336E]  h-screen">
      <div className="pt-4">
        <TeamHeader
          formatValue={format}
          formatHandler={formatHandler}
          teamA={teamA}
          teamAhandler={teamAhandler}
          teamB={teamB}
          teamBhandler={teamBhandler}
        />
      </div>

      {/* lower body */}
      <div className="flex gap-5 ">
        <div className="flex-1">
          <TeamStat statDirection="right" />
        </div>
        <div className="">
          <div className="bg-white border-2 h-full" />
        </div>
        <div className="flex-1">
          <TeamStat />
        </div>
      </div>
    </div>
  );
};
export default TeamComparison;
