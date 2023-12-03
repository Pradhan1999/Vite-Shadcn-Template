import { EndPoint } from "@/types/index";

const productEndpoints: EndPoint = {
  getAllProducts: {
    uri: "/api/products",
    method: "GET",
    version: "",
  },
  addProduct: {
    uri: "/api/products",
    method: "POST",
    version: "",
  },
};

export default productEndpoints;
