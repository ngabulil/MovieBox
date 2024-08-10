import { MdClose } from "react-icons/md";
import { useMovieContext } from "../../contexts/MovieContext";

const Modal = ({ Body, title, open, onClose, onSubmit }) => {
  const { clickIsLoading } = useMovieContext()
  return open ? (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative z-[7] p-4 w-full max-w-4xl max-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900 ">
              {title || "ahsdb"}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-hide="default-modal"
              onClick={onClose}
            >
              <MdClose size={20} />
            </button>
          </div>
          {/* <!-- Modal body --> */}
          <div className="p-4 max-h-96 overflow-auto">{Body || "ahsdb"}</div>
          {/* <!-- Modal footer --> */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
            <button
              data-modal-hide="default-modal"
              type="button"
              className="text-white bg-[#BE123C] hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={clickIsLoading ? undefined : onSubmit}
            >
              {clickIsLoading ? "Loading..." : "Submit"}
            </button>
            <button
              data-modal-hide="default-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-[6] bg-black"></div>
    </div>
  ) : null;
};

export default Modal;
