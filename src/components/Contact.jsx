import React from "react";

const Contact = () => {
  return (
    <>
      {/* Start Contact */}
      <section id="contact">
        <div className="cs-height_70 cs-height_lg_40" />
        <div className="container">
          <div
            className="cs-seciton_heading cs-style1 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <h3 className="cs-section_title cs-font_16 cs-font_14_sm cs-gradient_color">
              Contact Us
            </h3>
            <h2 className="cs-section_subtitle cs-m0 cs-font_36 cs-font_24_sm">
              Get in touch
            </h2>
          </div>
          <div className="cs-height_50 cs-height_lg_30" />
          <div className="row">
            <div className="col-lg-6">
              <form action="#">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="cs-form_field_wrap">
                      <label>Your Name</label>
                      <input type="text" className="cs-form_field" />
                    </div>
                    <div className="cs-height_30 cs-height_lg_30" />
                  </div>
                  <div className="col-lg-6">
                    <div className="cs-form_field_wrap">
                      <label>Your Email</label>
                      <input type="text" className="cs-form_field" />
                    </div>
                    <div className="cs-height_30 cs-height_lg_30" />
                  </div>
                  <div className="col-lg-12">
                    <div className="cs-form_field_wrap">
                      <label>Subject</label>
                      <input type="text" className="cs-form_field" />
                    </div>
                    <div className="cs-height_30 cs-height_lg_30" />
                  </div>
                  <div className="col-lg-12">
                    <div className="cs-form_field_wrap">
                      <label>Message</label>
                      <textarea
                        cols={30}
                        rows={5}
                        className="cs-form_field"
                        defaultValue={""}
                      />
                    </div>
                    <div className="cs-height_30 cs-height_lg_30" />
                  </div>
                  <div className="col-lg-12">
                    <button
                      className="cs-btn cs-btn_filed cs-accent_btn"
                      type="submit"
                    >
                      Submit Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cs-height_30 cs-height_lg_40" />
              <div className="cs-contact_info">
                <h2 className="cs-info_title">Contact Info</h2>
                <div className="cs-height_30 cs-height_lg_30" />
                <div className="cs-info_box">
                  <div className="cs-info_box_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--fa6-solid"
                      width="1em"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                      />
                    </svg>
                  </div>
                  <div className="cs-info_box_right">
                    <h3>Call anytime</h3>
                    <p>
                      <span className="cs-medium">Mobile:</span> +99 098 234 123
                    </p>
                    <p>
                      <span className="cs-medium">Hotline:</span> 16234
                    </p>
                  </div>
                </div>
                <div className="cs-height_20 cs-height_lg_20" />
                <div className="cs-info_box">
                  <div className="cs-info_box_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="iconify iconify--fa-solid"
                      width="1em"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7c22.4 17.4 52.1 39.5 154.1 113.6c21.1 15.4 56.7 47.8 92.2 47.6c35.7.3 72-32.8 92.3-47.6c102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4c132.7-96.3 142.8-104.7 173.4-128.7c5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9c30.6 23.9 40.7 32.4 173.4 128.7c16.8 12.2 50.2 41.8 73.4 41.4z"
                      />
                    </svg>
                  </div>
                  <div className="cs-info_box_right">
                    <h3>Email Us</h3>
                    <p>Support: support@gmail.com</p>
                    <p>
                      <span className="cs-medium">Info:</span> hey@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact */}
    </>
  );
};

export default Contact;
