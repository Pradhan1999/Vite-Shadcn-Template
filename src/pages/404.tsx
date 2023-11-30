const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl font-semibold text-gray-600">Page not found</p>
        <p className="mt-4 text-gray-500">
          The page you are looking for might be under construction or does not
          exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
