import { NavLink } from "react-router-dom"
import './Header.css'
export const Header=()=>{
    return (
        <nav className="navbar">
<div className="navbar-container container">
    <input type="checkbox" name="" id=""/>
    <div className="hamburger-lines">
        <span className="line line1"></span>
        <span className="line line2"></span>
        <span className="line line3"></span>
    </div>
    <ul className="menu-items">
    <NavLink to="/">React TanstackQuery</NavLink>
        <li><NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/trad">Fetchold</NavLink></li>
        <li> <NavLink to="/rq">Fetrq</NavLink></li>
        <li> <NavLink to="/infinite">Infinite_Scroll</NavLink></li>
    </ul>

</div>
</nav>
    )
}

