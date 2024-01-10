import Selection from "../../components/teamComparision/selection";
import { useDispatch, useSelector } from "react-redux";
import { setPlayerStats } from "../../redux/action/team";

const AllPlayer = ({ team, statDirection }) => {
  const dispatch = useDispatch();
  const teamInfo = useSelector((state) => state.teamStats);

  const clickHandler = (item) => {
    if (statDirection === "right") {
      if (teamInfo?.playerB?.id === item.id) {
        dispatch(setPlayerStats({ playerB: null }));
      } else {
        dispatch(setPlayerStats({ playerB: item }));
      }
    } else {
      if (teamInfo?.playerA?.id === item.id) {
        dispatch(setPlayerStats({ playerA: null }));
      } else {
        dispatch(setPlayerStats({ playerA: item }));
      }
    }
  };

  return (
    <div
      className="
  bg-white bg-opacity-40 border-2 border-white"
    >
      {team?.map((item, key) => (
        <SinglePlayerTile
          player={item}
          key={key}
          onClick={() => clickHandler(item)}
          active={
            teamInfo?.playerA?.id === item.id ||
            teamInfo?.playerB?.id === item.id
          }
        />
      ))}
    </div>
  );
};

const SinglePlayerTile = ({ player, onClick, active }) => {
  return (
    <div
      className={`flex h-[49px] bg-white rounded-3xl items-center m-2 ${
        active ? "!bg-pink  text-white" : ""
      } cursor-pointer`}
      onClick={onClick}
    >
      <img
        src={player?.img_url || "/images/person.png"}
        onerror="this.onerror=null;this.src='/images/person.png';"
        alt=""
        className="h-10 w-10 p-1 ml-4"
      />
      <p className="text-lg font-bold  tracking-[.25em] uppercase mx-auto flex items-center">
        {player?.player || " Babar Azam"}
        {player?.playrole === "Allrounder" ? (
          <>
            <img className="h-4 w-4 ml-2" src="/images/batsman2.png" alt="" />
            <img className="h-4 w-4 ml-2" src="/images/baller.png" alt="" />
          </>
        ) : (
          <img
            src={
              player?.playrole === "Batter"
                ? "/images/batsman2.png"
                : player?.playrole === "Wicketkeeper"
                ? "/images/wicketkeeper.png"
                : "/images/baller.png"
            }
            alt=""
            className="h-4 w-4 ml-2"
          />
        )}
      </p>
    </div>
  );
};

const TeamStatViewer = ({ stats, statDirection, team }) => {
  return (
    <div className="bg-white h-[95%] my-3 ">
      <Selection stats={stats} statDirection={statDirection} team={team} />
    </div>
  );
};
const TeamStat = ({ statDirection, team, stats, teamName }) => {
  if (statDirection === "right") {
    return (
      <div className="flex gap-3">
        <div className="flex-1">
          <AllPlayer team={team} statDirection={statDirection} />
        </div>
        <div className="flex-1">
          {stats ? (
            <TeamStatViewer
              stats={stats}
              statDirection={statDirection}
              team={teamName}
            />
          ) : null}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex gap-3">
        <div className="flex-1 ">
          {stats ? (
            <TeamStatViewer
              stats={stats}
              statDirection={statDirection}
              team={teamName}
            />
          ) : null}
        </div>
        <div className="flex-1">
          <AllPlayer team={team} statDirection={statDirection} />
        </div>
      </div>
    );
  }
};

export default TeamStat;
