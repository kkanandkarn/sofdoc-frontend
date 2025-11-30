import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Toast from "./components/Toast";
import "./App.css";
import VaultPage from "./Pages/VaultPage";

function App() {
  return (
    <>
      <Toast />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/vault" element={<VaultPage />} />
      </Routes>
    </>
  );
}

export default App;
