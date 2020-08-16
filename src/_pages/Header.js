import React, { useState } from "react";
import Navbar from '../_components/Navbar';
import { myInformation } from '../_config/myInformation';
import { utilities } from '../_config/utilities';
import "../_styles/Header.scss";

const Header = () =>  {
    const [isExpanded, setIsExpanded] = useState(false);  

    return (
        <section id="header">
            <div className="header">
                <Navbar
                    data={utilities.PAGES}
                    value={isExpanded}
                    handleToggle={() => setIsExpanded(!isExpanded)}
                />
                <div className={`${isExpanded ? "welcome-responsive" : "welcome"}`}>
                    <div className="typewriter">
                        <h1>Hello,</h1>
                    </div>        
                    <h1>{myInformation.WELCOME}</h1>                                                                                                                  
                </div>
            </div>
        </section>
    );
    
};

export default Header;
