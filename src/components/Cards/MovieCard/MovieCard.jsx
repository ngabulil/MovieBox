import { Imdb, Tomat } from "../../../assets";
import { getYear } from "../../../utils/timeUtils";
import { useNavigate } from "react-router-dom";

const MovieCard = ({
  type,
  countries,
  genres,
  title,
  image,
  releaseDate,
  imDbRating,
  rottenTomatoesRating,
  year,
  _uuid,
}) => {
  const navigate = useNavigate();
  const handleDetail = () => {
    if (!_uuid) return;
    navigate(`/movie/${_uuid}`);
  };
  return (
    <div className="w-full max-w-[250px] relative left-1/2 -translate-x-1/2">
      <p className="text-[12px] leading-[16px] absolute text-[#111827] top-4 left-4 bg-white bg-opacity-50 py-[3px] px-[8px] rounded-xl font-bold">
        {type}
      </p>
      <div>
        <img src={image || "https://via.placeholder.com/250x370"} onError={(e) => (e.target.src = "https://via.placeholder.com/250x370")} className="w-full h-[370px] max-w-[250px]" alt="" />
      </div>
      <div className="flex flex-col pt-2 gap-2">
        {(countries || getYear(releaseDate) || year) && (
          <p className="text-[#9CA3AF] text-[12px] leading-[16px] font-bold">
            {`${countries}, ${getYear(releaseDate) || year}`}
          </p>
        )}
        <p
          onClick={handleDetail}
          className={`${_uuid ? "cursor-pointer" : ""} text-[#111827] text-[18px] font-bold leading-[24px]`}
        >
          {title}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Imdb />
            <p className="text-sm">{`${imDbRating || "?"}/10`}</p>
          </div>
          <div className="flex items-center gap-2">
            <Tomat />
            <p className="text-sm">{`${rottenTomatoesRating || "?"}%`}</p>
          </div>
        </div>
        <p className="text-[#9CA3AF] text-[12px] leading-[16px] font-bold line-clamp-2">
          {genres || ""}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
