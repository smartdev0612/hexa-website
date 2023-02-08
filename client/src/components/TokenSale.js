import React from "react";

function TokenSale() {
  return (
    <main className="nk-pages tc-light">
      <section className="section" id="tokensale">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <div className="section-head section-head-s2">
                <h2
                  className="title title-xl animated"
                  data-animate="fadeInUp"
                  data-delay="0.1"
                  title="Token Details"
                >
                  TOKENS
                </h2>
                <p
                  className="animated"
                  data-animate="fadeInUp"
                  data-delay="0.2"
                >
                  Breakdown of our Token Recipients.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-xxl">
          <div className="nk-block">
            <div className="row align-items-center gutter-vr-50px">
              <div className="col-xxl-4 col-lg-6 px-xl-5 order-xl-1">
                <div
                  className="animated"
                  data-animate="fadeInUp"
                  data-delay="0.3"
                >
                  <canvas
                    className="chart-canvas"
                    id="token-distribution"
                  ></canvas>
                </div>
              </div>
              <div className="col-xxl col-lg-6">
                <ul
                  className="chart-data-s2 row"
                  data-canvas="token-distribution"
                  data-canvas-type="pie"
                  data-border-color="#0f1932"
                >
                  <li
                    className="col-sm-8"
                    data-color="#1f2e4d"
                    data-color-hover="#94c6cd"
                    data-label="Public Sale"
                    data-title="Tokens alocate for Public Sale"
                    data-subtitle="(Lockup)"
                    data-amount="45"
                  ></li>
                  <li
                    className="col-sm-8"
                    data-color="#1f2e4d"
                    data-color-hover="#94c6cd"
                    data-label="Private Sale"
                    data-title="Tokens alocate for Private Sale"
                    data-subtitle="(1 month lockup for half bonus)"
                    data-amount="25"
                  ></li>
                  <li
                    className="col-sm-6"
                    data-color="#1f2e4d"
                    data-color-hover="#94c6cd"
                    data-label="Reserve Fund"
                    data-title="Reserve Fund"
                    data-subtitle="(6 months lockup)"
                    data-amount="8"
                  ></li>
                  <li
                    className="col-sm-6"
                    data-color="#1f2e4d"
                    data-color-hover="#94c6cd"
                    data-label="Team & Founder"
                    data-title="Team & Founder"
                    data-subtitle="(3 months lockup)"
                    data-amount="12"
                  ></li>
                  <li
                    className="col-sm-6"
                    data-color="#1f2e4d"
                    data-color-hover="#94c6cd"
                    data-label="Bounty & Events"
                    data-title="Bounty & Events"
                    data-subtitle="(1 months lockup)"
                    data-amount="6"
                  ></li>
                  <li
                    className="col-sm-6"
                    data-color="#1f2e4d"
                    data-color-hover="#94c6cd"
                    data-label="Advisors & Partners"
                    data-title="Advisors & Partners"
                    data-subtitle="(6 months lockup)"
                    data-amount="4"
                  ></li>
                </ul>
              </div>
              <div className="col-xxl col-xl-12 order-last">
                <div className="token-info-s2">
                  <div className="row gutter-vr-50px">
                    <div className="col-6 col-xxl-6 col-lg-3">
                      <div
                        className="token-info-item color-1 animated"
                        data-animate="fadeInUp"
                        data-delay="0.7"
                      >
                        <div className="token-info-title">Start Time</div>
                        <h4 className="token-info-des">15 Sep, 2018</h4>
                      </div>
                    </div>
                    <div className="col-6 col-xxl-6 col-lg-3">
                      <div
                        className="token-info-item color-1 animated"
                        data-animate="fadeInUp"
                        data-delay="0.7"
                      >
                        <div className="token-info-title">Token Symbol</div>
                        <h4 className="token-info-des">ICOX</h4>
                      </div>
                    </div>
                    <div className="col-6 col-xxl-6 col-lg-3">
                      <div
                        className="token-info-item color-2 animated"
                        data-animate="fadeInUp"
                        data-delay="0.75"
                      >
                        <div className="token-info-title">End Time</div>
                        <h4 className="token-info-des">30 Nov, 2018</h4>
                      </div>
                    </div>
                    <div className="col-6 col-xxl-6 col-lg-3">
                      <div
                        className="token-info-item color-2 animated"
                        data-animate="fadeInUp"
                        data-delay="0.75"
                      >
                        <div className="token-info-title">Tokens Offered</div>
                        <h4 className="token-info-des">15.0 M</h4>
                      </div>
                    </div>
                    <div className="col-6 col-xxl-6 col-lg-3">
                      <div
                        className="token-info-item color-3 animated"
                        data-animate="fadeInUp"
                        data-delay="0.8"
                      >
                        <div className="token-info-title">Soft Cap</div>
                        <h4 className="token-info-des">1.5 K</h4>
                      </div>
                    </div>
                    <div className="col-6 col-xxl-6 col-lg-3">
                      <div
                        className="token-info-item color-3 animated"
                        data-animate="fadeInUp"
                        data-delay="0.8"
                      >
                        <div className="token-info-title">Soft Cap</div>
                        <h4 className="token-info-des">1.5 K</h4>
                      </div>
                    </div>
                    <div className="col-6 col-xxl-6 col-lg-3">
                      <div
                        className="token-info-item color-4 animated"
                        data-animate="fadeInUp"
                        data-delay="0.85"
                      >
                        <div className="token-info-title">Crowdsale</div>
                        <h4 className="token-info-des">10.5 M</h4>
                      </div>
                    </div>
                    <div className="col-6 col-xxl-6 col-lg-3">
                      <div
                        className="token-info-item color-4 animated"
                        data-animate="fadeInUp"
                        data-delay="0.85"
                      >
                        <div className="token-info-title">Crowdsale</div>
                        <h4 className="token-info-des">10.5 M</h4>
                      </div>
                    </div>
                    <div className="col-6 col-xxl-6 col-lg-3">
                      <div
                        className="token-info-item color-5 animated"
                        data-animate="fadeInUp"
                        data-delay="0.9"
                      >
                        <div className="token-info-title">Hard Cap</div>
                        <h4 className="token-info-des">12.0 M</h4>
                      </div>
                    </div>
                    <div className="col-6 col-xxl-6 col-lg-3">
                      <div
                        className="token-info-item color-5 animated"
                        data-animate="fadeInUp"
                        data-delay="0.9"
                      >
                        <div className="token-info-title">Hard Cap</div>
                        <h4 className="token-info-des">12.0 M</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TokenSale;
