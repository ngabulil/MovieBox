import React from "react";
import Modal from "../../Modal/Modal";
import InputType from "../../Inputs/InputType";
import InfinityInput from "../../Inputs/InfinityInput";
import { useMovieContext } from "../../../contexts/MovieContext";

export let openModalMovie = () => {};
export let openEditMovie = () => {};

const Body = () => {
  const {
    countries,
    genres,
    imDbRating,
    imDbRatingVotes,
    image,
    releaseDate,
    rottenTomatoesRating,
    title,
    type,
    actorList,
    awards,
    boxOffice,
    companies,
    contentRating,
    directors,
    languages,
    runtimeMins,
    similars,
    writers,
    year,
    trailer,
    posterTrailer,
    plot,
    keywords,
    setCountries,
    setGenres,
    setImDbRating,
    setImDbRatingVotes,
    setImage,
    setReleaseDate,
    setRottenTomatoesRating,
    setTitle,
    setType,
    setActorList,
    setAwards,
    setBoxOffice,
    setCompanies,
    setContentRating,
    setDirectors,
    setLanguages,
    setRuntimeMins,
    setSimilars,
    setWriters,
    setYear,
    setTrailer,
    setPosterTrailer,
    setPlot,
    setKeywords,
    trigger,
  } = useMovieContext();

  const onChangeBudget = (val) => {
    setBoxOffice({ ...boxOffice, budget: val });
  };

  const onChangeGlobalEarnings = (val) => {
    setBoxOffice({ ...boxOffice, cumulativeWorldwideGross: val });
  };

  const inputsPropActor = [
    {
      label: "Name",
      placeholder: "Actor Name",
      name: "name",
      trigger
    },
    {
      label: "Actor Image (Link / URL)",
      placeholder: "Actor Image",
      name: "image",
      trigger
    },
  ];

  const inputsPropMovie = [
    {
      label: "Title",
      placeholder: "Movie Title",
      name: "title",
      trigger
    },
    {
      label: "Movie Image (Link / URL)",
      placeholder: "Movie Image",
      name: "image",
      trigger
    },
    {
      label: "IMDb Rating",
      placeholder: "Movie IMDb Rating",
      name: "imDbRating",
      type: "number",
      max: 10,
      trigger
    },
    {
      label: "Rotten Tomatoes Rating",
      placeholder: "Movie Rotten Tomatoes Rating",
      name: "rottenTomatoesRating",
      type: "number",
      max: 100,
      trigger
    },
  ];

  return (
    <div>
      <div className="flex gap-4 justify-between items-center max-700:flex-col max-700:gap-0">
        <InputType
          trigger={trigger}
          value={title}
          onChange={setTitle}
          label="Title"
          placeholder={"Movie Title"}
        />
        <InputType
          trigger={trigger}
          value={type}
          onChange={setType}
          label="Type"
          placeholder={"Movie Type"}
        />
      </div>
      <div className="flex gap-4 justify-between items-center max-700:flex-col max-700:gap-0">
        <InputType
          trigger={trigger}
          value={year}
          onChange={setYear}
          label="Year"
          placeholder={"Movie Year"}
        />
        <InputType
          trigger={trigger}
          label="Release Date"
          placeholder={"Movie Type"}
          type={"date"}
          value={releaseDate}
          onChange={setReleaseDate}
        />
      </div>
      <div className="flex gap-4 justify-between items-center max-700:flex-col max-700:gap-0">
        <InputType
          trigger={trigger}
          label="Duration (Mins)"
          placeholder={"Movie Duration"}
          value={runtimeMins}
          onChange={setRuntimeMins}
        />
        <InputType
          trigger={trigger}
          label="Awards"
          placeholder={"Movie Awards"}
          value={awards}
          onChange={setAwards}
        />
      </div>
      <div className="flex gap-4 justify-between items-center max-700:flex-col max-700:gap-0">
        <InputType
          trigger={trigger}
          label="Content Rating"
          placeholder={"Movie Content Rating"}
          value={contentRating}
          onChange={setContentRating}
        />
        <InputType
          trigger={trigger}
          label="IMDb Rating"
          placeholder={"Movie IMDb Rating"}
          type={"number"}
          max={10}
          value={imDbRating}
          onChange={setImDbRating}
        />
      </div>
      <div className="flex gap-4 justify-between items-center max-700:flex-col max-700:gap-0">
        <InputType
          trigger={trigger}
          label="IMDb Rating Votes"
          placeholder={"Movie IMDb Rating Votes"}
          type={"number"}
          max={10000000}
          value={imDbRatingVotes}
          onChange={setImDbRatingVotes}
        />
        <InputType
          trigger={trigger}
          label="Rotten Tomatoes Rating"
          placeholder={"Movie Rotten Tomatoes Rating"}
          type={"number"}
          max={100}
          value={rottenTomatoesRating}
          onChange={setRottenTomatoesRating}
        />
      </div>
      <div className="flex gap-4 justify-between items-center max-700:flex-col max-700:gap-0">
        <InputType
          trigger={trigger}
          label="Languages"
          placeholder={"Movie Languages"}
          value={languages}
          onChange={setLanguages}
        />
        <InputType
          trigger={trigger}
          label="Countries"
          placeholder={"Movie Countries"}
          value={countries}
          onChange={setCountries}
        />
      </div>
      <div className="flex gap-4 justify-between items-center max-700:flex-col max-700:gap-0">
        <InputType
          trigger={trigger}
          label="Directors"
          placeholder={"Movie Directors"}
          value={directors}
          onChange={setDirectors}
        />
        <InputType
          trigger={trigger}
          label="Writers"
          placeholder={"Movie Writers"}
          value={writers}
          onChange={setWriters}
        />
      </div>
      <div className="flex gap-4 justify-between items-center max-700:flex-col max-700:gap-0">
        <InputType
          trigger={trigger}
          label="Companies"
          placeholder={"Movie Companies"}
          value={companies}
          onChange={setCompanies}
        />
        <InputType
          trigger={trigger}
          label="Movie Image (Link / URL)"
          placeholder={"Movie Image URL"}
          value={image}
          onChange={setImage}
        />
      </div>
      <div className="flex gap-4 justify-between items-center max-700:flex-col max-700:gap-0">
        <InputType
          trigger={trigger}
          label="Trailer (Link / URL)"
          placeholder={"Movie Trailer URL"}
          value={trailer}
          onChange={setTrailer}
        />
        <InputType
          trigger={trigger}
          label="Poster Trailer (Link / URL)"
          placeholder={"Movie Poster Trailer URL"}
          value={posterTrailer}
          onChange={setPosterTrailer}
        />
      </div>
      <div className="flex gap-4 justify-between items-center max-700:flex-col max-700:gap-0">
        <InputType
          trigger={trigger}
          label="Budget"
          placeholder={"Movie Budget"}
          value={boxOffice?.budget}
          onChange={onChangeBudget}
        />
        <InputType
          trigger={trigger}
          label="Total Global Earnings"
          placeholder={"Movie Total Global Earnings"}
          value={boxOffice?.cumulativeWorldwideGross}
          onChange={onChangeGlobalEarnings}
        />
      </div>
      <div className="flex gap-4 justify-between items-center max-700:flex-col max-700:gap-0">
        <InputType
          trigger={trigger}
          label="Genres"
          placeholder={"Movie Genres"}
          value={genres}
          onChange={setGenres}
          type={"textarea"}
        />
      </div>
      <div className="flex gap-4 justify-between items-center max-700:flex-col max-700:gap-0">
        <InputType
          trigger={trigger}
          label="Keywords"
          placeholder={"Movie Keywords"}
          type={"textarea"}
          value={keywords}
          onChange={setKeywords}
        />
      </div>
      <div className="flex gap-4 justify-between items-center max-700:flex-col max-700:gap-0">
        <InputType
          trigger={trigger}
          label="Description / Plot"
          placeholder={"Movie Description"}
          type={"textarea"}
          value={plot}
          onChange={setPlot}
        />
      </div>
      <InfinityInput
        inputs={inputsPropActor}
        label={"Actors"}
        value={actorList}
        onChange={setActorList}
        trigger={trigger}
      />
      <InfinityInput
        inputs={inputsPropMovie}
        label={"Similar Movies"}
        value={similars}
        onChange={setSimilars}
        trigger={trigger}
      />
    </div>
  );
};

const ModalMovie = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [uuid, setUuid] = React.useState("");
  const { handleAddMovie, handleEditMovie, handleReset } = useMovieContext();

  const handleCloseModal = () => {
    setShowModal(false);
    setIsEdit(false);
    setUuid("");
    handleReset();
  };

  const handleCreateMovie = async () => {
    const response = await handleAddMovie();
    if (response) {
      handleCloseModal();
    }
  };

  const handleEdit = async () => {
    const response = await handleEditMovie(uuid);
    if (response) {
      handleCloseModal();
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleOpenEdit = (id) => {
    setIsEdit(true);
    setShowModal(true);
    setUuid(id);
  };

  openModalMovie = handleOpenModal;
  openEditMovie = handleOpenEdit;

  return (
    <Modal
      Body={<Body />}
      open={showModal}
      onClose={handleCloseModal}
      title={isEdit ? "Edit Movie" : "Create Movie"}
      onSubmit={isEdit ? handleEdit : handleCreateMovie}
    />
  );
};

export default ModalMovie;
