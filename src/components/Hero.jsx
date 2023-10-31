import React from "react";

const Hero = () => {
  return (
    <>
      {/* Start Hero */}
      <section
        className="cs-hero cs-style1 cs-bg"
        data-src="assets/img/hero_bg.jpeg"
        id="home"
      >
        <div className="cs-dark_overlay" />
        <div className="container">
          <div
            className="cs-hero_text wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.35s"
          >
            <h2 className="cs-hero_secondary_title cs-font_24 cs-font_18_sm">
              0 / 725 &nbsp;Minted
            </h2>
            <h1 className="cs-hero_title cs-font_64 cs-font_36_sm cs-bold">
              Discover &amp; Collect <br />
              NFT Artwork
            </h1>
            <div className="cs-btn_group">
              <a href="#" className="cs-btn cs-btn_filed cs-accent_btn">
                <span>Mint Now</span>
              </a>
              <a href="#" className="cs-btn cs-color1">
                <span>Join The Waitlist</span>
              </a>
            </div>
            <h3 className="cs-hero_subtitle cs-font_18 cs-font_16_sm cs-body_line_height">
              Max 3 NFTs Per Wallet. Price{" "}
              <span className="cs-accent_color">0.02</span> ETH <br />
              Mint is Live Until{" "}
              <span className="cs-accent_color">22 July</span>
            </h3>
          </div>
          <div
            className="cs-hero_img wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <img src="assets/img/hero_img.svg" alt="Hero Image" />
            <div className="cs-hero_img_sm">
              <img src="assets/img/hero_img_sm.png" alt="Hero Image" />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
    </>
  );
};

export default Hero;
