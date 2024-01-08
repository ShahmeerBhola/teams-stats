import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import AnalysisModal from "../../components/modal/AnalysisModal";
import { useDispatch } from "react-redux";
import { PITCH } from "../../constant";
import { setTeamInfo } from "../../redux/action/team";
const mainBgStyle = {
  backgroundImage: `url('/images/mainBG.webp')`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
const Product = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const [type, setType] = useState("balanced");
  const [limit, setLimit] = useState(10);
  const [format, setFormat] = useState("t20");
  const [pitch, setPitch] = useState("neutral");
  const [team, setTeam] = useState("Pakistan");
  const onSelectTeam = (teamA) => {
    setTeam(teamA);
  };
  const typeHandler = (val) => {
    setType(val);
  };
  const limitHandler = (val) => {
    setLimit(val);
  };
  const formatHandler = (val) => {
    setFormat(val);
  };
  const pitchHandler = (val) => {
    const p = PITCH.find(({ value }) => value === val)?.label;
    setPitch(p);
  };
  const submitHandler = () => {
    console.log({ teamA: team, format, pitch, limit, type });
    dispatch(setTeamInfo({ teamA: team, format, pitch, limit, type }));
    navigate("/view-team");
  };
  return (
    <>
      <AnalysisModal
        open={openModal}
        setOpen={setOpenModal}
        onSelectTeam={onSelectTeam}
        firstPage
        limit={limit}
        format={format}
        pitch={pitch}
        type={type}
        limitHandler={limitHandler}
        formatHandler={formatHandler}
        pitchHandler={pitchHandler}
        typeHandler={typeHandler}
        submitHandler={submitHandler}
      />
      <div style={mainBgStyle} className="h-screen w-screen overflow-hidden">
        <div className="shape ">
          <div className="child flex flex-col pt-48 text-white pl-10">
            <div
              className="text-4xl  uppercase
           font-bold"
            >
              <p className="pb-3">Best 11 team</p>
              <p>Selector</p>
            </div>
            <pre className="font-medium text-lg pt-10">
              "Crafting Victories, One Data-Driven <br /> Selection at a Time:
              Your Winning XI <br /> Unveiled!"
            </pre>
            <div
              className="bg-pink text-lg font-medium uppercase w-40 rounded-3xl h-16 pt-3.5 px-3 text-center mt-10 cursor-pointer shadow-md hover:shadow-lg"
              onClick={() => setOpenModal(true)}
            >
              Let's Start
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
