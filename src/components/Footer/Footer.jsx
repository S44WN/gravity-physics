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
          <a
            href="https://api.whatsapp.com/send?phone=+919334369164&text=Hey there!"
            target="_blank"
          >
            +91 9334369164
          </a>
        </div>
        <div className="footer-links">
          <i className="bx bxs-envelope"></i>
          <a href="mailto:gravityphysics@gmail.com" target="_blank">
            gravityphysics@gmail.com
          </a>
        </div>
        <div className="footer-links">
          <i className="bx bxs-map"></i>
          <a href="https://maps.app.goo.gl/wV6YLdJoEwqAqg4C7" target="_blank">
            Bhagwatnagar, Patna, 800026
          </a>
        </div>
      </div>
      <div id="footer-bottom"></div>
    </div>
  );
};

export default Footer;
