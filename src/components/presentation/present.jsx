import { Component } from "react";
import "./present.css";
import Aos from "aos";
import "aos/dist/aos.css";

export class Presentation extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }
  render() {
    return (
      <section id="presentation">
        <div className="div_pres ">
          <h1 className="pres_h">PRESENTATION</h1>
          <hr />
          {/* <p data-aos="fade-up">
            Je suis <b style={{ color: "gray" }}> Walid Chahidane </b>j'ai 22
            ans,je suis passioné par la programmation et le
            <b style={{ color: "gray" }}> Developpement Web</b> ,actuellement
            étudiant à la 3WA Academy maroc.
          </p>
          <p data-aos="fade-up">
            Je conçois et réalise des sites web du cahier des charges à la mise
            en ligne. Je developpe aussi en <b style={{ color: "gray" }}>PHP/LARAVEL</b>, ce qui me permet de développer
            des sites web complets.
          </p>
          <p data-aos="fade-up">J'ai quelques projets intéressants à voir. <a href="#projects">ici</a></p> */}
          <p data-aos="fade-up">
            En tant que développeur web full stack, je maîtrise de nombreux
            compétencesallant de la création d'interfaces captivantes en HTML,
            CSS et JavaScript, jusqu'à l'utilisation agile de ReactJS et
            Next.js, pour des expériences utilisateur réactives et fluides. Mon
            expertise en Back-End s'étend à Node JS et Express JS aussi que PHP
            et Laravel. J'ai également une bonne profonde connaissance de
            MongoDB et My SQL pour la gestion des données.
          </p>
        </div>
      </section>
    );
  }
}
