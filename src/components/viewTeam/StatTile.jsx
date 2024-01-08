const StatShowTile = ({ title, value }) => {
  return (
    <div className="bg-[#35336E] p-4 rounded-2xl text-center text-white uppercase h-full flex flex-col items-center justify-between">
      <div className="text-base font-normal">{title || "Batting avg"}</div>
      <div className="text-3xl font-medium ">{value?.toFixed(2) || "50.6"}</div>
    </div>
  );
};

export default StatShowTile;
