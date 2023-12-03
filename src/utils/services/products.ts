import { callApi } from "../apiUtils";
import productEndpoints from "../endpoints/products";

export const getAllProducts = () => {
  return callApi({
    uriEndPoint: { ...productEndpoints.getAllProducts },
  });
};

export const addProducts = ({ body }: any) => {
  return callApi({
    uriEndPoint: { ...productEndpoints.addProduct },
    body,
  });
};
