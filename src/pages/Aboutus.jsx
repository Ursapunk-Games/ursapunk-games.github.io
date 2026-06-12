import Footer from "../components/Footer";


export default function Aboutus(){
    return(
        <>
        <section id="profile-page">
            <h1>The team</h1>
            <article className="profile-card">
                <img src="./theTeampics/Marthe.jpg" alt="picture of Marthe Ø. Skåra"></img>
                <h3>Marthe Ø. Skåra</h3>
                <p>Co-Founder & Project Lead</p>
            </article>
            <article className="profile-card">
                <img src="./theTeampics/Bjorn.jpg" alt="picture of Bjørn Haugen"></img>
                <h3>Bjørn Haugen</h3>
                <p> Co-Founder & Tech Lead</p>
            </article>
            <article className="profile-card">
                <img src="./theTeampics/Ida.jpg" alt="Picture of Ida H. Pettersen"></img>
                <h3>Ida H. Pettersen</h3>
                <p>Co-Founder & General Artist</p>
            </article>
            <article className="profile-card">
                <img src="./theTeampics/Hanna.jpg" alt="Picture of Hanna A. Lande"></img>
                <h3>Hanna A. Lande</h3>
                <p>Character Artist</p>
            </article>
            <article className="profile-card">
                <img src="./theTeampics/Sindre.png" alt="Picture of Sindre Arnøy"></img>
                <h3>Sindre Arnøy</h3>
                <p>Enviroment Artist</p>
            </article>
            <article className="profile-card">
                <img src="./theTeampics/Sandra.png" alt="Picture of Sandra T. Kivijervi"></img>
                <h3>Sandra T. Kivijervi</h3>
                <p>Composer & SFX</p>
            </article>
        </section>
        <section id="aboutgameStyle">
                <h3>About Us</h3>
            <article >  
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <img src="./stickers/Sticker7.png" alt="sticker of seagull"></img>
            </article>
        </section>
        <Footer />
        
        </>
    )
}