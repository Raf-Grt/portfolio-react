import Loader from "../../Loader/Loader";

function BackendSkills() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Développement Backend</h3>
      <div className="skills__loader">
        <p className="skills__loader-annonce">
          Compétences en cours d'apprentissage
        </p>
        <Loader />
      </div>
    </div>
  );
}

export default BackendSkills;
