import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import SidebarItems from "./SidebarItems";
import { IoCloudUploadOutline } from "react-icons/io5";
import { setSidebar } from "../store/slices/Sidebar/SidebarSlice";

const Sidebar = () => {
  const authData = JSON.parse(localStorage.getItem("user"));
  const sidebar = useSelector((state) => state.sidebar);
  const [sidebarOpen, setSidebarOpen] = useState(sidebar.sidebarOpen);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const [menuItems, setMenuItems] = useState(SidebarItems);

  useEffect(() => {
    setSidebarOpen(sidebar.sidebarOpen);
  }, [sidebar]);

  const handleMenuClick = (route) => navigate(route);

  const handleSidebar = () => {
    dispatch(setSidebar({ sidebarOpen: !sidebarOpen }));
  };

  const isActiveMenu = (route) => location.pathname.includes(route);

  return (
    <div className="bg-white border-r border-gray-200">
      <div
        className={` ${
          sidebarOpen ? "w-64" : "w-20"
        }  rounded-lg text-white h-screen duration-300 ease-in-out relative py-2`}
      >
        <div
          className={`flex  flex-col justify-center items-center gap-2 text-black mb-4 px-4 pb-4  ease-in-out duration-300 border-b border-gray-200`}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="text-blue-500 text-2xl">
              {" "}
              <IoCloudUploadOutline />
            </div>

            <h1 className="font-poppin text-center text-gray-500 font-semibold text-xl">
              <span className="text-blue-500">S</span>of
              <span className="text-blue-500">D</span>oc
            </h1>
          </div>
          <div className="flex items-center justify-center text-center">
            <h1 className="text-xs text-gray-600">
              Cloud File Management and Migration
            </h1>
          </div>
        </div>
        <ul className="px-4 ease-in-out duration-300">
          {menuItems?.map((menuItem, index) => (
            <li
              key={index}
              className={`mb-4 cursor-pointer`}
              onClick={() => handleMenuClick(menuItem.route)}
            >
              <div
                className={`text-left border-l-4  px-4 py-2 text-gray-900 rounded-md font-Poppins flex items-center gap-2  ${
                  isActiveMenu(menuItem.route)
                    ? "bg-sky-200 border-sky-400"
                    : "border-white"
                }`}
                data-tooltip-id={`tooltip-${menuItem.name}`} // Tooltip ID
                data-tooltip-content={menuItem.name} // Tooltip Content
              >
                <div className={`${isActiveMenu(menuItem.route) ? "" : ""}`}>
                  {menuItem.icon}
                </div>
                {menuItem.label}
              </div>

              {!sidebarOpen && (
                <Tooltip id={`tooltip-${menuItem.name}`} place="right" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
