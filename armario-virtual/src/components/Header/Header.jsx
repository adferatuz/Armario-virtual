import './header.css';
import Navbar from '../Navbar/Navbar.jsx';
import Logo from '../logo/Logo.jsx';
import Title from '../Title&Slogan/Title.jsx';

const Header =()=>{
    return (
        <>
            <header className='container-header'>
                <Logo />                
                <Title />
                <Navbar />                
            </header>
        </>
    )
};

export default Header;