import { Helmet } from "react-helmet";
import { CiUser } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./styles.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = ({ children, title = "SofDoc" }) => {
  const [profileModal, setProfileModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="h-screen flex gap-2 bg-gray-100 p-4">
        <ToastContainer position="top-center" />
        <div className=" h-full">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="h-14 px-6 w-full flex justify-between items-center bg-white rounded-lg">
            <div className="">
              <div className="font-Poppins font-bold font-poppins text-sm text-gray-500 py-4">
                Home {"/"} {title}
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
          <div className="content-container overflow-auto h-full py-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
