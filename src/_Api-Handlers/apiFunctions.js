import { INSTANCE } from "@/app/_constant/UrlConstant";
import { authAxios, authorizeAxios } from "./apiConfig";

export const METHODS = {
  get: "GET",
  post: "POST",
  put: "PUT",
  patch: "PATCH",
  delete: "DELETE",
};

export const callApi = async ({
  endPoint,
  method,
  params,
  payload,
  instanceType = INSTANCE.auth,
}) => {
  try {
    let API_INSTANCE = null;
    if (instanceType === INSTANCE.auth) {
      API_INSTANCE = authAxios;
    } else if (instanceType === INSTANCE.formInstance) {
      API_INSTANCE = authorizeFileInstance;
    } else {
      API_INSTANCE = authorizeAxios;
    }

    switch (method) {
      case METHODS.get: {
        const config = params ? { params: { ...params } } : {};
        return await API_INSTANCE.get(endPoint, config);
      }

      case METHODS.post: {
        return await API_INSTANCE.post(endPoint, { ...payload });
      }

      case METHODS.put: {
        return await API_INSTANCE.put(endPoint, { ...payload });
      }

      case METHODS.patch: {
        return await API_INSTANCE.patch(endPoint, { ...payload });
      }

      case METHODS.delete: {
        return await API_INSTANCE.delete(endPoint, { ...payload });
      }

      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
  } catch (error) {
    console.error(`API call failed: ${error}`);
    throw error;
  }
};

export const login = (payload) => {
  console.log("login payload: ", payload);
  return authAxios.post("/login/", payload);
};
