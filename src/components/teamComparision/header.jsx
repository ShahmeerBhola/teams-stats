import FlagSelect from "../SelectWithFlag";
import FormatDropdown from "./FormatDrorpdown";

const TeamHeader = ({
  formatValue,
  formatHandler,
  teamA,
  teamAhandler,
  teamB,
  teamBhandler,
}) => {
  return (
    <div className="flex gap-5">
      <div className="flex-1">
        <div className="w-3/4 p-2">
          <FlagSelect
            bgColor
            showModal="firstHeader"
            dValue={teamA}
            changeHandler={teamAhandler}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className=" mx-auto">
          <FormatDropdown value={formatValue} changeHandler={formatHandler} />
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <div className="w-3/4 p-2 ">
          <FlagSelect
            bgColor
            showModal="lastHeader"
            dValue={teamB}
            changeHandler={teamBhandler}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamHeader;
