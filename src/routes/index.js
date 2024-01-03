import { useRoutes } from "react-router-dom";
import { Product, Stats, TimePeriodMatches } from "../pages";
import ErrorPage from "../pages/error";
import ViewTeam from "../pages/viewTeam";
import TeamComparison from "../pages/teamComparision";
import Selection from "../components/teamComparision/selection"
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
