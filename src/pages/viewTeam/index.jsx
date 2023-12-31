import React, { useEffect, useState } from "react";
import "./style.css";
import FlagSelect from "../../components/SelectWithFlag";
import { Loader } from "../../components";
import { generateTeam } from "../../service/player";
import PlayerTileParent from "../../components/viewTeam/AllPlayerPopover";
import FilledButton from "../../components/viewTeam/FilledButton";
import FormatButton from "../../components/viewTeam/FormatButton";
import StatShowTile from "../../components/viewTeam/StatTile";
import AnalysisModal from "../../components/modal/AnalysisModal";
import { useNavigate } from "react-router-dom";

import { setTeamInfo } from "../../redux/action/team";
import { useDispatch } from "react-redux";
const ViewTeam = () => {
  const navigate = useNavigate();
  const [team, setTeam] = useState([]);
  const [teamName, setTeamName] = useState("Pakistan");
  const [format, setFormat] = useState("t20");
  const [lastMatches, setLastMatches] = useState("5");
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const styles = {
    backgroundImage: `url('/images/statBG.png')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const fetchData = () => {
    setLoading(true);
    generateTeam({ team: teamName, format, lastMatches })
      .then((res) => {
        setTeam(res?.data?.team);
      })
      .catch((err) => {
        console.log({ err });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const onSelectTeam = (teamB) => {
    console.log({ teamB });
    // hit api here
    // then route to
    dispatch(setTeamInfo({ teamA: teamName, format, teamB }));
    navigate("/comparison");
  };
  useEffect(() => {
    fetchData();
  }, []);

  const setTeamA = (val) => {
    setTeamName(val);
  };
  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        <AnalysisModal
          open={openModal}
          setOpen={setOpenModal}
          onSelectTeam={onSelectTeam}
        />

        <div
          className="flex h-screen w-screen bg-slate-600 relative overflow-hidden"
          style={styles}
        >
          <div className="w-3/4">
            {team.length ? <PlayerTileParent team={team} /> : null}
          </div>
          <div className="w-1/4 ">
            <div className="flex pt-6 gap-4 ">
              <div className="relative left-[-45px] w-full">
                <FlagSelect dValue={teamName} changeHandler={setTeamA} />
              </div>
            </div>

            <div className="flex pt-6 gap-10 relative left-[-45px] ">
              <FormatButton
                active={format === "t20"}
                onClick={() => setFormat("t20")}
              />
              <FormatButton
                text="ODI"
                active={format === "odi"}
                onClick={() => setFormat("odi")}
              />
              <FormatButton
                text="TEST"
                active={format === "test"}
                onClick={() => setFormat("test")}
              />
            </div>
            <div className="relative left-[-45px]">
              <div className="flex gap-4 pt-7 ">
                <div className="flex-1">
                  <StatShowTile />
                </div>
                <div className="flex-1">
                  <StatShowTile />
                </div>
              </div>

              <div className="flex gap-4 pt-7  ">
                <div className="flex-1">
                  <StatShowTile />
                </div>
                <div className="flex-1">
                  <StatShowTile />
                </div>
                <div className="flex-1">
                  <StatShowTile />
                </div>
              </div>
              <div className="w-1/2 mx-auto pt-7 ">
                <StatShowTile />
              </div>
              <div className="w-1/2 mx-auto pt-7 ">
                <StatShowTile />
              </div>
            </div>
            <div className="flex gap-[50px] pt-10 relative left-2">
              <div>
                <FilledButton
                  text="Opponent"
                  text2="Analysis"
                  onClick={() => setOpenModal(true)}
                />
              </div>
              <div>
                <FilledButton text="Generate" onClick={() => fetchData()} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ViewTeam;
