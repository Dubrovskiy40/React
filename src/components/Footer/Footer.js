import { BlueDiv } from "./constantsCSS";

const Footer = ({title, info}) => {
    return(
        <BlueDiv>
            <h1>{title}</h1>
            <ul>
                <li>Город: {info.city}</li>
                <li>Возраст: {info.age}</li>
                <li>Профессия: {info.speciality}</li>
            </ul>
        </BlueDiv>
    )
};

export default Footer;