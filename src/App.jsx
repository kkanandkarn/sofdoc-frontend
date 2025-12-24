import "./App.css";
import Routes from "../src/routes";
import Notifier from "./components/Notifier";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";

function App() {
  const loading = useSelector((state) => state.loader.loading);
  return (
    <div className="font-poppins">
      {/* <Routes />
      <Notifier />
      {loading && <Loader />} */}
      <Loader active={loading} loadingMessage="Loading...">
        <Routes />
        <Notifier />
      </Loader>
    </div>
  );
}

export default App;
