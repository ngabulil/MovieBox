import { Navigation } from "swiper/modules";
import SectionSwiper from "../../../components/View/SectionSwiper/SectionSwiper";
import MovieCard from "../../../components/Cards/MovieCard/MovieCard";
import { useMovieContext } from "../../../contexts/MovieContext";
import TrailerCard from "../../../components/Cards/TrailerCard/TrailerCard";
import ActorCard from "../../../components/Cards/ActorCard/ActorCard";
import { useWindowWidth } from "@react-hook/window-size";
import { useEffect, useState } from "react";
import { getYear } from "../../../utils/timeUtils";

const Body = () => {
  const [actors, setActors] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [moviesByYear, setMoviesByYear] = useState([]);
  const [moviesByRating, setMoviesByRating] = useState([]);
  const { movies } = useMovieContext();

  const windowWidth = useWindowWidth({
    wait: 500,
  });

  useEffect(() => {
    const actorList = movies.map((movie) => movie.actorList).flat();
    setActors(actorList);
    const trailerList = movies.map((movie) => ({
      trailer: movie.trailer,
      posterTrailer: movie.posterTrailer,
      title: movie.title,
      year: movie.year,
      releaseDate: movie.releaseDate,
    }));
    setTrailers(trailerList);
    const newMoviesYear = [...movies]
    const moviesByYearList = newMoviesYear.sort((a, b) => {
      const yearA = Number(a.year) || getYear(a.releaseDate);
      const yearB = Number(b.year) || getYear(b.releaseDate);
      return yearB - yearA;
    });
    const newMoviesRating = [...movies]
    setMoviesByYear(moviesByYearList);
    const moviesByRatingList = newMoviesRating.sort((a, b) => {
      const ratingA = Number(a.imDbRating) || 0;
      const ratingB = Number(b.imDbRating) || 0;
      return ratingB - ratingA;
    });
    setMoviesByRating(moviesByRatingList);
  }, [movies]);

  return (
    <div>
      <div className="bg-white w-full max-w-[1440px] mx-auto py-16 flex flex-col gap-16">
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
          datas={moviesByRating}
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
          title={"Top Rating"}
        />
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
          datas={moviesByYear}
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
          title={"New Arrival"}
        />
        <SectionSwiper
          SwiperSlideComponent={TrailerCard}
          className={"body-trailer"}
          gridLength={windowWidth > 1100 ? 3 : windowWidth > 768 ? 2 : 1}
          datas={trailers}
          swiperProps={{
            slidesPerView: windowWidth > 1100 ? 2.5 : windowWidth > 768 ? 2 : 1,
            modules: [Navigation],
            navigation: {
              prevEl: ".body-trailer-arrow-left",
              nextEl: ".body-trailer-arrow-right",
            },
            spaceBetween: 20,
          }}
          title={"Movie Trailer"}
        />
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
          datas={actors}
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
    </div>
  );
};

export default Body;
