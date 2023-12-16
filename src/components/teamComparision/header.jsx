const FlagDropDown = () => {
  // w or h dena
  return (
    <div className="bg-white flex items-center rounded-3xl m-4 gap-2 py-2 w-96 justify-center">
      <img src="/images/pak2.png" alt="" className="h-10 w-10 ml-5" />
      <p className="uppercase tracking-[.35em] font-semibold text-3xl">
        Pakistan
      </p>
    </div>
  );
};

const DisplayFormat = ({ format }) => {
  return <div className="bg-pink h-[50px] text-white text-center py-2 uppercase tracking-[.25em] font-semibold text-3xl w-56 rounded-3xl mx-auto">{format || "T20"}</div>;
};

const TeamHeader = () => {
  return (
    <div className="flex gap-5">
      <div className="flex-1">
        <FlagDropDown />
      </div>
      <div className="flex-1">
        <DisplayFormat />
      </div>
      <div className="flex-1">
        <FlagDropDown />
      </div>
    </div>
  );
};

export default TeamHeader;
