import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById } from "../../services/MovieAPI/api";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { useMovieContext } from "../../contexts/MovieContext";
import { openEditMovie } from "../../components/View/ModalMovie/ModalMovie";
import Loading from "../../components/Loading/Loading";
import Swal from "sweetalert2";

export let setLoadingDetailPage = () => {};

const Detail = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const { handleSetMovie, isUpdated, setIsUpdated, handleDeleteMovie } = useMovieContext()
  const { id } = useParams();
  const navigate = useNavigate();
  
  setLoadingDetailPage = setLoading

  const getDetailMovie = async () => {
    setLoading(true);
    try {
      const response = await getMovieById(id);
      setIsUpdated(false)
      setMovie(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditMovie = () => {
    if (loading) return;
    handleSetMovie(movie)
    openEditMovie(id);
  }

  const deleteMovie = async() => {
    const response = await handleDeleteMovie(id)
    if (response) {
      Swal.fire({
        icon: "success",
        title: "Movie deleted successfully",
      })
      navigate("/");
    }
  }

  useEffect(() => { 
    if (isUpdated) {
      getDetailMovie();
    }
  }, [isUpdated]);

  useEffect(() => {
    getDetailMovie();
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <Header movie={movie} />
      <Body movie={movie} />
      <div className="fixed bottom-10 right-10 flex gap-4 max-780:flex-col z-[3]">
        <div onClick={deleteMovie} className="p-6 bg-[#BE123C] text-white rounded-full cursor-pointer">
          <FaTrash size={30} />
        </div>
        <div onClick={handleEditMovie} className="p-6 bg-[#BE123C] text-white rounded-full cursor-pointer">
          <FaRegEdit size={30} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
