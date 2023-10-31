import React from "react";

const About = () => {
  return (
    <>
      {/* Start About */}
      <section id="about">
        <div className="cs-height_100 cs-height_lg_70" />
        <div className="container">
          <div className="row align-items-center flex-column-reverse-lg">
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="cs-height_0 cs-height_lg_40" />
              <div className="cs-right_space_40">
                <div className="cs-seciton_heading cs-style1">
                  <h3 className="cs-section_title cs-font_16 cs-font_14_sm cs-gradient_color text-uppercase">
                    Our Story
                  </h3>
                  <h2 className="cs-section_subtitle cs-m0 cs-font_36 cs-font_24_sm">
                    About Us
                  </h2>
                </div>
                <div className="cs-height_20 cs-height_lg_20" />
                <p>
                  As of January 2012, there were more than 21,000 ERC20 token
                  contracts. We Built this Template because Ethereum ECO system
                  is the most popular Platform. Among the most successful ERC20
                  token sales are EOS, Bancor, Qash and Bankex raising over $70
                  Million each.
                </p>
                <p>
                  As of January 2012, there were more than 21,000 ERC20 token
                  contracts. We Built this Template because Ethereum ECO system
                  is the most popular Platform. Among the most successful ERC20
                  token sales are EOS, Bancor, Qash and Bankex raising over $70
                  Million each.
                </p>
                <div className="cs-height_25 cs-height_lg_15" />
                <div className="cs-btn_group">
                  <a href="#" className="cs-btn cs-btn_filed cs-accent_btn">
                    <span>Connect</span>
                  </a>
                  <a href="#" className="cs-btn cs-btn cs-color1">
                    <span>Whitelist Now</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.4s"
            >
              <img src="assets/img/about_img.svg" alt />
            </div>
          </div>
        </div>
      </section>
      {/* End About */}
    </>
  );
};

export default About;
