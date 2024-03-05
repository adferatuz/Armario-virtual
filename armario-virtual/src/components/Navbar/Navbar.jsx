import './navbar.css';
import { useState, useEffect } from 'react';

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() =>{},[]);
    const handleToggleClick = () =>{
        setIsActive((prevState)=>!prevState);
    };

    return (
        <>
                <label
                    htmlFor="burger"
                    className={`burger label ${isActive ? "burger--active" : ""}`}
                    onClick={handleToggleClick}>
                
                    <span className="active"></span>
                    <span className="active"></span>
                    <span className="active"></span>
                    

                </label>
            <nav className={`nav ${isActive ? "nav--active" : ""}`}>

                <ul className='navbar-list'>
                    <li className="list-item-navbar">Estylos</li>
                    <li className="list-item-navbar">Blog</li>
                    <li className="list-item-navbar">Armario Virtual</li>
                    <li className="list-item-navbar">Contacto</li>
                    <li className="list-item-navbar">Registro</li>
                    <li className="list-item-navbar">Log In</li>
                </ul>
            </nav>
        </>
    )
};

export default Navbar;