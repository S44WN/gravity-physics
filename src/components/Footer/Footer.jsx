const Footer = () => {
  return (
    <div id="footer" className="container">
      <div id="footer-div"></div>
      <div className="footer-img">
        <img src="./assets/images/logo-main.png" alt="footer logo" />
      </div>
      <div className="footer-details">
        <div className="footer-links">
          <i className="bx bxs-phone"></i>
          <a href="#">+91 4568956564</a>
        </div>
        <div className="footer-links">
          <i className="bx bxs-envelope"></i>
          <a href="#">gravityphysics@gmial.com</a>
        </div>
        <div className="footer-links">
          <i className="bx bxs-map"></i>
          <a href="#"> Bhagwatnagar, Patna, 800026</a>
        </div>
      </div>
      <div id="footer-bottom"></div>
    </div>
  );
};

export default Footer;
