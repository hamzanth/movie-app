import { Outlet, Link } from '@tanstack/react-router'

export function RootLayout() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    )
}