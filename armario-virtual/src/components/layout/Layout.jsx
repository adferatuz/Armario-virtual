import './Layout.css';
import './funciones.js';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';

const Layout = ({children})=>{

    return (
        <>          
            <main className='parent'>
                <Header />  
                <Main>{children}</Main>
                <Footer />
            </main>
        </>
    )
};

export default Layout;