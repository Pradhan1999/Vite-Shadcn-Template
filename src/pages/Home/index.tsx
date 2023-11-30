const Home = () => {
  // fetch("https://dummyjson.com/products")
  //   .then((res) => res.json())
  //   .then(console.log);

  return (
    <>
      {/* Hero section */}
      <div className="bg-cover bg-center h-[80vh] flex items-center ">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-primary">
            Welcome to Your Website
          </h1>
          <p className="text-lg mb-8">A place for amazing things to happen</p>
          <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-white">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
