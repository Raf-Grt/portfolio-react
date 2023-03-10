import { useState } from "react";
import ServiceModal from "./ServiceModal/ServiceModal";

function ServiceContent({ title, icon, modal }) {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div className="services__content">
      <div>
        <i className={`${icon} services__icon`}></i>
        <h3
          className="services__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>

      <span onClick={() => setToggleModal(true)} className="services__button">
        En savoir plus
        <i className="uil uil-arrow-right services__button-icon"></i>
      </span>

      {toggleModal && (
        <ServiceModal closeModal={() => setToggleModal(false)} modal={modal} />
      )}
    </div>
  );
}

export default ServiceContent;
