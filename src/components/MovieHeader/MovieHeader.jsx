import { useNavigate } from "react-router-dom";
import { Imdb, Play, Tomat } from "../../assets";

const MovieHeader = ({
  image,
  title,
  description,
  plot,
  imDbRating,
  rottenTomatoesRating,
  hideButton,
  _uuid,
  withBg,
}) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/movie/${_uuid}`);
  };

  return (
    <div className={`${withBg ? "bg-hero bg-center bg-cover" : ""}`}>
      <div
        className={`bg-no-repeat bg-contain bg-center h-screen max-h-[600px] relative`}
      >
        <img
          src={image || "https://via.placeholder.com/1440x600"}
          onError={(e) => (e.target.src = "https://via.placeholder.com/1440x600")}
          alt=""
          className="absolute top-1/2 h-full left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="w-full max-w-[1440px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] text-white absolute">
          <div className="w-full max-w-[400px] flex flex-col gap-3 pl-8">
            <h1 className="text-[48px] leading-[56px] font-bold">{title}</h1>
            <div className="flex gap-10">
              <div className="flex items-center gap-2">
                <Imdb />
                <span>{imDbRating || "?"}/10</span>
              </div>
              <div className="flex items-center gap-2">
                <Tomat />
                <span>{`${rottenTomatoesRating || "?"}%`}</span>
              </div>
            </div>
            <p className="text-[14px] leading-[18px]">
              {description || plot || "No Description"}
            </p>
            {!hideButton && (
              <button
                onClick={handleDetail}
                className="w-full h-full bg-[#BE123C] max-h-[36px] rounded-md py-4 max-w-[170px] flex items-center justify-center gap-3"
              >
                <Play />
                <p className="text-[14px] leading-[24px] font-bold">
                  DETAIL MOVIE
                </p>
              </button>
            )}
          </div>
        </div>
        <div className="w-full h-full opacity-20 bg-black" />
      </div>
    </div>
  );
};

export default MovieHeader;
