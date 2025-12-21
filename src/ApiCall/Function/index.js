import { axios } from "../../utils/axios";

export const ApiFunction = async ({
  url,
  method,
  postData,
  extraConfig,
  section,
  extraHeader,
  callback,
}) => {
  const authorization = localStorage.getItem("authorization");
  const token = authorization?.token;
  let config = {
    method: method,
    url: url,
    data: postData ? postData : {},
  };
  let data;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (extraConfig === "blob") {
    config = {
      ...config,
      responseType: "blob",
    };
  }

  if (extraConfig === "formData") {
    config = {
      ...config,
      headers: { ...config.headers, "content-type": "multipart/form-data" },
      onUploadProgress: (progressEvent) => {
        callback(
          Math.round((progressEvent.loaded / progressEvent.total) * 100)
        );
      },
    };
  }

  if (extraHeader?.log) {
    config = {
      ...config,
      headers: {
        ...config.headers,
        log: extraHeader.log,
      },
    };
  } else if (extraHeader) {
    config = {
      ...config,
      headers: {
        ...config.headers,
      },
    };
  }

  await axios({ ...config })
    .then((res) => {
      if (extraConfig === "blob") {
        data = res.data;
      } else {
        data = {
          data:
            typeof res.data.data == "boolean"
              ? res.data.data
              : res.data.data
              ? res.data.data
              : {},
          status: res.data.status === "success" ? true : false,
          message: res.data.status,
        };
      }
    })
    .catch((err) => {
      if (err.response?.data) {
        data = {
          ...err.response.data,
          status: false,
        };
      } else {
        data = {
          message: "Something went wrong. Please try again",
          status: false,
        };
      }
    });
  return data;
};
