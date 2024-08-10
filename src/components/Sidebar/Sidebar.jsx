import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { openModalMovie } from "../View/ModalMovie/ModalMovie";

export let openSidebar = () => {};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    document.body.removeEventListener("click", handleClose);
  };

  const handleOpen = (e) => {
    e.stopPropagation();
    setIsOpen(true);
    document.body.addEventListener("click", handleClose);
  };

  const onAddMovie = () => {
    openModalMovie();
    handleClose();
  };

  openSidebar = handleOpen;

  return isOpen ? (
    <div className="absolute right-0 top-0 h-full w-full flex">
      <div className="bg-black w-full relative z-[5] opacity-40"></div>
      <div
        className="w-full max-w-[300px] bg-[#BE123C] relative z-[6] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sticky top-4">
          <div className="flex gap-8 items-center pb-4">
            <button onClick={handleClose}>
              <AiOutlineClose size={30} fill="white" />
            </button>
            <p className="text-white font-bold text-xl">MovieBox</p>
          </div>
          <button onClick={onAddMovie}>
            <p className="text-white font-bold text-lg p-2 bg-red-900 rounded-md">
              Tambah Movie
            </p>
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Sidebar;
