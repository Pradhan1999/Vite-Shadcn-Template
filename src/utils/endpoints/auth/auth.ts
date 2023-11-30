import { EndPoint } from "@/types/index";

const authEndpoint: EndPoint = {
  currentUser: {
    uri: "/api/product",
    method: "POST",
    version: "",
  },
  getProducts: {
    uri: "/products",
    method: "GET",
    version: "",
  },
};
export default authEndpoint;
