import { toast } from "react-toastify";

const toastOptions = {
  position: "bottom-right",
  autoClose: 1000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

export const notifySuccess = (message) => {
  toast.success(message, toastOptions);
};

export const notifyError = (message) => {
  toast.error(message, toastOptions);
};
