import TeamHeader from "../../components/teamComparision/header";
import TeamStat from "../../components/teamComparision/teamStat";
const TeamComparison = () => {
  return (
    <div className="bg-[#35336E]  h-screen">
      {/* upper body */}
      <div className="pt-4">
        <TeamHeader />
      </div>

      {/* lower body */}
          <div className="flex gap-5 ">
              <div className="flex-1" ><TeamStat statDirection='right' /></div>
              <div className="" >
                  
                  <div className="bg-white border-2 h-full" />
              </div>
              <div className="flex-1" ><TeamStat /></div>
        
      </div>
    </div>
  );
};
export default TeamComparison;
