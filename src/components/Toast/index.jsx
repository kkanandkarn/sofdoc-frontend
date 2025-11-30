import { Bounce, toast, ToastContainer } from "react-toastify";

const Toast = () => {
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

export default Toast;

export const actionNotifier = {
  success: (message) => toast.success(message),
  error: (message) => toast.error(message),
  warning: (message) => toast.warn(message),
  info: (message) => toast.info(message),
};
