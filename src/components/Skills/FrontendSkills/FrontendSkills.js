import frontendData from "../../../data/skillsFrontendData";

function FrontendSkill() {
  const frontData = frontendData.map((skill) => (
    <div className="skills__data" key={skill._id}>
      <i className="bx bx-badge-check"></i>

      <div>
        <h3 className="skills__name">{skill.title}</h3>
        <span className="skills__level">{skill.level}</span>
      </div>
    </div>
  ));
  return (
    <div className="skills__content">
      <h3 className="skills__title">Développement Frontend</h3>

      <div className="skills__box">
        <div className="skills__group">{frontData}</div>
      </div>
    </div>
  );
}

export default FrontendSkill;
