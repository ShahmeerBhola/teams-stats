import { useState, useEffect } from "react";
import PlayerStatsCard from "./PlayerStatsCard";
import { positionStyle } from "../../constant/viewTeamStyle";

const PlayerTile = ({ imgSrc, style, top, left, name }) => {
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
            src={imgSrc ?? "/images/babar.webp"}
            alt=""
            className="h-12 w-12 text-center"
          />
        </div>
        <div
          className={`bg-[#E1486D] px-4 py-2 text-center absolute 
           left-[${+left}px] top-[${+top}px] mt-[70px] mr-2  animate  rounded-3xl text-white`}
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
          <PlayerStatsCard />
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
        />
      ))}
    </>
  );
};

export default PlayerTileParent;
