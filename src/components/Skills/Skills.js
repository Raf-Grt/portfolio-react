import BackendSkills from "./BackendSkills/BackendSkills";
import FrontendSkill from "./FrontendSkills/FrontendSkills";
import "./Skills.scss";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Compétences</h2>
      <div className="section__subtitle">Mes connaissances techniques</div>

      <div className="skills__container container grid">
        <FrontendSkill />
        <BackendSkills />
      </div>
    </section>
  );
}

export default Skills;
