import { Outlet, Link } from "@tanstack/react-router";
import Navbar from "./components/navbar";
import { SearchProvider } from "./context/searchContext";

export function RootLayout() {
  return (

    <SearchProvider>
      <div>
        {/* <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav> */}
        <Navbar />

        <hr />
        <Outlet />
      </div>
    </SearchProvider>
  );
}
