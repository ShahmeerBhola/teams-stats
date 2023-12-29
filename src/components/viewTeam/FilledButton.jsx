const FilledButton = ({ color, text, text2, onClick }) => {
  return (
    <div
      className="bg-[#E1486D] px-5 py-2 text-white text-lg rounded-full whitespace-normal font-bold 
    h-[80px] w-[150px] text-center
    cursor-pointer shadow-sm hover:shadow-md
    "
      onClick={onClick}
    >
      <p className={text2 ? "" : "pt-4"}>{text}</p>
      <p>{text2}</p>
    </div>
  );
};

export default FilledButton;
