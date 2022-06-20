import Navbar from "./component/Navbar/Navbar";
import "./App.css"
import Intro from "./component/Intro/Intro";
import Services from "./component/Services/Services";
import Experience from "./component/Experience/Experience";
import Works from "./component/Work/Works";
import Portfolio from "./component/Portfolio/Portfolio";
import Textimonial from "./component/Textimonial/Testimonial";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <Services />
        <Experience />
        <Works />
        <Portfolio />
        <Textimonial />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
