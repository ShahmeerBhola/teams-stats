const FilledButton = ({ color, text, text2, onClick }) => {
  return (
    <div
      className="bg-[#E1486D] px-5 py-0.5 text-white text-lg rounded-full whitespace-normal font-bold 
    h-[60px] w-[150px] text-center
    cursor-pointer shadow-md hover:shadow-xl
    "
      onClick={onClick}
    >
      <p className={text2 ? "" : "pt-4"}>{text}</p>
      <p>{text2}</p>
    </div>
  );
};

export default FilledButton;
