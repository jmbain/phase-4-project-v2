import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/api/students">My Students</NavLink>
            <NavLink to="/api/applications">My Applications</NavLink>
            {/* <NavLink to="/login">Login</NavLink> */}
            <NavLink to="/">Logout</NavLink>
        </nav>
    )
}

export default NavBar;