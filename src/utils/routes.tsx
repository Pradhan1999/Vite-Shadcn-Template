import Layout from "@/components/layout/Layout";
import NotFound from "@/pages/404";
import About from "@/pages/About";
import { Contact } from "@/pages/Contact";
import Home from "@/pages/Home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";

export const routes = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about/" element={<About />}>
          {/* for nested routes */}
          <Route path=":id" element={<About />} />
        </Route>
        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Route>
      {/* if you don't want to include header and footer */}
      {/* <Route path="/other" element={<Home />} /> */}

      {/* R&D */}
      {/* about loader : which hits api while we are hovering on link */}
    </>
  )
);
