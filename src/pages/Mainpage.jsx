import Footer from "../components/Footer";
import Header from "../components/Header";



export default function Mainpage(){
    return(
        <main>
            <section id="logo-mainpart">
                    <img src="./placeholder/LogoCondensed.png" alt="tidewrack logo"/>
                <article>
                    <a href="https://hinkyponk.itch.io/tidewrack-demo" target="_blank">Go to Itch.io</a>
                    <a href="#">Go to steam</a>
                </article>
            </section>
            <section id="aboutgameStyle">
                <h3>About the project</h3>
                <article >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                    <img src="./stickers/Sticker5.png" alt="sticker of otter"></img>
                </article>
            </section>
                <section id="screenshotsStyle">
                    <img src="./placeholder/PageBackground.png" alt=""></img>
                    <img src="./placeholder/PageBackground.png" alt=""></img>
                    <img src="./placeholder/PageBackground.png" alt=""></img>
                </section>
                <Footer />
        </main>

        
    )
}