import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Qualification from "./components/Qualification/Qualification";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Homepage />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
