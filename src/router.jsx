import { createBrowserRouter } from "react-router-dom";

import Root from "./layout/Root";
import Home from "./layout/Home";
import Contact from "./layout/Contact";
import Shop from "./layout/Shop";
import Tattoos from "./layout/Tattoos";
import Deposits from "./layout/Deposits";
import GiftCards from "./layout/GiftCards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tattoos",
        element: <Tattoos />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/deposits",
        element: <Deposits />,
      },
      {
        path: "/giftcards",
        element: <GiftCards />,
      },
    ],
  },
]);

export default router;
