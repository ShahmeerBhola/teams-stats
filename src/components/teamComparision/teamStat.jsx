import Selection  from "../../components/teamComparision/selection";

const AllPlayer = ({ team }) => {
  return (
    <div
      className="
  bg-white bg-opacity-40 border-2 border-white"
    >
      {team?.map((item, key) => (
        <SinglePlayerTile player={item} key={key} />
      ))}
    </div>
  );
};

const SinglePlayerTile = ({ player }) => {
  return (
    <div className="flex h-[55px] bg-white rounded-3xl items-center m-2 ">
      <img
        src={player?.img_url || "/images/babar.webp"}
        alt=""
        className="h-10 w-10 p-1 ml-4"
      />
      <p className="text-lg font-bold  tracking-[.25em] uppercase mx-auto flex items-center">
        {player?.player || " Babar Azam"}
        <img
          src={
            player?.playrole === "Allrounder"
              ? "/images/allrounder.png"
              : player?.playrole === "Batter"
                ? "/images/batsman2.png"
                : player?.playrole === "Wicketkeeper" ?
                "/images/wicketkeeper.png"
              : "/images/baller.png"
          }
          alt=""
          className="h-4 w-4 ml-2"
        />
      </p>
    </div>
  );
};

const TeamStatViewer = ({ stats }) => {
  return (
   
    <div className="bg-white h-[97%] my-3 "> <Selection stats={stats} /> </div>
  );
};
const TeamStat = ({ statDirection, team, stats }) => {
  if (statDirection === "right") {
    return (
      <div className="flex gap-3">
        <div className="flex-1">
          <AllPlayer team={team} />
        </div>
        <div className="flex-1">
          <TeamStatViewer stats={stats} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex gap-3">
        <div className="flex-1 ">
          <TeamStatViewer stats={stats} />
        </div>
        <div className="flex-1">
          <AllPlayer team={team} />
        </div>
      </div>
    );
  }
};

export default TeamStat;
