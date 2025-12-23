import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const VaultPage = lazy(() => import("../pages/VaultPage"));

const routes = [
  { path: "/", exact: true, component: LoginPage },
  { path: "/vault", exact: true, component: VaultPage },
];

const PageRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={<route.component />} />
      ))}
    </Routes>
  );
};
export default PageRoutes;
