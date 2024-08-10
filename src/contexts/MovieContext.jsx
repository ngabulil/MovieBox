import { createContext, useContext, useState } from "react";
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  updateMovie,
} from "../services/MovieAPI/api";
import Swal from "sweetalert2";
import { setLoadingDetailPage } from "../containers/Detail/Detail";
import { validateObject } from "../utils/validateObject";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState("");
  const [genres, setGenres] = useState("");
  const [imDbRating, setImDbRating] = useState("");
  const [imDbRatingVotes, setImDbRatingVotes] = useState("");
  const [image, setImage] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [rottenTomatoesRating, setRottenTomatoesRating] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [actorList, setActorList] = useState([]);
  const [awards, setAwards] = useState("");
  const [boxOffice, setBoxOffice] = useState({});
  const [companies, setCompanies] = useState("");
  const [contentRating, setContentRating] = useState("");
  const [directors, setDirectors] = useState("");
  const [languages, setLanguages] = useState("");
  const [runtimeMins, setRuntimeMins] = useState("");
  const [similars, setSimilars] = useState([]);
  const [writers, setWriters] = useState("");
  const [year, setYear] = useState("");
  const [trailer, setTrailer] = useState("");
  const [posterTrailer, setPosterTrailer] = useState("");
  const [plot, setPlot] = useState("");
  const [keywords, setKeywords] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [clickIsLoading, setClickIsLoading] = useState(false);
  const [trigger, setTrigger] = useState(false);

  const handleReset = () => {
    setCountries("");
    setGenres("");
    setImDbRating("");
    setImDbRatingVotes("");
    setImage("");
    setReleaseDate("");
    setRottenTomatoesRating("");
    setTitle("");
    setType("");
    setActorList([]);
    setAwards("");
    setBoxOffice({});
    setCompanies("");
    setContentRating("");
    setDirectors("");
    setLanguages("");
    setRuntimeMins("");
    setSimilars([]);
    setWriters("");
    setYear("");
    setTrailer("");
    setPosterTrailer("");
    setPlot("");
    setKeywords("");
    setTrigger(false);
  };

  const handleSetMovie = (movie = {}) => {
    setCountries(movie.countries || "");
    setGenres(movie.genres || "");
    setImDbRating(movie.imDbRating || "");
    setImDbRatingVotes(movie.imDbRatingVotes || "");
    setImage(movie.image || "");
    setReleaseDate(movie.releaseDate || "");
    setRottenTomatoesRating(movie.rottenTomatoesRating || "");
    setTitle(movie.title || "");
    setType(movie.type || "");
    setActorList(movie.actorList || []);
    setAwards(movie.awards || "");
    setBoxOffice(movie.boxOffice || {});
    setCompanies(movie.companies || "");
    setContentRating(movie.contentRating || "");
    setDirectors(movie.directors || "");
    setLanguages(movie.languages || "");
    setRuntimeMins(movie.runtimeMins || "");
    setSimilars(movie.similars || []);
    setWriters(movie.writers || "");
    setYear(movie.year || "");
    setTrailer(movie.trailer || "");
    setPosterTrailer(movie.posterTrailer || "");
    setPlot(movie.plot || "");
    setKeywords(movie.keywords || "");
  };

  const handleGetMovies = async () => {
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

  const handleDeleteMovie = async (id) => {
    return Swal.fire({
      title: "Do you want to delete this movie?",
      showDenyButton: true,
      confirmButtonText: "Yes, delete it!",
      denyButtonText: `No, don't delete it!`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoadingDetailPage(true);
        try {
          const response = await deleteMovie(id);
          handleGetMovies();
          return response;
        } catch (error) {
          console.log(error);
          return false;
        }
      }
    });
  };

  const formatData = () => {
    return {
      countries: countries?.trim() || "",
      genres: genres?.trim() || "",
      imDbRating: imDbRating?.trim() || "",
      imDbRatingVotes: imDbRatingVotes?.trim() || "",
      image: image?.trim() || "",
      releaseDate: releaseDate?.trim() || "",
      rottenTomatoesRating: rottenTomatoesRating?.trim() || "",
      title: title?.trim() || "",
      type: type?.trim() || "",
      actorList:
        actorList?.map((actor) => ({
          name: actor?.name?.trim() || "",
          image: actor?.image?.trim() || "",
        })) || [],
      awards: awards?.trim() || "",
      boxOffice: {
        budget: boxOffice?.budget?.trim() || "",
        cumulativeWorldwideGross:
          boxOffice?.cumulativeWorldwideGross?.trim() || "",
      },
      companies: companies?.trim() || "",
      contentRating: contentRating?.trim() || "",
      directors: directors?.trim() || "",
      languages: languages?.trim() || "",
      runtimeMins: runtimeMins?.trim() || "",
      similars:
        similars?.map((similar) => ({
          title: similar?.title?.trim() || "",
          image: similar?.image?.trim() || "",
          imDbRating: similar?.imDbRating?.trim() || "",
          rottenTomatoesRating: similar?.rottenTomatoesRating?.trim() || "",
        })) || [],
      writers: writers?.trim() || "",
      year: year?.trim() || "",
      trailer: trailer?.trim() || "",
      posterTrailer: posterTrailer?.trim() || "",
      plot: plot?.trim() || "",
      keywords: keywords?.trim() || "",
    };
  };

  const handleEditMovie = async (id) => {
    setLoading(true);
    setClickIsLoading(true);
    try {
      const data = formatData();
      const isValid = validateObject(data);
      if (!isValid) {
        setTrigger(true);
        Swal.fire("Error", "Please fill all required fields", "error");
        handleSetMovie(data);
        return false;
      }
      const response = await updateMovie(id, data);
      Swal.fire("Good job!", "Movie updated successfully", "success");
      setIsUpdated(true);
      handleReset();
      return response;
    } catch (error) {
      console.log(error);
      Swal.fire("Error", error.error, "error");
      return false;
    } finally {
      setLoading(false);
      setClickIsLoading(false);
    }
  };

  const handleAddMovie = async () => {
    setClickIsLoading(true);
    setLoading(true);
    try {
      const { pathname } = location;
      const data = formatData();
      const isValid = validateObject(data);
      if (!isValid) {
        setTrigger(true);
        Swal.fire("Error", "Please fill all required fields", "error");
        handleSetMovie(data);
        return false;
      }
      const response = await createMovie(data);
      Swal.fire("Good job!", "Movie added successfully", "success");
      handleReset();
      if (pathname === "/") {
        handleGetMovies();
        return response;
      }
      return response;
    } catch (error) {
      console.log(error);
      Swal.fire("Error", error.error, "error");
      return false;
    } finally {
      setLoading(false);
      setClickIsLoading(false);
    }
  };

  const value = {
    trigger,
    setTrigger,
    movies,
    setMovies,
    loading,
    setLoading,
    countries,
    setCountries,
    trailer,
    setTrailer,
    posterTrailer,
    setPosterTrailer,
    plot,
    setPlot,
    genres,
    setGenres,
    imDbRating,
    setImDbRating,
    imDbRatingVotes,
    setImDbRatingVotes,
    image,
    setImage,
    releaseDate,
    setReleaseDate,
    rottenTomatoesRating,
    setRottenTomatoesRating,
    title,
    setTitle,
    type,
    setType,
    actorList,
    setActorList,
    awards,
    setAwards,
    boxOffice,
    setBoxOffice,
    companies,
    setCompanies,
    contentRating,
    setContentRating,
    directors,
    setDirectors,
    year,
    setYear,
    languages,
    setLanguages,
    runtimeMins,
    setRuntimeMins,
    similars,
    setSimilars,
    writers,
    setWriters,
    keywords,
    setKeywords,
    isUpdated,
    setIsUpdated,
    clickIsLoading,
    setClickIsLoading,
    handleGetMovies,
    handleDeleteMovie,
    handleEditMovie,
    handleAddMovie,
    handleSetMovie,
    handleReset,
  };
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

export default MovieContextProvider;
