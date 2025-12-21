import { ApiFunction } from "../../../ApiCall/Function";
import authUrl from "../../../ApiCall/Url/Auth";

export const loginApi = (data) => {
  return ApiFunction({ url: authUrl.LOGIN, method: "POST", postData: data });
};
