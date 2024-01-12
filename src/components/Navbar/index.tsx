import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <nav className="bg-zinc-300 flex gap-4">
            <Link to="/">HOME</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}
