import Footer from "../components/Footer";
import Header from "../components/Header";



export default function Mainpage(){
    return(
        <main>
            <section id="logo-mainpart">
                    <img src="./placeholder/LogoCondensed.png" alt="Tidewrack logo"/>
                <article>
                    <a href="https://hinkyponk.itch.io/tidewrack-demo" target="_blank">Go to Itch.io</a>
                </article>
            </section>
            <section id="aboutgameStyle">
                <h3>About the project</h3>
                <article >
                    <p>Tidewrack is a cozy third-person exploration game where you play as a lost puffling, swept away by a fierce storm and searching for a way back home. Built in Unreal Engine 5, Tidewrack blends soft, stylized visuals with relaxing gameplay to create a soothing seaside adventure.</p>
                    <img src="./stickers/Sticker5.png" alt="sticker of otter"></img>
                </article>
            </section>
                <section id="screenshotsStyle">
                    <img src="./screenshots/the_beach.png" alt="Screenshot of the beach area in Tidewrack."></img>
                    <img src="./screenshots/lundi_and_seal_swimming.png" alt="Screenshot of Lundi and Seal swimming together in Tidewrack."></img>
                    <img src="./screenshots/the_lighthouse.png" alt="Screenshot of the lighthouse and docks in Tidewrack."></img>
                </section>
                <Footer />
        </main>

        
    )
}