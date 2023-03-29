import React from 'react';
import { Outlet, Link } from 'react-router-dom';
/* The Outlet component renders the matching child route with its respective component from the parent Routes' component collection of Route components. */
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
