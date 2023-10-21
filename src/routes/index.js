import { useRoutes } from "react-router-dom";
import { Product, Selection, Stats, TimePeriodMatches } from "../pages";
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
      path: "/time-period-matches",
      element: <TimePeriodMatches />,
    },
  ]);
}
