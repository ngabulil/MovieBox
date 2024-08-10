import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import ModalMovie from "../../components/View/ModalMovie/ModalMovie";

const MainPage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <Footer />
      <Sidebar />
      <ModalMovie />
    </div>
  );
};

export default MainPage;
