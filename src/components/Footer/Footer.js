import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Esparon</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              À Propos
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Compétences
            </a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">
              Parcours
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/rafaël-esparon-959913264/"
            rel="noreferrer"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/Raf-Grt"
            rel="noreferrer"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
