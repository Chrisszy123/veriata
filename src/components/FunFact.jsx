import React from "react";

const FunFact = () => {
  return (
    <>
      {/* Start Fun Fact */}
      <div
        className="container wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="0.35s"
      >
        <div className="row">
          <div className="col-lg-3 col-6">
            <div className="cs-funfact cs-style1">
              <div className="cs-font_64 cs-font_36_sm cs-m0 cs-primary_font cs-primary_color cs-heading_line_height cs-bold">
                <span data-count-to={365} className="odometer" />
              </div>
              <p className="cs-m0 cs-font_24 cs-heading_line_height cs-font_22_sm">
                Total Items
              </p>
            </div>
            <div className="cs-height_25 cs-height_lg_25" />
          </div>
          <div className="col-lg-3 col-6">
            <div className="cs-funfact cs-style1">
              <div className="cs-font_64 cs-font_36_sm cs-m0 cs-primary_font cs-primary_color cs-heading_line_height cs-bold">
                <span data-count-to={1125} className="odometer" />
              </div>
              <p className="cs-m0 cs-font_24 cs-heading_line_height cs-font_22_sm">
                Total Owners
              </p>
            </div>
            <div className="cs-height_25 cs-height_lg_25" />
          </div>
          <div className="col-lg-3 col-6">
            <div className="cs-funfact cs-style1">
              <div className="cs-font_64 cs-font_36_sm cs-m0 cs-primary_font cs-primary_color cs-heading_line_height cs-bold">
                <span data-count-to="1.72" className="odometer" />
              </div>
              <p className="cs-m0 cs-font_24 cs-heading_line_height cs-font_22_sm">
                Floor Price
              </p>
            </div>
            <div className="cs-height_25 cs-height_lg_25" />
          </div>
          <div className="col-lg-3 col-6">
            <div className="cs-funfact cs-style1">
              <div className="cs-font_64 cs-font_36_sm cs-m0 cs-primary_font cs-primary_color cs-heading_line_height cs-bold">
                <span data-count-to="42.2" className="odometer" />k
              </div>
              <p className="cs-m0 cs-font_24 cs-heading_line_height cs-font_22_sm">
                Volume Traded
              </p>
            </div>
            <div className="cs-height_25 cs-height_lg_25" />
          </div>
        </div>
      </div>
      {/* End Fun Fact */}
    </>
  );
};

export default FunFact;
