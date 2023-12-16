import { Progress } from "antd";

const AllPlayer = () => {
  return (
    <div
      className="
  bg-white bg-opacity-40 border-2 border-white"
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <SinglePlayerTile />
      ))}
    </div>
  );
};
const SinglePlayerTile = () => {
  return (
    <div className="flex h-[55px] bg-white rounded-3xl items-center m-2 ">
      <img src="/images/babar.webp" alt="" className="h-10 w-10 p-1 ml-4" />
      <p className="text-lg font-bold  tracking-[.25em] uppercase mx-auto">
        Babar | Batsman
      </p>
    </div>
  );
};

const TeamStatViewer = () => {
  return (
    <div className="bg-white h-[97%] my-3">
      <div className="flex gap-4 pt-4">
        <div className="flex-1">
          <Progress
            type="circle"
            percent={75}
            format={(percent) => `${percent} Days`}
          />
        </div>
        <div className="flex-1">
          <Progress
            type="circle"
            percent={75}
            format={(percent) => `${percent} Days`}
          />
        </div>
      </div>
      <div className="flex gap-4 pt-4">
        <div className="flex-1">
          <Progress
            type="circle"
            percent={75}
            format={(percent) => `${percent} Days`}
          />
        </div>
        <div className="flex-1">
          <Progress
            type="circle"
            percent={75}
            format={(percent) => `${percent} Days`}
          />
        </div>
      </div>
      <div className="flex gap-4 pt-4">
        <div className="flex-1">
          <Progress
            type="circle"
            percent={75}
            format={(percent) => `${percent} Days`}
          />
        </div>
        <div className="flex-1">
          <Progress
            type="circle"
            percent={75}
            format={(percent) => `${percent} Days`}
          />
        </div>
      </div>
      <div className="flex gap-4 pt-4">
        <div className="flex-1">
          <Progress
            type="circle"
            percent={75}
            format={(percent) => `${percent} Days`}
          />
        </div>
        <div className="flex-1">
          <Progress
            type="circle"
            percent={75}
            format={(percent) => `${percent} Days`}
          />
        </div>
      </div>
      <div className="flex gap-4 pt-4">
        <div className="flex-1">
          <Progress
            type="circle"
            percent={75}
            format={(percent) => `${percent} Days`}
          />
        </div>
        <div className="flex-1">
          <Progress
            type="circle"
            percent={75}
            format={(percent) => `${percent} Days`}
          />
        </div>
      </div>
    </div>
  );
};
const TeamStat = ({ statDirection }) => {
  if (statDirection === "right") {
    return (
      <div className="flex gap-3">
        <div className="flex-1">
          <AllPlayer />
        </div>
        <div className="flex-1">
          <TeamStatViewer />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex gap-3">
        <div className="flex-1 ">
          <TeamStatViewer />
        </div>
        <div className="flex-1">
          <AllPlayer />
        </div>
      </div>
    );
  }
};

export default TeamStat;
