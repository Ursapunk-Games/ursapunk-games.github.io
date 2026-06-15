import Footer from "../components/Footer";


export default function Aboutus(){
    return(
        <>
        <section id="profile-page">
            <h1>The Team</h1>
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
                <p>Environment Artist</p>
            </article>
            <article className="profile-card">
                <img src="./theTeampics/Sandra.png" alt="Picture of Sandra T. Kivijervi"></img>
                <h3>Sandra T. Kivijervi</h3>
                <p>Composer</p>
            </article>
        </section>
        <section id="aboutgameStyle">
                <h3>About Us</h3>
            <article >  
                <p>We’re a small, core team of three founders brought together by a love of cozy, hand-made games. Around us is a talented group of collaborators who help bring Tidewrack's shores, creatures and soundscape to life.</p>
                <img src="./stickers/Sticker7.png" alt="sticker of seagull"></img>
            </article>
        </section>
        <Footer />
        
        </>
    )
}