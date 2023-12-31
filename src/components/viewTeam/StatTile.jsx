const StatShowTile = ({ title, value }) => {
  return (
    <div className="bg-[#35336E] p-5 rounded-2xl text-center text-white uppercase">
      <p className="text-base font-semibold">{title || "Batting avg"}</p>
      <p className="text-3xl font-black">{value || "50.6"}</p>
    </div>
  );
};

export default StatShowTile;
