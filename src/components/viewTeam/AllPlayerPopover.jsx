import { useState, useEffect } from "react";
import PlayerStatsCard from "./PlayerStatsCard";
import { positionStyle } from "../../constant/viewTeamStyle";

const PlayerTile = ({
  imgSrc,
  style,
  top,
  left,
  name,
  playrole,
  stats,
  teamName,
}) => {
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
      className="relative "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* absolute !top-[${+top}px] !left-[${+left}px]  */}
      <div
        style={{
          position: "absolute",
          top: `${+top}px`,
          left: `${+left}px`
        }}
        className={`flex  flex-col items-center `}
      >
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
          className={`bg-[#E1486D] px-4 py-2 text-center  mt-[70px] mr-2  animate  rounded-3xl text-white absolute uppercase font-medium `}
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
          <PlayerStatsCard
            name={name}
            playrole={playrole}
            imgSrc={imgSrc}
            stats={stats}
            teamName={teamName}
          />
        </div>
      )}
    </div>
  );
};

const PlayerTileParent = ({ team, teamName }) => {
  const wicketkeeper = team.filter(
    (player) => player.playrole === "Wicketkeeper"
  );
  const filteredPlayers = team?.filter(
    (player) => player.playrole !== "Wicketkeeper"
  );

  const keeperStyle = {
    role: "wicketKeeper",
    style: "top-[210px] left-[530px]",
    top: 180,
    left: 480,
  };
  return (
    <>
      {positionStyle.map((item, key) => (
        <PlayerTile
          top={item.top}
          left={item.left}
          key={key}
          imgSrc={filteredPlayers?.[key]?.img_url}
          name={filteredPlayers?.[key]?.player}
          playrole={filteredPlayers?.[key]?.playrole}
          stats={filteredPlayers?.[key]?.stats}
          teamName={teamName}
        />
      ))}
      {wicketkeeper?.map((item, key) => (
        <PlayerTile
          top={keeperStyle.top}
          left={keeperStyle.left}
          key={key + keeperStyle.top}
          imgSrc={item.img_url}
          name={item.player}
          playrole={item?.playrole}
          stats={team?.[key]?.stats}
          teamName={teamName}
        />
      ))}
    </>
  );
};

export default PlayerTileParent;
