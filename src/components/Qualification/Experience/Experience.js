import experienceData from "../../../data/experienceData";
import ExperienceElement from "./ExperienceElement/ExperienceElement";
import ExperienceElementReverse from "./ExperienceElement/ExperienceElementReverse";

function Experience() {
  const experienceContent = experienceData.map((el, i) =>
    i % 2 === 0 ? (
      <ExperienceElement key={el._id} {...el} />
    ) : (
      <ExperienceElementReverse key={el._id} {...el} />
    )
  );
  return <div className="qualification__content">{experienceContent}</div>;
}

export default Experience;
