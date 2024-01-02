const mainBgStyle = {
  backgroundImage: `url('/images/bg.jpg')`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const PlayerStatsCard = ({ name, playrole, imgSrc, teamFlagUrl, stats }) => {
  const playerBgStyle = {
    backgroundImage: `url(${imgSrc})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  console.log({ playrole });
  return (
    <div className="relative h-full w-full rounded-3xl" style={mainBgStyle}>
      <div
        className=" absolute top-0 left-0 h-full w-full rounded-3xl"
        style={playerBgStyle}
      ></div>
      <div className="absolute z-10 bg-transparent  bg-gradient-to-b from-transparent to-indigo-900  top-0 left-0 h-full w-full rounded-3xl">
        <div className="flex flex-col items-center text-white mt-[50%]">
          <img src="/images/pak2.png" alt="" className="h-6 w-6" />
          <div className="font-black text-2xl uppercase">
            {name?.split(" ")[0]}{" "}
          </div>
          <div className="text-5xl uppercase">{name?.split(" ")[1]}</div>
          <div className="flex items-center">
            <div className="border border-white w-20 h-0" />
            <div className="uppercase tracking-widest">{playrole}</div>
            <div className="border border-white w-20 h-0" />
          </div>
          {playrole === "Batter" ||
          playrole === "Allrounder" ||
          playrole === "Wicketkeeper" ? (
            <div className="flex items-center justify-between gap-10 text-center">
              <div className="flex flex-col ">
                <div className="text-xs">Bat Avg</div>
                <div className="text-3xl font-medium">
                  {stats?.Batting_Average?.toFixed(2) || "--"}
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="text-xs">Bat SR</div>
                <div className="text-3xl font-medium">
                  {stats?.Batting_Strikerate?.toFixed(2) || "--"}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs">Runs</div>
                <div className="text-3xl font-medium">
                  {stats?.Runs || "--"}
                </div>
              </div>
            </div>
          ) : null}

          {playrole === "Bowler" || playrole === "Allrounder" ? (
            <div className="flex items-center justify-between gap-10 text-center">
              <div className="flex flex-col ">
                <div className="text-xs">Bowl Avg</div>
                <div className="text-3xl font-medium">
                  {stats?.Bowling_Average?.toFixed(2) || "--"}
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="text-xs">Bow SR</div>
                <div className="text-3xl font-medium">
                  {stats?.Bowling_Strikerate.toFixed(2) || "--"}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs">Wickets</div>
                <div className="text-3xl font-medium">
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
