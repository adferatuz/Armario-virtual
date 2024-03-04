import './navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
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