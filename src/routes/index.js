import { useRoutes } from "react-router-dom";
import { Product, Selection, Stats, TimePeriodMatches } from "../pages";
import ErrorPage from "../pages/error";
import ViewTeam from "../pages/viewTeam";
import TeamComparison from "../pages/teamComparision";
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
      path: "/view-team",
      element: <ViewTeam />,
    },
    {
      path: "/comparison",
      element: <TeamComparison />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
}
