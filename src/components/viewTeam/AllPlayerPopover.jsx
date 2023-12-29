import { useState, useEffect } from "react";
import PlayerStatsCard from "./PlayerStatsCard";
import { positionStyle } from "../../constant/viewTeamStyle";

const PlayerTile = ({ imgSrc, style, top, left, name , playerole}) => {
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
      <div className={`absolute top-[${+top}px] left-[${+left}px] flex  flex-col items-center `} >
        <div
          className={`myDiv bg-white rounded-full p-2 w-16 text-center animate `}
        >
          <img
            src={imgSrc ?? "/images/babar.webp"}
            alt=""
            className="h-12 w-12 text-center"
          />
        </div>
        <div
          className={`bg-[#E1486D] px-4 py-2 text-center  mt-[70px] mr-2  animate  rounded-3xl text-white absolute`}
        >
          {name?.split(" ")[0] ?? `Babar`}
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
          <PlayerStatsCard name={name} playrole={playerole} imgSrc={imgSrc} />
        </div>
      )}
    </div>
  );
};

const PlayerTileParent = ({ team }) => {
  const wicketkeeper = team.filter(
    (player) => player.playrole === "Wicketkeeper"
  );

  console.log({ wicketkeeper });

  const keeperStyle = {
    role: "wicketKeeper",
    style: "top-[210px] left-[530px]",
    top: 210,
    left: 530,
  };
  return (
    <>
      {positionStyle.map((item, key) =>
        team?.[key]?.playrole !== "Wicketkeeper" ? (
          <PlayerTile
            top={item.top}
            left={item.left}
            key={key}
            imgSrc={team?.[key]?.img_url}
            name={team?.[key]?.player}
            playrole={team?.[key]?.playrole}
          />
        ) : null
      )}
      {wicketkeeper?.map((item, key) => (
        <PlayerTile
          top={keeperStyle.top}
          left={keeperStyle.left}
          key={key + keeperStyle.top}
          imgSrc={item.img_url}
          name={item.player}
          playrole={team?.[key]?.playrole}
        />
      ))}
    </>
  );
};

export default PlayerTileParent;
