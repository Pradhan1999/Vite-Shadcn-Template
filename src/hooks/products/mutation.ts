import { addProducts } from "@/utils/services/products";
import { useMutation } from "@tanstack/react-query";

export const useAddProduct = () => {
  return useMutation({
    mutationFn: (payload: any) => addProducts(payload),
  });
};
