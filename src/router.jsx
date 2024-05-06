import { createBrowserRouter } from "react-router-dom";

import Root from "./layout/Root";
import Home from "./layout/Home";
import Contact from "./layout/Contact";
import Shop from "./layout/Shop";
import Tattoos from "./layout/Tattoos";
import Deposits from "./layout/Deposits";
import GiftCards from "./layout/GiftCards";
import Aftercare from "./layout/AfterCare";
import Faq from "./layout/Faq";

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
      {
        path: "/aftercare",
        element: <Aftercare />,
      },
      {
        path: "/faqs",
        element: <Faq />,
      },
    ],
  },
]);

export default router;
