import React, { useEffect, useState } from "react";
import "./style.css";
import FlagSelect from "../../components/SelectWithFlag";
import { Loader } from "../../components";
import { generateTeam } from "../../service/player";
import PlayerTileParent from "../../components/viewTeam/AllPlayerPopover";
import FilledButton from "../../components/viewTeam/FilledButton";
import StatShowTile from "../../components/viewTeam/StatTile";
import AnalysisModal from "../../components/modal/AnalysisModal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormatDropdown from "../../components/teamComparision/FormatDrorpdown";

import { setTeamInfo } from "../../redux/action/team";
import { useDispatch, useSelector } from "react-redux";
import { FORMAT, LIMIT, PITCH, TYPE } from "../../constant";
const ViewTeam = () => {
  const navigate = useNavigate();
  const [currentTeamName, setCurrenteamname] = useState("Pakistan");
  const [team, setTeam] = useState([]);
  const [teamStats, setTeamStats] = useState(null);
  const [teamName, setTeamName] = useState(null);
  const [format, setFormat] = useState(null);
  const [lastMatches, setLastMatches] = useState(10);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [limit, setLimit] = useState(null);
  const [pitch, setPitch] = useState(null);
  const [type, setType] = useState(null);
  const teamInfo = useSelector((state) => state.teamInfo);
  const dispatch = useDispatch();
  const styles = {
    backgroundImage: `url('/images/statBG.png')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const firstFetch = (team, format, lastMatches, pitch, type) => {
    if (!team && !format && !lastMatches && !type && !pitch) return;
    setLoading(true);
    generateTeam({
      team,
      format,
      lastMatches,
      type,
      pitch,
    })
      .then((res) => {
        if (res?.data?.success) {
          setTeamStats(res?.data?.stats);
          setTeam(res?.data?.team);
          setCurrenteamname(teamName);
        } else {
          toast.error(res?.data?.message || "Failed to load the resources");
          // navigate("/");
        }
      })
      .catch((err) => {
        console.log({ err });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchData = () => {
    setLoading(true);
    generateTeam({
      team: teamName,
      format,
      lastMatches: limit,
      type,
      pitch,
    })
      .then((res) => {
        if (res?.data?.success) {
          setTeamStats(res?.data?.stats);
          setTeam(res?.data?.team);
          setCurrenteamname(teamName);
        } else {
          toast.error(res?.data?.message || "Failed to load the resources");
          // navigate("/");
        }
      })
      .catch((err) => {
        console.log({ err });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const onSelectTeam = (teamB) => {
    dispatch(
      setTeamInfo({ teamA: teamName, format, teamB, pitch, limit, type })
    );
    navigate("/comparison");
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (
      teamInfo?.teamA &&
      teamInfo?.format &&
      teamInfo?.limit &&
      teamInfo?.pitch &&
      teamInfo?.type
    ) {
      setFormat(teamInfo?.format);
      setTeamName(teamInfo?.teamA);
      setLimit(teamInfo?.limit);
      setPitch(teamInfo?.pitch);
      setType(teamInfo?.type);
      firstFetch(
        teamInfo?.teamA,
        teamInfo?.format,
        teamInfo?.limit,
        teamInfo?.pitch,
        teamInfo?.type
      );
    }
  }, [teamInfo]);

  const setTeamA = (val) => {
    setTeamName(val);
  };
  const pitchHandler = (val) => {
    const p = PITCH.find(({ value }) => value === val)?.label;
    setPitch(p);
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
            {team.length ? (
              <PlayerTileParent team={team} teamName={currentTeamName} />
            ) : null}
          </div>
          <div className="w-1/4 ">
            <div className="flex pt-3 gap-4 ">
              <div className="relative left-[-45px] w-full">
                <FlagSelect dValue={teamName} changeHandler={setTeamA} />
              </div>
            </div>

            <div className="flex pt-3 gap-10 relative left-[-60px] ">
              <div className="w-full">
                <div className="flex items-center justify-between  w-full ">
                  <div>
                    <FormatDropdown
                      value={type}
                      changeHandler={(val) => setType(val)}
                      options={TYPE}
                      label="Playing Style"
                    />
                  </div>
                  <div>
                    <FormatDropdown
                      value={format}
                      changeHandler={(val) => setFormat(val)}
                      options={FORMAT}
                      label="Format"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between  w-full ">
                  <div>
                    <FormatDropdown
                      value={pitch}
                      changeHandler={pitchHandler}
                      options={PITCH}
                      label="Pitch"
                    />
                  </div>
                  <div>
                    <FormatDropdown
                      value={limit}
                      changeHandler={(val) => setLimit(val)}
                      options={LIMIT}
                      label="Last Matches"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative left-[-45px]">
              <div className="flex gap-4 pt-7  w-[65%] mx-auto">
                <div className="flex-1">
                  <StatShowTile
                    title="Batting Avg"
                    value={teamStats?.Batting_Average || null}
                  />
                </div>
                <div className="flex-1">
                  <StatShowTile
                    title="Batting SR"
                    value={teamStats?.Batting_Strikerate || null}
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-7  ">
                <div className="flex-1">
                  <StatShowTile
                    title="Batting Score"
                    value={teamStats?.Batting_Score || null}
                  />
                </div>
                <div className="flex-1">
                  <StatShowTile
                    title="Economy"
                    value={teamStats?.Economy || null}
                  />
                </div>
                <div className="flex-1">
                  <StatShowTile
                    title="Bowling Score"
                    value={teamStats?.Bowling_Score || null}
                  />
                </div>
              </div>
              <div className="flex gap-4 pt-7  w-[65%] mx-auto">
                <div className="flex-1">
                  <StatShowTile
                    title="Bowling SR"
                    value={teamStats?.Batting_Strikerate || null}
                  />
                </div>
                <div className="flex-1">
                  <StatShowTile
                    title="Bowling Avg"
                    value={teamStats?.Bowling_Average || null}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-[50px] pt-4 relative left-2">
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
