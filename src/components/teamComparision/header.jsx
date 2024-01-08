import FlagSelect from "../SelectWithFlag";
import FormatDropdown from "./FormatDrorpdown";
import { FORMAT, LIMIT, PITCH, TYPE } from "../../constant";
const TeamHeader = ({
  formatValue,
  formatHandler,
  teamA,
  teamAhandler,
  teamB,
  teamBhandler,
  pitchValue,
  limitValue,
  limitHandler,
  pitchHandler,
  type,
  typeHandler,
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
            excludeTeam={teamB}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex gap-3 mx-auto items-center justify-center">
          <div>
            <FormatDropdown
              value={limitValue}
              changeHandler={limitHandler}
              options={LIMIT}
            />
          </div>
          <div>
            <FormatDropdown
              value={formatValue}
              changeHandler={formatHandler}
              options={FORMAT}
            />
          </div>
          <div>
            <FormatDropdown
              value={pitchValue}
              changeHandler={pitchHandler}
              options={PITCH}
            />
          </div>
          <div>
            <FormatDropdown
              value={type}
              changeHandler={typeHandler}
              options={TYPE}
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <div className="w-3/4 p-2 ">
          <FlagSelect
            bgColor
            showModal="lastHeader"
            dValue={teamB}
            changeHandler={teamBhandler}
            excludeTeam={teamA}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamHeader;
