import './style.css'


const Header = ({title, paragraph}) => {
    return(
        <div className='green'>
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </div>
    ) 
};

export default Header;