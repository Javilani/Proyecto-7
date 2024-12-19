import gatoRegalon from "../assets/img/gato-regaloneando.jpeg"
import personaYGato from "../assets/img/persona-gato.jpg"

export const About = () => {
    return (
        <>
            <section className="section-about">
                <img src={gatoRegalon} alt="Gato y humano" className="img-about" />
                <div className="about-text">
                    <h1>Sobre nosotros</h1>
                    <p className="about-text__p">En esta fundación, trabajamos con dedicación y amor para rescatar, rehabilitar y reubicar gatos en situaciones de abandono o peligro. Nuestro compromiso es brindarles un refugio temporal seguro donde puedan recibir atención médica, alimento y mucho cariño mientras encontramos familias responsables que les ofrezcan un hogar permanente. Nos enfocamos en promover la tenencia responsable, la importancia de la esterilización y el respeto hacia estos maravillosos compañeros.</p>
                </div>
            </section>

            <div className="mis-vis">
                <h2>Misión</h2>
                <p>Promover el bienestar y la protección de los gatos mediante el rescate, rehabilitación y reubicación responsable. Fomentamos la educación sobre la tenencia responsable, la esterilización y el respeto hacia los animales, construyendo una comunidad más consciente y comprometida con el cuidado de los gatos.</p>
                <br />
                <h2>Visión</h2>
                <p>Ser una organización líder en el rescate y cuidado de gatos, logrando que cada uno encuentre un hogar amoroso y definitivo. Aspiramos a un mundo donde ningún gato sufra abandono, recibiendo la atención y el respeto que merecen en una sociedad sensibilizada hacia su bienestar.</p>
                <br />
                <div className="nuestra-historia">
                    <div>
                        <h2>Nuestra Historia</h2>
                        <p>La Fundación para Gatitos nació en 2015, cuando un pequeño grupo de amantes de los animales decidió unirse para enfrentar el creciente número de gatos en situación de abandono en nuestra comunidad. Comenzamos rescatando gatitos de las calles, brindándoles atención médica, alimento y, sobre todo, un hogar lleno de amor. Con el paso de los años, nuestra fundación ha crecido gracias al apoyo de voluntarios, donantes y familias adoptivas que comparten nuestra pasión por proteger y cuidar a los felinos. Hoy, no solo continuamos con nuestra misión de rescate y adopción, sino que también promovemos la educación sobre el bienestar animal y trabajamos en campañas de esterilización para prevenir el abandono. Cada día nos esforzamos por construir un futuro mejor para nuestros amigos de cuatro patas.</p>
                    </div>
                    <img src={personaYGato} alt="persona con su gato" className="img-story" />
                </div>

            </div>
        </>
    )
}