import { NavLink } from 'react-router-dom'
import './Header.css'
export const Header=()=>{
    return(
        <>
           <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/movies">Movies</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <h1 className="logo">Yt_Movies</h1>
        </div>
    </nav>
        </>
    )
}