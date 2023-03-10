function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-user about__icon"></i>

        <h3 className="about__title">Âge</h3>
        <span className="about__subtitle">23 ans</span>
      </div>

      <div className="about__box">
        <i className="bx bxs-hourglass about__icon"></i>

        <h3 className="about__title">Alternance</h3>
        <span className="about__subtitle">12 mois</span>
      </div>

      <div className="about__box">
        <i className="bx bxs-school  about__icon"></i>

        <h3 className="about__title">École</h3>
        <span className="about__subtitle">ISCOD</span>
      </div>
    </div>
  );
}

export default Info;
