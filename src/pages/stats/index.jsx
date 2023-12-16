import React from "react";
import Wrapper from "../../components/wrapper";
import TitleBetween from "../../components/title";

const StatTile = ({ title, value }) => {
  return (
    <div className="p-3">
      <p>
        <span className="font-medium">{title} </span> : {value}
      </p>
    </div>
  );
};
const PlayerTile = () => {
  return (
    <div className="flex gap-x-4 pl-5 py-2">
      <img
        alt=""
        className="h-6 w-6"
        src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/320400/320448.png"
      />
      <p>Player Name</p>
    </div>
  );
};

const Table = () => {
  return (
    <div className=" rounded-3xl">
      {/* header 's */}
      <div className="bg-white flex rounded-3xl p-5 text-xl font-medium">
        <div className="flex-1 ">Players</div>
        <div className="flex-1">Stats</div>
      </div>
      {/* header end */}
      {/* body start */}
      <div className="flex bg-white mt-5  rounded-3xl">
        <div className="flex-1 ">
          <PlayerTile />
          <PlayerTile />
          <PlayerTile />
          <PlayerTile />
          <PlayerTile />
          <PlayerTile />
          <PlayerTile />
          <PlayerTile />
          <PlayerTile />
          <PlayerTile />
          <PlayerTile />
        </div>
        <div className="flex-1 my-auto">
          <div className="flex flex-col justify-center">
            <div>
              <StatTile title="Economy" value="10" />
            </div>
            <div>
              <StatTile title="Strike Rate" value="20" />
            </div>
            <div>
              <StatTile title="Average" value="10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <Wrapper>
      <div className="bg-primary p-10 m-10 rounded-3xl  mt-10">
        <TitleBetween title="Team Stats" />
        <div>
          <Table />
        </div>
      </div>
    </Wrapper>
  );
};

export default Stats;
