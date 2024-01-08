import { TEAM } from "../../constant";
const mainBgStyle = {
  backgroundImage: `url('/images/bg.jpg')`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
const PlayerStatsCard = ({ name, playrole, imgSrc, stats, teamName }) => {
  const teamFlag = TEAM.find(({ value }) => value === teamName)?.imgSrc;

  const playerBgStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="relative h-full w-full rounded-3xl" style={mainBgStyle}>
      <div
        className=" absolute top-0 left-0 h-full w-full rounded-3xl"
        style={playerBgStyle}
      ></div>
      <div className="absolute z-10 bg-transparent  bg-gradient-to-b from-transparent to-indigo-900  top-0 left-0 h-full w-full rounded-3xl">
        <div
          className={`flex flex-col items-center text-white ${
            playrole === "Allrounder" ? "mt-[50%]" : "mt-[70%]"
          } `}
        >
          <img
            src={teamFlag || "/images/pak2.png"}
            alt=""
            className="h-6 w-6"
          />
          <div className="font-black text-xl uppercase">
            {name?.split(" ")[0]}{" "}
          </div>
          <div className="text-4xl uppercase">{name?.split(" ")[1]}</div>
          <div className="flex items-center">
            <div className="border border-white w-20 h-0" />
            <div className="uppercase tracking-widest">{playrole}</div>
            <div className="border border-white w-20 h-0" />
          </div>
          {playrole === "Batter" ||
          playrole === "Allrounder" ||
          playrole === "Wicketkeeper" ? (
            <div className="flex items-center justify-between gap-10 text-center w-full px-2">
              <div className="flex flex-col ">
                <div className="text-xs">Bat Avg</div>
                <div className="text-2xl font-medium">
                  {stats?.Batting_Average?.toFixed(2) || "--"}
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="text-xs">Bat SR</div>
                <div className="text-2xl font-medium">
                  {stats?.Batting_Strikerate?.toFixed(2) || "--"}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs">Runs</div>
                <div className="text-2xl font-medium">
                  {stats?.Runs || "--"}
                </div>
              </div>
            </div>
          ) : null}

          {playrole === "Bowler" || playrole === "Allrounder" ? (
            <div className="flex items-center justify-between gap-10 text-center w-full px-2">
              <div className="flex flex-col ">
                <div className="text-xs">Bowl Avg</div>
                <div className="text-2xl font-medium">
                  {stats?.Bowling_Average?.toFixed(2) || "--"}
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="text-xs">Bow SR</div>
                <div className="text-2xl font-medium">
                  {stats?.Bowling_Strikerate.toFixed(2) || "--"}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs">Wickets</div>
                <div className="text-2xl font-medium">
                  {stats?.Wickets || "--"}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PlayerStatsCard;
