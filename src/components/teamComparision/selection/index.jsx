import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const TeamStats = ({ stats }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* batting */}
        <div
          style={{
            height: "315px",
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
              top: "55px",
              left: "-15px",
              height: "200px",
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
              height: " 40px",
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
              height: " 40px",
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
              height: " 40px",
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
              left: "-50px",
              height: "150px",
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
              height: " 40px",
              width: "240px",

              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              height: "40px",
              width: "300px",

              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "70px",
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
              height: " 40px",
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
              height: " 40px",
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
    <div style={{ height: "100%", width: "100%" }}>
      <div className="flex items-center justify-center text-xl font-bold pt-3 uppercase">
        Player Stats
      </div>
      <div className="flex h-32 p-5">
        <div>
          <img src={player?.img_url} className="h-24 w-24" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <div>
            <p>
              <span className="text-md font-semibold">{player?.player}</span>
            </p>
          </div>
          <div>
            <p>
              <span className="text-md font-semibold">{player?.playrole}</span>
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          height: `calc(100% - 200px)`,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px 0",
        }}
      >
        {/* batting */}
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
              height: "200px",
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
              height: " 40px",
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
              height: " 40px",
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
              height: " 40px",
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
        {/* {bowling} */}
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
              left: "-50px",
              height: "150px",
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
              height: " 40px",
              width: "240px",

              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              height: "40px",
              width: "300px",

              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "70px",
            }}
          >
            Bowling Score
            <span className="pl-3">
              {player?.stats?.Bowling_Score?.toFixed(2) || "--"}{" "}
            </span>
          </div>
          <div
            className="bg-pink text-md upercase font-medium text-white"
            style={{
              height: " 40px",
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
              height: " 40px",
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
      </div>
    </div>
  );
};

const Selection = ({ stats, statDirection }) => {
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
          <TeamStats stats={stats} />
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
          <TeamStats stats={stats} />
        )}
      </>
    );
  }
};

export default Selection;
