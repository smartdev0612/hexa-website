import React from "react";

function Banner() {
  return (
    <header
      className="nk-header page-header is-transparent is-sticky is-dark"
      id="header"
    >
      <div className="banner banner-fs tc-light py-2">
        <div className="nk-block nk-block-sm nk-block-header my-auto">
          <div className="container container-xxl pt-5">
            <div className="row align-items-center justify-content-center justify-content-lg-between gutter-vr-30px">
              <div className="col-lg-6 order-lg-last">
                <div
                  className="banner-gfx banner-gfx-auto animated"
                  data-animate="fadeInUp"
                  data-delay=".7"
                >
                  <img src="hexa/img/Hexa.webp" alt="Hexa Token" />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-sm-10 text-center text-lg-left">
                <div className="banner-caption">
                  <h1
                    className="title title-lg ttu animated"
                    data-animate="fadeInUp"
                    data-delay=".8"
                  >
                    Hexa The Portal to Infinity
                  </h1>
                  <p
                    className="lead animated"
                    data-animate="fadeInUp"
                    data-delay=".9"
                  >
                    The HexaFinity Token (HEXA) is the native utility token with
                    unlimited use in our platform, and we are working with
                    outside partners to expand those uses. HEXA will allow
                    holders to lend & borrow a variety of different tokens. In
                    addition, the lenders will be rewarded a variable-based
                    interest rate, including free HEXA tokens for using our
                    lending protocol. In addition, HexaFinity users will be
                    rewarded for holding HEXA in their wallets.
                  </p>
                  <div
                    className="cpn-action animated"
                    data-animate="fadeInUp"
                    data-delay="1"
                  >
                    <a className="btn btn-primary btn-round" href="#">
                      Buy Hexa
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="particles-bg"
          className="particles-container is-fixed particles-bg op-20"
        ></div>
      </div>
    </header>
  );
}

export default Banner;
