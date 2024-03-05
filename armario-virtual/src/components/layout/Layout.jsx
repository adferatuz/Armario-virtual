import React, {lazy, Suspense, useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
import './Layout.css';
import './funciones.js';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';

const Layout = ({children})=>{
    const location = useLocation();
    const estructuraHtml = <><Header /> <Main>{children}</Main> <Footer /> </>;

    return (                
        <main className='parent'>
            {(() => {
                if (location.pathname === "/registro" || location.pathname === "/perfil") {
                    return <Main>{children}</Main>;
                } else if ( location.pathname === "/" || location.pathname === "/blog" || location.pathname === "/armario-virtual" || location.pathname === "/contacto") {
                    return estructuraHtml;
                } else {
                    return null;
                }
            })()}
        </main>
        
    )
};

export default Layout;