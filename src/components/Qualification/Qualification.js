import { useState } from "react";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import "./Qualification.scss";

function Qualification() {
  const [toggle, setToggle] = useState("education");

  function toggleDisplay(txt) {
    setToggle(txt);
  }
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Parcours</h2>
      <div className="section__subtitle">Mon parcours personnel</div>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            onClick={() => toggleDisplay("education")}
            className="qualification__button button--flex"
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Enseignement
          </div>

          <div
            onClick={() => toggleDisplay("experience")}
            className="qualification__button button--flex"
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {toggle === "education" && <Education />}
          {toggle === "experience" && <Experience />}
        </div>
      </div>
    </section>
  );
}

export default Qualification;
