import { getAllProducts } from "@/utils/services/products";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    refetchOnWindowFocus: false,
  });
};
