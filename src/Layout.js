import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <ul>
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
        </ul>
        <a
          href="https://github.com/Jen-Hua-Chang/Infinite-Tic-Tac-Toe"
          target="_blank"
          rel="noopener noreferrer"
          class="github-button ms-auto me-2"
          title="Check out the source code on GitHub!"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
          />
        </a>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
