import { Helmet } from "react-helmet";
import "./styles.css";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { BiMemoryCard } from "react-icons/bi";
import { useSelector } from "react-redux";

const Layout = ({ children, title = "SofDoc" }) => {
  const authData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const path = useSelector((state) => state.auth.activePath);

  if (!authData) {
    navigate("/");
  }

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className="h-screen flex">
        <div className="h-full">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="h-16 bg-white w-full flex items-center justify-between px-8 border-b border-b-gray-400 shadow-sm">
            <div>
              <h1 className="text-xl font-semibold text-gray-800 tracking-wide">
                {title}
              </h1>
              <p className="text-sm text-gray-500 mt-0.5">
                {path.split("/").map((p, idx, arr) => (
                  <span key={idx}>
                    {p === "" ? "Home" : p.charAt(0).toUpperCase() + p.slice(1)}
                    {idx < arr.length - 1 && " / "}
                  </span>
                ))}
              </p>
            </div>
            <div className="text-gray-500 flex items-center gap-2">
              <p>0.2/1 GB</p>{" "}
              <div className="text-xl">
                <BiMemoryCard />
              </div>
            </div>
          </div>

          {/* --- Page Content --- */}
          <div className="content-container overflow-auto px-8 py-6 min-h-[90%]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
