import { faSteam, faSquareInstagram, faYoutube, faTiktok, faDiscord} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer(){
    return(
        <footer>
            <img src="./Logoer/White_UP_CombinedLogo_Horizontal.png"></img>
            <p>© Ursapunk Games AS. All rights reserved.</p>
            <ul>
                <a href='#'><FontAwesomeIcon icon={faSteam} /> </a>
                <a href='#'><FontAwesomeIcon icon={faSquareInstagram} /></a>
                <a href='#'><FontAwesomeIcon icon={faYoutube} /></a>
                <a href='#'><FontAwesomeIcon icon={faTiktok} /></a>
                <a href='#'><FontAwesomeIcon icon={faDiscord} /></a>
            </ul>
            
        </footer>
    )
}