import { privateRoute } from "./privateRoutes";
import MainLayout from "./../../layout/MainLayout";
import ProtectRoute from "./ProtectRoute";

export const getRoute = () => {
  const newPrivateRoute = privateRoute.map((route) => {
    route.element = <ProtectRoute route={route}>{route.element}</ProtectRoute>;
    return route;
  });

  return {
    path: "/",
    element: <MainLayout />,
    children: newPrivateRoute,
  };
};
