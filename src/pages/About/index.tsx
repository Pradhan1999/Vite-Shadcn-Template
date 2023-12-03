// import { Button } from "@/components/ui/button";
// import { useAddProduct } from "@/hooks/products/mutation";
// import { useGetAllProducts } from "@/hooks/products/query";

const About = () => {
  // const { data: allProducts } = useGetAllProducts();
  // console.log("allProducts", allProducts);

  // const body = {
  //   tittle: "Macbook",
  //   price: 109.95,
  //   description: "macbook air m1",
  //   category: "laptops",
  // };

  // const addProd = useAddProduct();

  // const handleSubmit = () => {
  //   addProd.mutate({ body: body });
  // };

  // console.log(
  //   "addProd.isPending",
  //   addProd.isPending,
  //   "addProd.isError",
  //   addProd.isError
  // );

  return (
    <div className="flex items-center justify-center h-[80vh] bg-purple-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to our about page. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default About;
