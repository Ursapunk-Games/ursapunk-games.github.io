import { faSteam, faSquareInstagram, faYoutube, faTiktok, faDiscord} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer(){
    return(
        <footer>
            <img src="./Logoer/White_UP_CombinedLogo_Horizontal.png"></img>
            <p>© Ursapunk Games AS. All rights reserved.</p>
            <p>
                Contact us! <a href='mailto:ursapunkgames@gmail.com'>ursapunkgames@gmail.com</a>
            </p>
            <ul>
                <a href='https://www.instagram.com/ursapunk_games/'><FontAwesomeIcon icon={faSquareInstagram} /></a>
                <a href='https://www.youtube.com/@UrsapunkGames'><FontAwesomeIcon icon={faYoutube} /></a>
                <a href='https://www.tiktok.com/@ursapunkgames'><FontAwesomeIcon icon={faTiktok} /></a>
                <a href='https://discord.gg/Anncg8ASWb'><FontAwesomeIcon icon={faDiscord} /></a>
            </ul>
            
        </footer>
    )
}