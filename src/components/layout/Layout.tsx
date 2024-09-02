import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "../ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />

      {/* Navbar */}
      <Header />
      <Outlet />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;
