const Comparison = ({ children }) => {
  const mainBgStyle = {
    backgroundImage: `url('/images/bg.jpg')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const playerBgStyle = {
    backgroundImage: `url('/images/babar.webp')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const PlayerComparison = () => {
    return (
      <div className="relative h-full w-full" style={mainBgStyle}>
        <div
          className=" absolute top-0 left-0 h-full w-full"
          style={playerBgStyle}
        ></div>
        <div className="absolute z-10 bg-transparent  bg-gradient-to-b from-transparent to-indigo-900  top-0 left-0 h-full w-full">
          <div className="flex flex-col items-center text-white mt-[50%]">
            <img src="/images/pak2.png" alt="" className="h-6 w-6" />
            <div className="font-black text-2xl uppercase">Babar </div>
            <div className="text-5xl uppercase">Azam</div>
            <div className="flex items-center">
              <div className="border border-white w-20 h-0" />
              <div className="uppercase tracking-widest">batsman</div>
              <div className="border border-white w-20 h-0" />
            </div>
            <div className="flex items-center justify-between gap-10 text-center">
              <div className="flex flex-col ">
                <div className="text-xs">Matches</div>
                <div className="text-3xl font-medium">888</div>
              </div>
              <div className="flex flex-col ">
                <div className="text-xs">Wicket</div>
                <div className="text-3xl font-medium">888</div>
              </div>
              <div className="flex flex-col">
                <div className="text-xs">Average</div>
                <div className="text-3xl font-medium">888</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="h-96 w-96">
        <PlayerComparison />
      </div>
    </>
  );
};
export default Comparison;
