import { useEffect, useState } from "react";
import "./Header.scss";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClickToggleMenu() {
    setShowMenu((toggle) => !toggle);
  }

  return (
    <header className={`header ${isVisible && "header-scroll"}`}>
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Esparon
        </a>

        <div className={`nav__menu ${showMenu && "show-menu"}`}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>
                Accueil
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>À Propos
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>
                Compétences
              </a>
            </li>

            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Parcours
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>

          <i
            onClick={handleClickToggleMenu}
            className="uil uil-times nav__close"
          ></i>
        </div>

        <div onClick={handleClickToggleMenu} className="nav__toggle">
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
