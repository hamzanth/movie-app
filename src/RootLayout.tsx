import { Outlet, Link } from "@tanstack/react-router";
import Navbar from "./components/navbar";

export function RootLayout() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav> */}
      <Navbar />

      <hr />
      <Outlet />
    </div>
  );
}
