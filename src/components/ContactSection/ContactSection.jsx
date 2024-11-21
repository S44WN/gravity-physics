import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h3 className="section__title">contact us</h3>
        <div className="contact__container contact__grid">
          <div className="contact__content">
            <div className="contact__info">
              <div className="contact__card">
                <div>
                  <i className="bx bx-mail-send contact__card-icon"></i>
                  <span className="contact__card-data">
                    gravityphysics@gmail.com
                  </span>
                  <a
                    href="mailto:gravityphysics@gmail.com"
                    target="_blank"
                    className="contact__button"
                  >
                    Mail us
                    <i className="bx bx-right-arrow contact__button-icon"></i>
                  </a>
                </div>
              </div>

              <div className="contact__card">
                <div>
                  <i className="bx bxl-whatsapp contact__card-icon"></i>
                  <span className="contact__card-data">+91 9334369164</span>

                  <a
                    href="https://api.whatsapp.com/send?phone=+919334369164&text=Hey there!"
                    target="_blank"
                    className="contact__button"
                  >
                    Chat with us
                    <i className="bx bx-right-arrow contact__button-icon"></i>
                  </a>
                </div>
              </div>

              <div className="contact__card">
                <div>
                  <i className="bx bxl-youtube contact__card-icon"></i>

                  <span className="contact__card-data">YouTube</span>
                  <a
                    href="https://www.youtube.com/@gravity.physics"
                    target="_blank"
                    className="contact__button"
                  >
                    Subscribe to us
                    <i className="bx bx-right-arrow contact__button-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__content">
            {/* <h3 className="contact__title contact__title-form">
              Write Me your Message
            </h3> */}

            <form action="" className="contact__form">
              <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="contact__form-input"
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag">Mail</label>
                <input
                  type="text"
                  placeholder="Enter email"
                  className="contact__form-input"
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Message</label>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Write your Message"
                  className="contact__form-input"
                ></textarea>
              </div>

              <button className="contact__form-button">Send Message</button>
            </form>
          </div>

          <div className="contact__content">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d449.7567172919754!2d85.1743268!3d25.6031305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58b93b236cd9%3A0xb1134e01732b61e6!2sEr.S.Kumar%20Gravity%20Physics%20Classes!5e0!3m2!1sen!2sin!4v1732120244508!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
