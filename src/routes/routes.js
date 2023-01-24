import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Main from "../Layout/Main";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Price from "../pages/Price";
import UiUx from "../pages/UiUx";

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
        path: "/portfolio",
        element: <Portfolio />,
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
        path: "/service/uiux",
        element: <UiUx />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
