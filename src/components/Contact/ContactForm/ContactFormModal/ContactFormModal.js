function ContactFormModal({ title, description, closeModal }) {
  function handleClick(e) {
    e.stopPropagation();
  }
  return (
    <div className="contact__modal" onClick={closeModal}>
      <div className="contact__modal-content" onClick={handleClick}>
        <i
          className="uil uil-times services__modal-close"
          onClick={closeModal}
        ></i>
        <h3 className="contact__modal-title">{title}</h3>
        <p className="contact__modal-description">{description}</p>
      </div>
    </div>
  );
}

export default ContactFormModal;
