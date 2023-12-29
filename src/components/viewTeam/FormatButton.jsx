const FormatButton = ({ text, active, onClick }) => {
  return (
    <div
      className={`bg-[#C9CCCF] pt-2 py-1 rounded-3xl text-white font-semibold w-28 h-10 text-center hover:bg-[#E1486D] cursor-pointer shadow-sm hover:shadow-md ${
        active ? "bg-[#E1486D]" : ""
      } `}
      onClick={onClick}
    >
      {text || "T20"}
    </div>
  );
};

export default FormatButton;
