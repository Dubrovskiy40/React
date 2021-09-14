import './module.css'

const Main = ({title, person}) => {
    return(
        <div className='red'>
            <h1>{title}</h1>
            <p>Привет, {person}!</p>
        </div>
    )
};

export default Main;