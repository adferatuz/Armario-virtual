import './main.css';

const Main = ({children}) => {
    return(
        <>
            <section className='container-section'>
                {children}
            </section>
        </>
    )
};

export default Main;