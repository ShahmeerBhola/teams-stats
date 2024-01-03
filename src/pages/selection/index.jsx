import React from "react";

const Selection = ({ stats }) => {
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
              top: "-8px",
              left: "-22px",
              height: "300px",
              transform: "rotate(3deg)",
            }}
          >
            <img
              src="/images/BAT.png"
              alt="image"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div
              className="bg-pink text-md upercase font-medium text-white"
            style={{
              height: "50px",
              width: "240px",
               
              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Batting Avg
            <span className="pl-3" >{stats?.Batting_Average?.toFixed(2) || "--"} </span>
          </div>
          <div
              className="bg-pink text-md upercase font-medium text-white"
            style={{
              height: "50px",
              width: "240px",
               
              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Batting Score
            <span className="pl-3" >{stats?.Batting_Score?.toFixed(2) || "--"} </span>
          </div>
          <div
              className="bg-pink text-md upercase font-medium text-white"
            style={{
              height: "50px",
              width: "240px",
               
              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Batting SR
            <span className="pl-3" >{stats?.Batting_Strikerate?.toFixed(2) || "--"} </span>
          </div>
          <div
              className="bg-pink text-md upercase font-medium text-white"
            style={{
              height: "50px",
              width: "240px",
               
              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Economy
            <span className="pl-3" >{stats?.Economy?.toFixed(2) || "--"} </span>
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
              top: "15px",
              left: "-50px",
              height: "170px",
            }}
          >
            <img
              src="/images/BALL2.png"
              alt="image"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div
         className="bg-pink text-md upercase font-medium text-white"
            style={{
              height: "50px",
              width: "240px",
               
              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Bowling Avg
            <span className="pl-3" >{stats?.Bowling_Average?.toFixed(2) || "--"} </span>
          </div>
          <div
             className="bg-pink text-md upercase font-medium text-white"
            style={{
              height: "50px",
              width: "300px",
               
              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft:"90px"
            }}
          >
            Bowling Score
            <span className="pl-3" >{stats?.Bowling_Score?.toFixed(2) || "--"} </span>
          </div>
          <div
            className="bg-pink text-md upercase font-medium text-white"
            style={{
              height: "50px",
              width: "240px",
        
              textAlign: "center",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

            }}
          >
            Bowling SR
            <span className="pl-3">{stats?.Bowling_Strikerate?.toFixed(2) || "--"} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
