import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Main from "../Layout/Main";
import About from "../pages/About";
import AppDevelopment from "../pages/AppDevelopment";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Price from "../pages/Price";
import UiUx from "../pages/UiUx";
import WebDevelopment from "../pages/WebDevelopment";

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
        path: "/service/web-development",
        element: <WebDevelopment />,
      },
      {
        path: "/service/app-development",
        element: <AppDevelopment />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
