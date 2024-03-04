import './logo.css';
import imgLogo from '../../../public/logo.png';

const Logo = () => {
    return (
        <>
            <div className='logo'>
                    <img 
                        src={imgLogo} 
                        alt="Esta es una imagen de un logo"
                        className='img-logo'/>
                </div>
        
        </>
    )
};

export default Logo;