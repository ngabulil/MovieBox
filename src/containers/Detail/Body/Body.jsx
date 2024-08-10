import TrailerCard from "../../../components/Cards/TrailerCard/TrailerCard";
import { formatDateString, getYear } from "../../../utils/timeUtils";
import FieldItem from "../../../components/FieldItem/FieldItem";
import SectionSwiper from "../../../components/View/SectionSwiper/SectionSwiper";
import MovieCard from "../../../components/Cards/MovieCard/MovieCard";
import { useWindowWidth } from "@react-hook/window-size";
import ActorCard from "../../../components/Cards/ActorCard/ActorCard";
import { Navigation } from "swiper/modules";

const Body = ({ movie = {} }) => {
  const windowWidth = useWindowWidth({
    wait: 500,
  });
  return (
    <div>
      <div className="w-full max-w-[1440px] mx-auto px-8 max-780:px-4">
        <div className="border-b-4 border-solid border-[#BE123C] py-4">
          <h2 className="text-center text-2xl font-bold pb-2">Movie Trailer</h2>
          <TrailerCard {...movie} />
        </div>
        <div className="py-4 border-b-4 border-solid border-[#BE123C]">
          <p className="font-medium text-lg">
            {movie.plot || movie.description || "No description"}
          </p>
          <div className="pt-4">
            <FieldItem
              label={"Release Date"}
              value={formatDateString(movie.releaseDate)}
            />
            <FieldItem label={"Type"} value={movie.type} />
            <FieldItem
              label={"Year"}
              value={movie.year || getYear(movie.releaseDate)}
            />
            <FieldItem
              label={"Duration"}
              value={movie.runtimeMins}
              suffix={"mins"}
            />
            <FieldItem label={"Awards"} value={movie.awards} />
            <FieldItem label={"Directors"} value={movie.directors} />
            <FieldItem label={"Writers"} value={movie.writers} />
            <FieldItem label={"Genres"} value={movie.genres} />
            <FieldItem label={"Countries"} value={movie.countries} />
            <FieldItem label={"Languages"} value={movie.languages} />
            <FieldItem label={"Content Rating"} value={movie.contentRating} />
            <FieldItem label={"IMDb Rating"} value={movie.imDbRating} />
            <FieldItem label={"IMDb Rating Votes"} value={movie.imDbRatingVotes} />
            <FieldItem
              label={"Rotten Tomatoes Rating"}
              value={movie.rottenTomatoesRating}
              suffix={"%"}
            />
            <FieldItem label={"Budget"} value={movie?.boxOffice?.budget} />
            <FieldItem
              label={"Total Global Earnings"}
              value={movie?.boxOffice?.cumulativeWorldwideGross}
            />
          </div>
          <div className="flex gap-x-4 flex-wrap pt-4">
            {movie?.keywords &&
              movie?.keywords
                ?.split(",")
                .map((keyword, i) => (
                  <p
                    key={i}
                    className="font-medium text-lg text-[#BE123C]"
                  >{`#${keyword}`}</p>
                ))}
          </div>
        </div>
        <div className="py-4 border-b-4 border-solid border-[#BE123C]">
          <SectionSwiper
            SwiperSlideComponent={ActorCard}
            className={"body-actor"}
            gridLength={
              windowWidth > 1100
                ? 4
                : windowWidth > 768
                ? 3
                : windowWidth > 500
                ? 2
                : 1
            }
            datas={movie.actorList}
            swiperProps={{
              slidesPerView:
                windowWidth > 1100
                  ? 4
                  : windowWidth > 768
                  ? 3
                  : windowWidth > 500
                  ? 2
                  : 1,
              modules: [Navigation],
              navigation: {
                prevEl: ".body-actor-arrow-left",
                nextEl: ".body-actor-arrow-right",
              },
              spaceBetween: 20,
            }}
            title={"Actors"}
          />
        </div>
        <div className="py-4">
          <SectionSwiper
            SwiperSlideComponent={MovieCard}
            className={"body-movie"}
            gridLength={
              windowWidth > 1100
                ? 4
                : windowWidth > 768
                ? 3
                : windowWidth > 500
                ? 2
                : 1
            }
            datas={movie.similars}
            swiperProps={{
              slidesPerView:
                windowWidth > 1100
                  ? 4
                  : windowWidth > 768
                  ? 3
                  : windowWidth > 500
                  ? 2
                  : 1,
              modules: [Navigation],
              navigation: {
                prevEl: ".body-movie-arrow-left",
                nextEl: ".body-movie-arrow-right",
              },
              spaceBetween: 20,
            }}
            title={"Similar Movies"}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
