import "./Services.scss";
import servicesData from "../../data/serviceData.js";
import ServiceContent from "./ServiceContent/ServiceContent";

function Services() {
  const services = servicesData.map((s) => (
    <ServiceContent key={s._id} {...s} modal={s.modal} />
  ));
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Plus de précisions</h2>
      <div className="section__subtitle">
        Qu'est-ce-que je sais faire exactement ?
      </div>

      <div className="services__container container grid">{services}</div>
    </section>
  );
}

export default Services;
