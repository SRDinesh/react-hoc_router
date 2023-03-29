import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
/* ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. */

/* BrowserRouter: Uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.

HashRouter: Uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.

MemoryRouter: Keeps the history of your “URL” in memory (does not read or write to the address bar). Useful in tests and non-browser environments like React Native.

StaticRouter: A Router that never changes location. This can be useful in server-side rendering scenarios when the user isn’t actually clicking around, so the location never actually changes. Hence, the name: static. It’s also useful in simple tests when you just need to plug in a location and make assertions on the render output.
 */
const blog = {
  name: 'test',
};
const RouteApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />}>
            <Route path="blog1" element={<Blog1 />} />
            <Route path="blog2" element={<Blog2 data={blog} />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouteApp;
