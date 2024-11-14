import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import "./Navbar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        menuRef.current,
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [menuOpen]);

  return (
    <nav>
      <div className="nav-img">
        <img src="assets/images/logo-header.png" alt="Logo" />
      </div>

      <div id="nav-part2" className="desktop-nav">
        <h4>
          <a href="#">Home</a>
        </h4>
        <h4>
          <a href="#">Courses</a>
        </h4>
        <h4>
          <a href="#">Contact</a>
        </h4>
      </div>

      <h3 className="menu-button" onClick={toggleMenu}>
        Menu
      </h3>

      <div
        ref={menuRef}
        className="mobile-menu"
        style={{ display: menuOpen ? "flex" : "none" }}
      >
        <div className="menu-content">
          <h4>
            <a href="#" onClick={toggleMenu}>
              Home
            </a>
          </h4>
          <h4>
            <a href="#" onClick={toggleMenu}>
              Courses
            </a>
          </h4>
          <h4>
            <a href="#" onClick={toggleMenu}>
              Contact
            </a>
          </h4>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
