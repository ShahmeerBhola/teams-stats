import TeamHeader from "../../components/teamComparision/header";
import TeamStat from "../../components/teamComparision/teamStat";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { opponentAnalysis } from "../../service/player";
import { Loader } from "../../components";
const TeamComparison = () => {
  const teamInfo = useSelector((state) => state.teamInfo);
  const [format, setFormat] = useState(null);
  const [teamA, setTeamA] = useState(null);
  const [teamB, setTeamB] = useState(null);

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [playerTeamA, setPlayerTeamA] = useState([]);
  const [playerTeamB, setPlayerTeamB] = useState([]);
  const [statsTeamA, setstatsTeamA] = useState(null);
  const [statsTeamB, setstatsTeamB] = useState(null);

  const checkShow = () => {
    if (
      teamInfo?.teamA !== teamA ||
      teamInfo?.format !== format ||
      teamInfo?.teamB !== teamB
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const formatHandler = (val) => {
    setFormat(val);
  };
  const teamAhandler = (val) => {
    setTeamA(val);
  };
  const teamBhandler = (val) => {
    setTeamB(val);
  };
  useEffect(() => {
    if (teamInfo?.teamA && teamInfo?.teamB && teamInfo?.format) {
      setFormat(teamInfo?.format);
      setTeamA(teamInfo?.teamA);
      setTeamB(teamInfo?.teamB);
      firstFetch(teamInfo?.teamA, teamInfo?.teamB, teamInfo?.format);
    }
  }, [teamInfo]);

  useEffect(() => {
    if (teamInfo?.teamA) {
      checkShow();
    }
  }, [teamA, teamB, format]);

  const firstFetch = (teamA, teamB, format) => {
    console.log("first fetch");
    console.log({
      team: teamA,
      opponent: teamB,
      format,
      type: "balanced",
      lastMatches: 10,
    });
    setLoading(true);
    // opponentAnalysis
    opponentAnalysis({
      team: teamA,
      opponent: teamB,
      format,
      type: "balanced",
      lastMatches: 10,
    })
      .then((res) => {
        setPlayerTeamA(res?.data?.team);
        setPlayerTeamB(res?.data?.teamb);
        setstatsTeamA(res?.data?.stats);
        setstatsTeamB(res?.data?.statsb);
      })
      .catch((err) => {
        console.log("errr", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchData = () => {
    setLoading(true);
    opponentAnalysis({
      team: teamA,
      opponent: teamB,
      format,
      type: "balanced",
      lastMatches: 10,
    })
      .then((res) => {
        setPlayerTeamA(res?.data?.team);
        setPlayerTeamB(res?.data?.teamb);
        setstatsTeamA(res?.data?.stats);
        setstatsTeamB(res?.data?.statsb);
        setShow(false);
      })
      .catch((err) => {
        console.log("errr", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  if (loading) {
    return <Loader />;
  } else {
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
            <TeamStat
              statDirection="right"
              team={playerTeamA}
              stats={statsTeamA}
            />
          </div>
          <div className="">
            <div className="bg-white border-2 h-full" />
          </div>
          <div className="flex-1">
            <TeamStat team={playerTeamB} stats={statsTeamB} />
          </div>
        </div>

        {show ? (
          <div
            className="bg-pink text-lg font-semibold uppercase w-36 rounded-3xl h-16 pt-3.5 px-5 text-center mt-10 text-white absolute bottom-3 right-3"
            onClick={() => fetchData()}
          >
            Generate
          </div>
        ) : null}
      </div>
    );
  }
};
export default TeamComparison;
