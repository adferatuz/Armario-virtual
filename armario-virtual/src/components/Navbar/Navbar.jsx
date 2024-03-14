import './navbar.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    let auth = false;

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
                    <li className="list-item-navbar">
                        <NavLink
                            style={({isActive})=>({
                                textDecorationLine:isActive ? "underline" : "none",
                                color: isActive ? "#1F1D21" : "#230F41",
                            })}
                            to={"/"}
                            onClick={handleToggleClick}
                            >estilos</NavLink>

                    </li>
                    <li className="list-item-navbar">
                        <NavLink
                            style={({isActive})=>({
                                textDecorationLine:isActive ? "underline" : "none",
                                color: isActive ? "#1F1D21" : "#230F41",
                            })}
                            to={"/blog"}
                            onClick={handleToggleClick}
                            >Blog</NavLink>

                    </li>
                    <li className="list-item-navbar">
                        <NavLink
                            style={({isActive})=>({
                                textDecorationLine:isActive ? "underline" : "none",
                                color: isActive ? "#1F1D21" : "#230F41",
                            })}
                            to={"/armario-virtual"}
                            onClick={handleToggleClick}
                            >Armario virtual</NavLink>
                            
                    </li>
                    <li className="list-item-navbar">
                        <NavLink
                            style={({isActive})=>({
                                textDecorationLine:isActive ? "underline" : "none",
                                color: isActive ? "#1F1D21" : "#230F41",
                            })}
                            to={"/contacto"}
                            onClick={handleToggleClick}
                            > contacto</NavLink>
                    </li>
                    <li className="list-item-navbar">
                        <NavLink
                            style={({isActive})=>({
                                textDecorationLine:isActive ? "underline" : "none",
                                color: isActive ? "#1F1D21" : "#230F41",
                            })}
                            to={"/perfil"}
                            onClick={handleToggleClick}
                            >perfil</NavLink>
                    </li>
                    <li className="list-item-navbar">
                        <NavLink
                            style={({isActive})=>({
                                textDecorationLine:isActive ? "underline" : "none",
                                color: isActive ? "#1F1D21" : "#230F41",
                            })}
                            to={"/registro"}
                            onClick={handleToggleClick}
                            >registro</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Navbar;