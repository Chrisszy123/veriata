import React from "react";

const Causes = () => {
  return (
    <>
      {/* Start Causes Seciton */}
      <section>
        <div className="container">
          <div
            className="cs-seciton_heading cs-style1 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <h3 className="cs-section_title cs-font_16 cs-font_14_sm cs-gradient_color">
              Simple Steps
            </h3>
            <h2 className="cs-section_subtitle cs-m0 cs-font_36 cs-font_24_sm">
              Minting Techniques
            </h2>
          </div>
          <div className="cs-height_50 cs-height_lg_30" />
          <div
            className="row wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.4s"
          >
            <div className="col-xl-3 col-md-6">
              <div className="cs-card cs-style1">
                <div className="cs-card_in">
                  <h3 className="cs-card_title cs-font_30 cs-font_24_sm cs-m0">
                    Connect Wallet
                  </h3>
                  <div className="cs-card_arrow">👋</div>
                </div>
              </div>
              <div className="cs-height_25 cs-height_lg_25" />
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs-card cs-style1">
                <div
                  className="cs-card_bg"
                  data-src="assets/img/card_bg_white.svg"
                />
                <div className="cs-card_in">
                  <h3 className="cs-card_title cs-font_30 cs-font_24_sm cs-m0">
                    Select Your Quantity
                  </h3>
                  <div className="cs-card_arrow">👉</div>
                </div>
              </div>
              <div className="cs-height_25 cs-height_lg_25" />
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs-card cs-style1">
                <div className="cs-card_in">
                  <h3 className="cs-card_title cs-font_30 cs-font_24_sm cs-m0">
                    Transection Confirm
                  </h3>
                  <div className="cs-card_arrow">👍</div>
                </div>
              </div>
              <div className="cs-height_25 cs-height_lg_25" />
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="cs-card cs-style1">
                <div className="cs-card_in">
                  <h3 className="cs-card_title cs-font_30 cs-font_24_sm cs-m0">
                    Recive Your NFTs
                  </h3>
                  <div className="cs-card_arrow">🙂</div>
                </div>
              </div>
              <div className="cs-height_25 cs-height_lg_25" />
            </div>
          </div>
        </div>
      </section>
      {/* End Causes Seciton */}
    </>
  );
};

export default Causes;
