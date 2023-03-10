import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactBtn from "./ContactBtn/ContactBtn";
import ContactFormModal from "./ContactFormModal/ContactFormModal";

function ContactForm() {
  /* ========== Modal ========== */
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  /* ========== Form Submit Handler ========== */
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m02fgqh",
        "template_pzjwl92",
        form.current,
        "GkEC3e6B2RxvtrfWx"
      )
      .then(
        function (response) {
          setTitle("Votre message a bien été envoyé");
          setDescription(
            "Merci pour votre message, je vous recontacte au plus vite"
          );
          setIsVisible(true);
        },
        function (error) {
          setTitle("Oops il y a eu un erreur");
          setDescription(
            "Merci de bien vouloir réessayer dans quelques minutes"
          );
          setIsVisible(true);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <div className="contact__form-div">
          <label className="contact__form-tag">Nom</label>
          <input
            type="text"
            name="name"
            className="contact__form-input"
            placeholder="Nom"
            required
          />
        </div>

        <div className="contact__form-div">
          <label className="contact__form-tag">Mail</label>
          <input
            type="email"
            name="email"
            className="contact__form-input"
            placeholder="Email"
            required
          />
        </div>

        <div className="contact__form-div contact__form-area">
          <label className="contact__form-tag">Message</label>
          <textarea
            name="project"
            cols="30"
            rows="10"
            className="contact__form-input"
            placeholder="Contenu du message"
            required
          ></textarea>
        </div>

        <ContactBtn />
      </form>

      {title && description && isVisible && (
        <ContactFormModal
          title={title}
          description={description}
          closeModal={() => setIsVisible(false)}
        />
      )}
    </>
  );
}

export default ContactForm;
