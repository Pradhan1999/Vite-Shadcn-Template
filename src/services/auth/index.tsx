import { callApi } from "@/utils/apiUtils";
import authEndpoints from "@/utils/endpoints/auth/auth";

export const currentUser = async ({ body }: any) => {
  return callApi({
    uriEndPoint: {
      ...authEndpoints.currentUser,
    },
    body,
  });
};

// export const getProducts = async () => {
//   return callApi({
//     uriEndPoint: {
//       ...authEndpoints.getProducts,
//     },
//   });
// };
