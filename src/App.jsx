import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./pages/Detail.lazy";
import NotFound from "./pages/NotFound.lazy";
import { Suspense } from "react";
import Home from "./pages/Home.lazy";
import MainPage from "./pages/MainPage/MainPage";
import Loading from "./components/Loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <Detail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
