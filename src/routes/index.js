import { useRoutes } from "react-router-dom";
import { Product, Selection, Stats, TimePeriodMatches } from "../pages";
import ErrorPage from "../pages/error";
export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Product />,
    },
    {
      path: "/selection-format",
      element: <Selection />,
    },
    {
      path: "/stats",
      element: <Stats />,
    },
    {
      path: "/tp-matches",
      element: <TimePeriodMatches />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
}
