function ContactSocialCards() {
  return (
    <>
      <div className="contact__info">
        <div className="contact__card">
          <i className="bx bx-mail-send contact__card-icon"></i>

          <h3 className="contact__card-title">Email</h3>
          <span className="contact__card-data">rafael.esparon@gmail.com</span>

          <a href="mailto:rafael.esparon@gmail.com" className="contact__button">
            Envoyer un mail{" "}
            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
          </a>
        </div>

        <div className="contact__card">
          <i className="bx bxl-whatsapp contact__card-icon"></i>

          <h3 className="contact__card-title">WhatsApp</h3>
          <span className="contact__card-data">+33 620 49 66 82</span>

          <a
            href="https://wa.me/33620496682"
            className="contact__button"
            target="_blank"
            rel="noreferrer"
          >
            Contacter sur WhatsApp{" "}
            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
          </a>
        </div>

        <div className="contact__card">
          <i className="bx bxl-messenger contact__card-icon"></i>

          <h3 className="contact__card-title">Messenger</h3>
          <span className="contact__card-data">Rafaël ESPARON</span>

          <a
            href="https://m.me/100006644522471/"
            className="contact__button"
            rel="noreferrer"
          >
            Contacter sur Messenger{" "}
            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default ContactSocialCards;
