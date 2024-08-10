import { useEffect, useRef, useState } from "react";
import { Logo, Menu } from "../../assets";
import { getAllMovies } from "../../services/MovieAPI/api";
import { getYear } from "../../utils/timeUtils";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { openSidebar } from "../Sidebar/Sidebar";

const Navbar = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navRef = useRef(null);
  const navigate = useNavigate();

  const handleDetail = (id) => {
    navigate(`/movie/${id}`);
  };

  const getMovies = async () => {
    setLoading(true);
    try {
      const data = await getAllMovies();
      setMovies(data.items);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    if (loading) return;
    setSearch(e.target.value);
    if (!e.target.value) return setFilteredMovies([]);
    setFilteredMovies(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.removeEventListener("click", handleClose);
  };

  const handleOpen = (e) => {
    e.stopPropagation();
    setIsOpen(true);
    document.body.addEventListener("click", handleClose);
  };

  useEffect(() => {
    if (isOpen) getMovies();
    if (!isOpen) {
      setFilteredMovies([]);
      setSearch("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (currentScrollTop > 60) {
        navRef.current.style.position = "fixed";
        navRef.current.style.top = "0";
        navRef.current.style.backgroundColor = "#BE123C";
      } else {
        navRef.current.style.position = "absolute";
        navRef.current.style.top = "1rem";
        navRef.current.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={navRef} className="absolute w-full z-[4] top-4 left-1/2 translate-x-[-50%] px-8 transition-all">
      <nav className="flex max-w-[1440px] mx-auto justify-between items-center max-780:gap-4">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-6 cursor-pointer"
        >
          <Logo />
          <p className="font-bold text-[24px] leading-[24px] text-white max-780:hidden">
            MovieBox
          </p>
        </div>
        <div className="w-full max-w-[525px] relative">
          <label
            className="border-2 border-white py-[6px] px-[10px] flex items-center justify-between rounded-md gap-4 max-w-[525px]"
            htmlFor="searchMovie"
            onClick={handleOpen}
          >
            <input
              type="text"
              id="searchMovie"
              placeholder={isOpen && loading ? "Loading..." : "Search movie..."}
              onChange={handleSearch}
              value={search}
              className="border-none outline-none w-full bg-transparent text-white placeholder:text-white"
              autoComplete="off"
            />
            <FaSearch color="white" />
          </label>
          {isOpen && search ? (
            <div className="mt-1 rounded-sm bg-red-800 p-2 absolute w-full">
              {!loading ? (
                filteredMovies.length > 0 ? (
                  <div className="flex flex-col gap-2 overflow-auto max-h-[200px]">
                    {filteredMovies.map((movie, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <img
                          className="h-[50px] w-[50px] "
                          src={movie.image || "https://via.placeholder.com/50x50"}
                          alt=""
                          onError={(e) => (e.target.src = "https://via.placeholder.com/50x50")}
                        />
                        <div>
                          <p
                            onClick={() => handleDetail(movie._uuid)}
                            className="font-bold text-lg cursor-pointer text-white"
                          >
                            {movie.title}
                          </p>
                          <p className="text-sm text-white">
                            {getYear(movie.releaseDate)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-white font-bold">No results</div>
                )
              ) : (
                <div className="text-white font-bold">Loading</div>
              )}
            </div>
          ) : null}
        </div>
        <button
          onClick={(e) => {
            openSidebar(e);
          }}
        >
          <Menu />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
