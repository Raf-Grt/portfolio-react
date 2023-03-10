function ExperienceElement({ title, subtitle, calendar }) {
  return (
    <div className="qualification__data">
      <div>
        <h3 className="qualification__title"> {title} </h3>
        <span className="qualification__subtitle"> {subtitle} </span>
        <div className="qualification__calender">
          <i className="uil uil-calendar-alt"></i> {calendar}
        </div>
      </div>

      <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
      </div>

      <div></div>
    </div>
  );
}

export default ExperienceElement;
