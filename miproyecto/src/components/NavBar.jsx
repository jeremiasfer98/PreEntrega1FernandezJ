import React from 'react'
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
        <header className="menu1">
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="../index.html"><img src={"../"} width="150" height="150" alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="../index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="productos.html">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="quienessomos.html">¿Quienes somos?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contacto.html">Contactenos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="sale.html">SALE!</a>
                    </li>
                </ul>

                <CartWidget/>
            </div>
        </div>
    </nav>
    </header>
    </>
)
}

export default NavBar
