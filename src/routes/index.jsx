import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const VaultPage = lazy(() => import("../pages/VaultPage"));
const CollaboratorsPage = lazy(() => import("../pages/CollaboratorsPage"));
const VerifyPage = lazy(() => import("../pages/VerifyPage"));

const routes = [
  { path: "/", exact: true, component: LoginPage },
  { path: "/vault", exact: true, component: VaultPage },
  { path: "/collaborators", exact: true, component: CollaboratorsPage },
  { path: "/verify/:linkId", exact: true, component: VerifyPage },
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
