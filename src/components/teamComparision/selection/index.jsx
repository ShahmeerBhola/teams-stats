import React from "react";
import { useSelector } from "react-redux";
import { TEAM } from "../../../constant";
const TeamStats = ({ stats, team }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div className="flex items-center justify-center text-3xl font-semibold pt-3 tracking-[.15em] uppercase ">
        Team <span className="pl-5"> Stats </span>
      </div>
      <div className="flex items-center justify-center pt-2 ">
        <img
          src={
            TEAM.find((item) => item.value === team)?.imgSrc ?? TEAM[0].imgSrc
          }
          alt=""
          className="h-24 w-40  object-contain"
        />
      </div>
      <div
        style={{
          height: `calc(100% - 190px)`,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* batting */}
        <div
          style={{
            height: "270px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "30px",
              left: "-15px",
              height: "180px",
              transform: "rotate(3deg)",
            }}
          >
            <img
              src="/images/BAT.png"
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div
            className="bg-pink text-md upercase font-medium text-white"
            style={{
              height: " 35px",
              width: "240px",

              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Batting Score
            <span className="pl-3">
              {stats?.Batting_Score?.toFixed(2) || "--"}{" "}
            </span>
          </div>
          <div
            className="bg-pink text-md upercase font-medium text-white"
            style={{
              height: " 35px",
              width: "240px",

              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Batting Avg
            <span className="pl-3">
              {stats?.Batting_Average?.toFixed(2) || "--"}{" "}
            </span>
          </div>

          <div
            className="bg-pink text-md upercase font-medium text-white"
            style={{
              height: " 35px",
              width: "240px",

              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Batting SR
            <span className="pl-3">
              {stats?.Batting_Strikerate?.toFixed(2) || "--"}{" "}
            </span>
          </div>
        </div>
        {/* {bowling} */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "35px",
              left: "-40px",
              height: "140px",
            }}
          >
            <img
              src="/images/BALL2.png"
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div
            className="bg-pink text-md upercase font-medium text-white"
            style={{
              height: " 35px",
              width: "240px",

              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Bowling Score
            <span className="pl-3">
              {stats?.Bowling_Score?.toFixed(2) || "--"}{" "}
            </span>
          </div>
          <div
            className="bg-pink text-md upercase font-medium text-white"
            style={{
              height: "35px",
              width: "300px",

              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "70px",
            }}
          >
            Bowling Avg
            <span className="pl-3">
              {stats?.Bowling_Average?.toFixed(2) || "--"}{" "}
            </span>
          </div>
          <div
            className="bg-pink text-md upercase font-medium text-white"
            style={{
              height: " 35px",
              width: "300px",

              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "60px",
            }}
          >
            Bowling SR
            <span className="pl-3">
              {stats?.Bowling_Strikerate?.toFixed(2) || "--"}{" "}
            </span>
          </div>
          <div
            className="bg-pink text-md upercase font-medium text-white"
            style={{
              height: " 35px",
              width: "240px",

              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Economy
            <span className="pl-3">{stats?.Economy?.toFixed(2) || "--"} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlayerStats = ({ player }) => {
  console.log(player);
  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center text-3xl font-semibold pt-3 tracking-[.15em] uppercase ">
        Player <span className="pl-5"> Stats </span>
      </div>
      <div className="flex h-32 p-5 items-center justify-center  ">
        <div>
          <img src={player?.img_url} className="h-28 w-28" alt="" />
        </div>
        <div className="flex flex-col items-start justify-center pl-6">
          <div>
            <p>
              <span className="text-lg font-extrabold tracking-widest uppercase ">
                {player?.player}
              </span>
            </p>
          </div>
          <div>
            <p>
              <span className="text-md font-semibold">{player?.playrole}</span>
            </p>
          </div>

          {player?.stats?.Bat_Style ? (
            <div>
              <p>
                <span className="text-md font-semibold flex items-center">
                  {player?.stats?.Bat_Style?.slice(0, -3)}
                  <img
                    src="/images/batsman2.png"
                    alt=""
                    className="h-4 w-4 ml-3"
                  />
                </span>
              </p>
            </div>
          ) : null}
          {player?.stats?.Bowl_Style ? (
            <div>
              <p>
                <span className="text-md font-semibold flex items-center">
                  {player?.stats?.Bowl_Style}
                  <img
                    src="/images/baller.png"
                    alt=""
                    className="h-4 w-4 ml-3"
                  />
                </span>
              </p>
            </div>
          ) : null}
          {/*  */}
        </div>
      </div>
      <div
        style={{
          height:
            player?.playrole === "Allrounder" ? `calc(100% - 190px)` : "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px 0",
        }}
      >
        {/* batting */}
        {player?.playrole === "Wicketkeeper" ||
        player?.playrole === "Batter" ||
        player?.playrole === "Allrounder" ? (
          <div
            style={{
              height: "180px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "-15px",
                height: "180px",
                transform: "rotate(3deg)",
              }}
            >
              <img
                src="/images/BAT.png"
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </div>

            <div
              className="bg-pink text-md upercase font-medium text-white"
              style={{
                height: " 35px",
                width: "240px",

                textAlign: "center",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Batting Runs
              <span className="pl-3">
                {player?.stats?.Runs?.toFixed(2) || "--"}{" "}
              </span>
            </div>
            <div
              className="bg-pink text-md upercase font-medium text-white"
              style={{
                height: " 35px",
                width: "240px",

                textAlign: "center",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Batting Avg
              <span className="pl-3">
                {player?.stats?.Batting_Average?.toFixed(2) || "--"}{" "}
              </span>
            </div>
            <div
              className="bg-pink text-md upercase font-medium text-white"
              style={{
                height: " 35px",
                width: "240px",

                textAlign: "center",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Batting SR
              <span className="pl-3">
                {player?.stats?.Batting_Strikerate?.toFixed(2) || "--"}{" "}
              </span>
            </div>
          </div>
        ) : null}
        {/* {bowling} */}
        {player?.playrole === "Bowler" || player?.playrole === "Allrounder" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              marginTop: "auto",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "35px",
                left: "-40px",
                height: "140px",
              }}
            >
              <img
                src="/images/BALL2.png"
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div
              className="bg-pink text-md upercase font-medium text-white"
              style={{
                height: " 35px",
                width: "240px",

                textAlign: "center",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Wickets
              <span className="pl-3">{player?.stats?.Wickets || "--"}</span>
            </div>
            <div
              className="bg-pink text-md upercase font-medium text-white"
              style={{
                height: "35px",
                width: "300px",

                textAlign: "center",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "70px",
              }}
            >
              Bowling Avg
              <span className="pl-3">
                {player?.stats?.Bowling_Average?.toFixed(2) || "--"}{" "}
              </span>
            </div>
            <div
              className="bg-pink text-md upercase font-medium text-white"
              style={{
                height: " 35px",
                width: "300px",

                textAlign: "center",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "60px",
              }}
            >
              Bowling SR
              <span className="pl-3">
                {player?.stats?.Bowling_Strikerate?.toFixed(2) || "--"}{" "}
              </span>
            </div>
            <div
              className="bg-pink text-md upercase font-medium text-white"
              style={{
                height: " 35px",
                width: "240px",
                textAlign: "center",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Economy
              <span className="pl-3">
                {player?.stats?.Economy?.toFixed(2) || "--"}{" "}
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const Selection = ({ stats, statDirection, team }) => {
  const teamInfo = useSelector((state) => state.teamStats);
  if (statDirection === "right") {
    return (
      <>
        {teamInfo?.playerB ? (
          <PlayerStats
            player={teamInfo?.playerB}
            statDirection={statDirection}
          />
        ) : (
          <TeamStats stats={stats} team={team} />
        )}
      </>
    );
  } else {
    return (
      <>
        {teamInfo?.playerA ? (
          <PlayerStats
            player={teamInfo?.playerA}
            statDirection={statDirection}
          />
        ) : (
          <TeamStats stats={stats} team={team} />
        )}
      </>
    );
  }
};

export default Selection;
