import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import { Highlights } from "./components/AboutSection/AboutSection";
// import CoursesSection from "./components/CoursesSection/CoursesSection";
// import AboutSection from "./components/AboutSection";
// import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
// import Footer from "./components/Footer/Footer";
// import MobileMenu from "./components/MobileMenu/MobileMenu";
import "./App.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import TestimonialsSection from "./components/TestimonialSection/TestimonialsSection";
// import HeroScene from "./components/HeroScene/HeroScene";
import CourseSection from "./components/CourseSection/CourseSection";
import Footer from "./components/Footer/Footer";
import ContactSection from "./components/ContactSection/ContactSection";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP initialization and other animations can be added here
    gsap.registerPlugin(ScrollTrigger);

    return () => {
      lenis.destroy(); //? Clean up the Lenis instance
    };
  }, []);

  return (
    <div className="main">
      {/* <Navbar /> */}
      {/* <main> */}
      <Hero />
      <Highlights />
      {/* <h1
        style={{
          zIndex: 9999,
          marginTop: "100vh",
        }}
      >
        akjdfbaldfnalkdsnfalksnfas fjan
      </h1> */}
      {/* <Faculty /> */}
      {/* <h1>asdasd</h1> */}
      {/* <CoursesSection /> */}
      {/* <AboutSection /> */}
      {/* <TestimonialsSection /> */}
      <TestimonialsSection />
      <CourseSection />
      {/* <HeroScene /> */}
      <ContactSection />

      {/* </main> */}
      {/* <MobileMenu /> */}
      <Footer />
    </div>
  );
};

export default App;
