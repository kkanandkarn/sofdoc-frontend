import { Loading } from "notiflix";

export const showLoader = () => {
  Loading.hourglass();
};

export const hideLoader = () => {
  Loading.remove();
};
