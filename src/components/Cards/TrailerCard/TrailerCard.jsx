import { PlayWhite } from "../../../assets";
import { getYear } from "../../../utils/timeUtils";

const TrailerCard = ({ trailer, posterTrailer, title, year, releaseDate }) => {
  return (
    <div className="relative left-1/2 -translate-x-1/2 w-fit">
      <div className="relative max-h-[250px] max-w-[450px]">
        <img
          src={posterTrailer || "https://via.placeholder.com/450x250"}
          onError={(e) => (e.target.src = "https://via.placeholder.com/450x250")}
          alt=""
          className="w-[450px] h-[250px]"
        />
        <a
          href={trailer}
          target="_blank"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <PlayWhite />
        </a>
      </div>
      <a
        href={trailer}
        target="_blank"
        className="pt-4 inline-block cursor-pointer font-bold text-[#111827] text-[18px] leading-[24px]"
      >
        {`${title} (${year || getYear(releaseDate)}) Trailer`}
      </a>
    </div>
  );
};

export default TrailerCard;
