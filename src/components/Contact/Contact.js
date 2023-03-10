import "./Contact.scss";
import ContactForm from "./ContactForm/ContactForm";
import ContactSocialCards from "./ContactSocialCards/ContactSocialCards";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Faisons connaissance</h2>
      <div className="section__subtitle">Contactez moi</div>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Coordonnées</h3>
          <ContactSocialCards />
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Envoyer un message</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
