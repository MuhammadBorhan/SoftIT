import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Main from "../Layout/Main";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Price from "../pages/Price";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/price",
        element: <Price />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
