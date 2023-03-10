import Data from "./Data/Data";
import "./Homepage.scss";
import Social from "./Social/Social";
import ScrollDown from "./ScrollDown/ScrollDown";

function Homepage() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
}

export default Homepage;
