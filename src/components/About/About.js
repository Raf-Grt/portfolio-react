import "./About.scss";
import aboutImg from "../../assets/images/about.jpeg";
import Info from "./Info/Info";
import DownloadBtn from "./DownloadBtn/DownloadBtn";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">À propos</h2>
      <div className="section__subtitle">Présentation</div>

      <div className="about__container container grid">
        <img src={aboutImg} alt="Rafaël ESPARON" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Admis à l'ISCOD au sein du programme "Bachelor concepteur
            développeur d'applications," je suis à la recherche d'une alternance
            pour mettre mes compétences en pratique et acquérir une expérience
            professionnelle.
          </p>

          <DownloadBtn />
        </div>
      </div>
    </section>
  );
}

export default About;
