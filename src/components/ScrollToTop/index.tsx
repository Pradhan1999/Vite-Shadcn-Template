import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
    console.log("fired 🔥");

    // Optionally, you can add event listeners or other logic here

    // Scroll to the top when the component unmounts (cleanup)
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return null; // Render nothing (this is a utility component)
};

export default ScrollToTop;
