import { Helmet } from "react-helmet";
import { CiUser } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./styles.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = ({ children, title = "SofDoc", path = [] }) => {
  const [profileModal, setProfileModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div>
      <div className="h-screen flex bg-white">
        <ToastContainer position="top-center" />
        <div className="h-full">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="h-14 px-6 w-full flex justify-between items-center bg-white border-b border-gray-200 p-4">
            <div className="">
              {/* <div className="font-Poppins font-bold font-poppins text-sm text-gray-500 py-4">
                Home {"/"} {title}
              </div> */}
              <div className="flex items-center text-sm text-gray-500 font-Poppins font-semibold">
                {/* Home */}
                <Link
                  className="cursor-pointer hover:text-blue-600"
                  to={"/vault"}
                >
                  Home
                </Link>

                {path?.map((item, index) => (
                  <span key={index} className="flex items-center">
                    <span className="mx-2">/</span>

                    {item.route ? (
                      <Link
                        className="cursor-pointer hover:text-blue-600"
                        to={item.route}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-gray-700">{item.label}</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex relative">
              <div
                className="hover:bg-zinc-300 hover:text-slate-900 rounded-full p-2 mr-4 text-gray-600 cursor-pointer ease-in-out duration-300"
                onClick={() => setNotificationModal(true)}
              >
                <IoIosNotificationsOutline size={22} />
                {notificationCount > 0 && (
                  <div className="absolute w-4 h-4 flex justify-center items-center rounded-full text-xs font-Poppins font-bold text-white bg-red-400 top-1 left-5">
                    {notificationCount}
                  </div>
                )}
              </div>
              <div
                className="hover:bg-zinc-300 hover:text-slate-900 rounded-full p-2 text-gray-600 cursor-pointer ease-in-out duration-300"
                onClick={() => setProfileModal(true)}
              >
                <CiUser size={20} />
              </div>
              {/* <ProfileModal
                isOpen={profileModal}
                onClose={() => setProfileModal(false)}
              />
              {notificationModal && (
                <NotificationModal
                  isOpen={notificationModal}
                  onClose={() => {
                    setNotificationCount(0);
                    setNotificationModal(false);
                  }}
                />
              )} */}
            </div>
          </div>
          <div className="content-container overflow-auto h-full px-6 py-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
