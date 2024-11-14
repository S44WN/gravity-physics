import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./AboutSection.css";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const Highlights = () => {
  const sectionRef = useRef(null);
  const textTopperRef = useRef(null);
  const imgElements = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: "50% 50%",
        end: "150% 50%",
        scrub: 2,
      },
    });

    // Image element animations
    const imagePositions = [
      { left: "10%", top: "10%" },
      { left: "70%", top: "20%" },
      { left: "20%", top: "55%" },
      { left: "50%", top: "0%" },
      { left: "50%", top: "70%" },
      { left: "75%", top: "60%" },
    ];

    imgElements.current.forEach((elem, index) => {
      tl.to(
        elem,
        {
          width: "15vw",
          height: "15vw",
          left: imagePositions[index].left,
          top: imagePositions[index].top,
        },
        "s"
      );
    });

    // Text animation
    tl.to(
      textTopperRef.current,
      {
        opacity: 1,
        scale: 1.1,
        delay: 0.2,
      },
      "s"
    );

    // Cleanup
    return () => {
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // lenis.destroy();
    };
  }, []);

  return (
    <div id="highlights" className="topper-section " ref={sectionRef}>
      <div className="text-topper d-flex-c" ref={textTopperRef}>
        <h1 className="main-heading">Our Coaching is of top quality.</h1>
        <p className="main-p">
          As an experienced physics faculty, We specialize in simplifying
          complex concepts for JEE and NEET aspirants, ensuring high success
          rates with personalized guidance and a deep focus on problem-solving
          techniques.
        </p>
        <div className="btn-p">Explore All</div>
      </div>

      <div className="img-topper">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            ref={(el) => (imgElements.current[index] = el)}
            className={`img-t-elem img-t-elem-${index + 1}`}
          >
            <img
              src={`/assets/images/highlights/image${index}.jpg`}
              alt={`Random ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// export default Highlights;
