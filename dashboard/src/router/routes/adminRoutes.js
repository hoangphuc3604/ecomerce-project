import { lazy } from "react";
const Home = lazy(() => import("../../views/Home"));

export const adminRoute = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
];
