import { callApi } from "@/utils/apiUtils";
import authEndpoints from "@/utils/endpoints/auth/auth";

export const currentUser = async () => {
  return callApi({
    uriEndPoint: {
      ...authEndpoints.currentUser,
    },
  });
};

