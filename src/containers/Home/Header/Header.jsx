import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useMovieContext } from "../../../contexts/MovieContext";
import { useEffect, useState } from "react";
import MovieHeader from "../../../components/MovieHeader/MovieHeader";

const Header = () => {
  const { movies, loading } = useMovieContext();
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const lastFiveMovies = movies.slice(0, 5);
    setFilteredMovies(lastFiveMovies);
  }, [movies]);

  return (
    <section>
      <div className="bg-hero bg-center bg-cover">
        {!loading && (
          <Swiper
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<span class="' + className + '">' + (index + 1) + "</span>"
                );
              },
            }}
            modules={[Autoplay, Pagination]}
            className="swiper-header-home"
          >
            {filteredMovies.map((movie, i) => (
              <SwiperSlide key={i}>
                <MovieHeader {...movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Header;
