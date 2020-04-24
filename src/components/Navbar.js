import React, { Component } from "react";
import { Link } from "react-scroll";

import styled from "styled-components";

const Navigation = styled.header`
    overflow: hidden;
    position: absolute;
    right: 0;
    margin: 0;
    padding: 0;
 
    .menu-mobile {
        display: none;
    }

    .nav-items {
        overflow: hidden;
        margin-top: 50px;        
    }

    .nav-item {
        display: inline;
        color: white;
        margin-right: 7vw;

        text-transform: uppercase;
        letter-spacing: 4px;
        font-size: 20px;        

        text-decoration: none;
        background-image: linear-gradient(currentColor, currentColor);
        background-position: 50% 100%;
        background-repeat: no-repeat;
        background-size: 0% 2px;
        transition: background-size 0.5s;
    }

    .nav-item:hover {
        font-weight: bold;
        cursor: pointer;
        background-size: 100% 2px;
    }

    .nav-items-collapsed{
        display: none;
    }
 

  @media only screen and (max-width: 767px) {
        position: relative;

        .nav-items{
            display: none;
        }   

        .menu-mobile{
            height: 100%;
            display: flex;
        }
        
        .icono{
            position: relative;
            margin: 5vh 0 0 5vw;
            width:40px;
            height:40px;
        }

        .nav-items-collapsed {
            margin-top: 10vh;

            &.is-expanded {
                min-height: 70vh;
                display: flex;
                flex-direction: column;                        
                text-align: center;
                font-size: 40px;
                animation: moveToLeft 1s;
            }
        }

        .nav-item{
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 15vh;
        }
    }

  @keyframes moveToLeft {
    from {
        transform: translateX(120px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
    }

    .line {
        position: absolute;
        height: 5px;
        width: 100%;
        background: white;
        border-radius: 10px;
        transition: all cubic-bezier(0.25, 0.1, 0.28, 1.54) 0.32s;
    }

    .line01 {
        top:19%;
    }

    .line02 {
        top:49%;
        left: 40%;
    }

    .line03 {
        top:79%;
    }

    .menu.close .line01 {
        transform:rotate(45deg);
        top:49%;
    }

    .menu.close .line02, .menu.close .line03 {
        transform:rotate(-45deg);
        top:49%;
    }
    .menu.close .line02 {
        opacity: 0;
    }
`;


class Navbar extends Component {

    render() {
        
        if (this.props.data) {
            var links_responsive = this.props.data.map(l => {
                return <li className="nav-item">
                    <Link
                        activeClass="active"
                        to={l.link}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={e => this.props.handleToggle(e)}
                    >
                        {l.name}
                    </Link>
                </li>
            });

            var links = this.props.data.map(l => {
                return <li className="nav-item">
                    <Link
                        activeClass="active"
                        to={l.link}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        {l.name}
                    </Link>
                </li>
            });
        }

        const isExpanded = this.props.value;

        return (
            <Navigation>
                <div className="menu-mobile">
                    <div className={`icono ${isExpanded ?
                        "menu close" : "menu"}`}
                        onClick={e => this.props.handleToggle(e)}>
                        <span class="line line01"></span>
                        <span class="line line02"></span>
                        <span class="line line03"></span>
                    </div>


                   <ul className={`nav-items-collapsed ${isExpanded ? "is-expanded" : ""}`}>{links_responsive}</ul>
                </div>

                <ul className="nav-items">{links}</ul>

            </Navigation>
        );
    }
}

export default Navbar;
