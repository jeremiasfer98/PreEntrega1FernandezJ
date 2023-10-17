import logo from "../../img/logo.png";
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from "../header/CartWidget"



const NavBar = () => {
    return (
        <>
            <header className="menu1">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand"><img src={logo} width="150" height="150" alt="logo"/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="./categoria/buzos" className="nav-link">Buzos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="./categoria/remeras" className="nav-link">Remeras</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/categoria/gorros" className="nav-link">Gorros</Link>
                                </li>
                            </ul>
                            <CartWidget/>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default NavBar;