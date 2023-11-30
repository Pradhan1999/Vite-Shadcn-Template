import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      {/* Navbar */}
      <Header />
      <Outlet />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;
