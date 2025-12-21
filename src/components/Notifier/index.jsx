import React from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Notifier = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
  );
};
export const notifier = {
  success(message) {
    toast.success(message ?? "Success!");
  },
  error(message) {
    toast.error(message ?? "Something went wrong. Please try again lator");
  },
};
export default Notifier;
