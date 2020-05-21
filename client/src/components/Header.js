import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className="masthead text-center text-white">
                <div className="masthead-content">
                    <div className="container">
                        <h1 className="masthead-heading mb-0">Lili</h1>
                        <h2 className="masthead-subheading mb-0">Tu salud. Simple, conmigo.</h2>
                        <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">Únete</a>
                    </div>
                </div>
                <div className="bg-circle-1 bg-circle"/>
                <div className="bg-circle-2 bg-circle"/>
                <div className="bg-circle-3 bg-circle"/>
                <div className="bg-circle-4 bg-circle"/>
            </header>
        )
    }
}

export default (Header);