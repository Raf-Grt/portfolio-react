import { useEffect, useState } from "react";
import "./ScrollUp.scss";

function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 560) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <button
      href="#home"
      className={`scrollup ${isVisible && "show-scroll"}`}
      onClick={handleClick}
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  );
}

export default ScrollUp;
