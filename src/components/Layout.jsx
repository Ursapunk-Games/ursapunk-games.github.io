import Header from "./header"
import Mainpage from "../pages/Mainpage"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import { useState } from "react"
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Layout({children}){

    const [hamburgermeny, setHamburgermeny] =useState(false);
    const toggleMenu = () => {
        setHamburgermeny((open) => !open)

        //  tutorial used to help with the menu https://www.youtube.com/watch?v=smhpMQQmNRI&t=97s
        // Sebastian Persson
    };
    
    return(
        <>
        <div className="header">
            
            <Link to="/"><img src="./Logoer/White_UP_CombinedLogo_Horizontal.png"></img></Link>
            <ul>
            <li className="header-nav-trigger" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </li>
            <li className={`header-nav ${hamburgermeny ? "is-open" : "" }`}>
                <Link to="/">Tidewrack</Link>
                <a href="https://drive.google.com/drive/folders/1pfaZUY1J67pG78gvErZgjzmFXmyJK-ec?usp=sharing" target="_blank">Press kit</a>
                <Link to="/aboutus">About us</Link>
            </li>
            </ul>
        </div>
        {children}
        </>
    )
}