import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MovieContextProvider from "./contexts/MovieContext.jsx";

createRoot(document.getElementById("root")).render(
  <MovieContextProvider>
    <App />
  </MovieContextProvider>
);
