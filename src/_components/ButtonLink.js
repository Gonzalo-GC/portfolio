import React from 'react';
import { Link } from 'react-scroll';

export default function ButtonLink() {

    return (
        <div class="button-link">
            <Link
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
            >
                <div className="container">
                    <div className="bg"></div>
                    <div className="button">
                    <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    </div>
                </div>
            </Link>
        </div>
    );
}


