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
                <div class="container">
                    <div class="bg"></div>
                    <div class="button">
                        <i class="fa fa-chevron-up" aria-hidden="true"></i>
                    </div>
                </div>
            </Link>
        </div>
    );
}


