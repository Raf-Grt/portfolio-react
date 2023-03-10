function ServiceModal({
  closeModal,
  modal: { title, img, description, info },
}) {
  const modalInfo = info.map((info) => (
    <li className="services__modal-service">
      <i className="uil uil-check-circle services__modal-icon"></i>
      <p className="services__modal-info">{info}</p>
    </li>
  ));

  function handleClick(e) {
    e.stopPropagation();
  }
  return (
    <div className="services__modal" onClick={closeModal}>
      <div className="services__modal-content" onClick={handleClick}>
        <i
          className="uil uil-times services__modal-close"
          onClick={closeModal}
        ></i>

        <h3 className="services__modal-title">{title}</h3>
        <a
          href={img}
          className="services__modal-description"
          target="_blank"
          rel="noreferrer"
        >
          {description}
        </a>

        <ul className="services__modal-services grid">{modalInfo}</ul>
      </div>
    </div>
  );
}

export default ServiceModal;
