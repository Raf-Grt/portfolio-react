import educationData from "../../../data/educationData";
import EducationElement from "./EducationElement/EducationElement";
import EducationElementReverse from "./EducationElement/EducationElementReverse";

function Education() {
  const educationContent = educationData.map((el, i) =>
    i % 2 === 0 ? (
      <EducationElement key={el._id} {...el} />
    ) : (
      <EducationElementReverse key={el._id} {...el} />
    )
  );
  return <div className="qualification__content">{educationContent}</div>;
}

export default Education;
