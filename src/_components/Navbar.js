import React from "react";
import { Link } from "react-scroll";
import "../_styles/NavBar.scss";

const Navbar = ({ data, value, handleToggle }) => {
    
    const links = data.map(l => {
        return <li className="nav-item">
            <Link
                activeClass="active"
                to={l.link}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={value ? handleToggle : undefined}
            >
                {l.name}
            </Link>
        </li>
    });    
    
    return (
        <div>
            <div className={`menu-icon ${value ?
                "close" : ""}`}
                onClick={handleToggle}>
                <span className="line line01"></span>
                <span className="line line02"></span>
                <span className="line line03"></span>
            </div>
            <ul className={`menu-links ${value ? "expanded" : "collapsed"}`}>{links}</ul>
        </div>        
    );
};

export default Navbar;
