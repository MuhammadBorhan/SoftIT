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
import FakePage from "../pages/FakePage";
import MessagefromMD from "../components/About/MessagefromMD";
import AboutUs from "../components/About/AboutUs";
import OurTeam from "../components/About/OurTeam";
import Insurance from "../components/Clients/Insurance";
import Hospitals from "../components/Clients/Hospitals";
import Education from "../components/Clients/Education";
import InsuranceProduct from "../pages/Products/Insurance";
import Business from "../pages/Products/Business";

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
        path: "/about/message-from-md",
        element: <MessagefromMD />,
      },
      {
        path: "/about/about-us",
        element: <AboutUs />,
      },
      {
        path: "/about/our-team",
        element: <OurTeam />,
      },
      {
        path: "/client/insurance",
        element: <Insurance />,
      },
      {
        path: "/client/hospital",
        element: <Hospitals />,
      },
      {
        path: "/client/education",
        element: <Education />,
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
        path: "/service/softDev",
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
        path: "/product/insurance",
        element: <InsuranceProduct />,
      },
      {
        path: "/product/business",
        element: <Business />,
      },
      {
        path: "/fakePage",
        element: <FakePage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
