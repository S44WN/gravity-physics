import HeroScene from "../HeroScene/HeroScene";
import NavBar from "../Navbar/Navbar";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <NavBar />
          {/* <nav>
            <div className="nav-img">
              <img src=" assets/images/logo-header.png" alt="" />
            </div>

            <div id="nav-part2">
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
            <h3>Menu</h3>
          </nav> */}
          <div className="center">
            <div className="description">
              <p>
                Join our JEE and NEET Physics classes for unparalleled
                problem-solving tricks. Our unique techniques ensure top ranks
                and success like no other!
              </p>

              <p
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  paddingTop: "1rem",
                }}
              >
                By Er. S Kumar
              </p>
            </div>
            <div className="hero-img">
              <img src="assets/images/logo-main.png" alt="" />
            </div>
          </div>
          <div id="hero-shape">
            {/* <!-- <div id="hero-1"></div> --> */}
            <div id="hero-2"></div>
            <div id="hero-3"></div>
          </div>
          <HeroScene />
          {/* <video autoPlay loop muted src="./assets/videos/video.mp4"></video> */}
        </div>
      </div>

      <div id="page2">
        <div id="moving-text">
          <div className="con">
            <h1>NEET</h1>
            <div id="gola"></div>
            <h1>JEE</h1>
            <div id="gola"></div>
            <h1>11th and 12th</h1>
            <div id="gola"></div>
          </div>
          <div className="con">
            <h1>NEET</h1>
            <div id="gola"></div>
            <h1>JEE</h1>
            <div id="gola"></div>
            <h1>11th and 12th</h1>
            <div id="gola"></div>
          </div>
          <div className="con">
            <h1>NEET</h1>
            <div id="gola"></div>
            <h1>JEE</h1>
            <div id="gola"></div>
            <h1>11th and 12th</h1>
            <div id="gola"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
