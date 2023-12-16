import React, { useEffect, useState } from "react";
import "./style.css";
import { positionStyle } from "../../constant/viewTeamStyle";
import FlagSelect from "../../components/SelectWithFlag";

const mainBgStyle = {
  backgroundImage: `url('/images/bg.jpg')`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
const playerBgStyle = {
  backgroundImage: `url('/images/babar.webp')`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const PlayerComparison = () => {
  return (
    <div className="relative h-full w-full rounded-3xl" style={mainBgStyle}>
      <div
        className=" absolute top-0 left-0 h-full w-full rounded-3xl"
        style={playerBgStyle}
      ></div>
      <div className="absolute z-10 bg-transparent  bg-gradient-to-b from-transparent to-indigo-900  top-0 left-0 h-full w-full rounded-3xl">
        <div className="flex flex-col items-center text-white mt-[50%]">
          <img src="/images/pak2.png" alt="" className="h-6 w-6" />
          <div className="font-black text-2xl uppercase">Babar </div>
          <div className="text-5xl uppercase">Azam</div>
          <div className="flex items-center">
            <div className="border border-white w-20 h-0" />
            <div className="uppercase tracking-widest">batsman</div>
            <div className="border border-white w-20 h-0" />
          </div>
          <div className="flex items-center justify-between gap-10 text-center">
            <div className="flex flex-col ">
              <div className="text-xs">Matches</div>
              <div className="text-3xl font-medium">888</div>
            </div>
            <div className="flex flex-col ">
              <div className="text-xs">Wicket</div>
              <div className="text-3xl font-medium">888</div>
            </div>
            <div className="flex flex-col">
              <div className="text-xs">Average</div>
              <div className="text-3xl font-medium">888</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormatButton = ({ text }) => {
  return (
    <div className="bg-[#C9CCCF] pt-2 py-1 rounded-3xl text-white font-semibold w-28 h-10 text-center hover:bg-[#E1486D]">
      {text || "T20"}
    </div>
  );
};
const StatShowTile = ({ title, value }) => {
  return (
    <div className="bg-[#35336E] p-10 rounded-2xl text-center text-white uppercase">
      <p className="text-base font-semibold">{title || "Batting avg"}</p>
      <p className="text-3xl font-black">{value || "50.6"}</p>
    </div>
  );
};
const PlayerTile = ({ imgSrc, style, top, left }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const handleMouseEnter = (event) => {
    setIsHovered(true);
    const posY = event.clientY > 400 ? event.clientY - 400 : event.clientY;
    setPosition({
      x: event.clientX,
      y: posY,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const imageTop = ` top-[${+top + 80}px] `;

  return (
    <div
      className="relative cursor-wait"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <div
          className={`myDiv bg-white rounded-full p-2 w-16 text-center animate absolute top-[${+top}px] left-[${+left}px]`}
        >
          <img
            src="/images/babar.webp"
            alt=""
            className="h-12 w-12 text-center"
          />
        </div>
        <div
          className={`bg-[#E1486D] px-4 py-2 text-center absolute 
         left-[${+left}px] top-[${+top}px] mt-[70px] mr-2  animate  rounded-3xl text-white`}
        >
          Babar
        </div>
      </div>
      {isHovered && (
        <div
          className="absolute  h-[400px] w-[300px] z-30"
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
          }}
        >
          <PlayerComparison />
        </div>
      )}
    </div>
  );
};

const FilledButton = ({ color, text, text2, onClick }) => {
  return (
    <div
      className="bg-[#E1486D] px-5 py-2 text-white text-lg rounded-full whitespace-normal font-bold 
  h-[80px] w-[150px] text-center
  
  "
    >
      <p className={text2 ? "" : "pt-4"}>{text}</p>
      <p>{text2}</p>
    </div>
  );
};

const CustomDropdown = ({ data }) => {
  console.log({ data });
  return (
    <div className="flex gap-4 items-center">
      <img className="h-10 w-10" src="/images/pak2.png" alt="" />
      <div>ehmm</div>
    </div>
  );
};

const ViewTeam = () => {
  const styles = {
    backgroundImage: `url('/images/statBG.png')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div
      className="flex h-screen w-screen bg-slate-600 relative overflow-hidden"
      style={styles}
    >
      <div className="w-3/4">
        {/* position style ke jga 2 loop lgana hn gk ka style alag variable me rkhna bs player role match kra kr uska style dena or baqion ka position style se dena or jb denge to position style ke loop pointer me increment karnge  */}
        {positionStyle.map((item, key) => (
          <PlayerTile top={item.top} left={item.left} key={key} />
        ))}
      </div>
      <div className="w-1/4 ">
        <div className="flex pt-6 gap-4 ">
          <div className="relative left-[-45px] w-full">
            <FlagSelect />
          </div>
        </div>

        <div className="flex pt-6 gap-10 relative left-[-45px] ">
          <FormatButton />
          <FormatButton text="ODI" />
          <FormatButton text="TEST" />
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
          </div>
          <div className="w-1/2 mx-auto pt-7 ">
            <StatShowTile />
          </div>
        </div>
        <div className="flex gap-[50px] pt-10 relative left-2">
          <div>
            <FilledButton text="Opponent" text2="Analysis" />
          </div>
          <div>
            <FilledButton text="Next" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTeam;
