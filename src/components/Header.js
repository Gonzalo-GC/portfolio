import React, { Component } from "react";
import Navbar from './Navbar';
import data from '../data';

const description = data.description;
const socialList = data.social;
const pagesList = data.pages;


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }

    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }

    render() {

        const isExpanded = this.state.isExpanded;


        var social = socialList.map(s => {
            return <a href={s.url} target={s.target} rel={s.rel}> {s.name} /</a>
        })

        return (
            <section id="header">
                <div class="header">
                    <Navbar
                        data={pagesList}
                        value={this.state.isExpanded}
                        handleToggle={this.handleToggle.bind(this)}
                    />

                    <div className={`${isExpanded ? "welcome-responsive" : "welcome"}`}>
                        <h1>{description}</h1>
                        <div class="social-media">
                            <h2>
                                {social}
                            </h2>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Header;
