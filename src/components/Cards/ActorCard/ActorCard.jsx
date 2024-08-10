const ActorCard = ({ name, image }) => {
  return (
    <div className="relative w-fit left-1/2 -translate-x-1/2 max-w-[250px]">
      <img
        src={image || "https://via.placeholder.com/250x370"}
        onError={(e) => (e.target.src = "https://via.placeholder.com/250x370")}
        alt=""
        className="w-[250px] h-[370px]"
      />
      <p className="pt-4 font-bold text-[#111827] text-[18px] leading-[24px]">
        {name}
      </p>
    </div>
  );
};

export default ActorCard;
