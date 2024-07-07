import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/cartWidget";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#" className="Logo"><h1>Tienda Hola Mundo</h1></a>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
                <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
                <li><Link className="menu-link" to="/productos">Productos</Link></li>
                <li><Link className="menu-link" to="/productos/pantalones">Pantalones</Link></li>
                <li><Link className="menu-link" to="/productos/remeras">Remeras</Link></li>
                <li><Link className="menu-link" to="/productos/sweaters">Sweaters</Link></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default Navbar