import React from "react";

function BuySection() {
  return (
    <main className="nk-pages tc-light">
      <section className="section py-5" id="docs">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <div className="section-head section-head-s2">
                <h2
                  className="title title-xl animated"
                  data-animate="fadeInUp"
                  data-delay="0.1"
                  title="Buy Hexa "
                >
                  Buy Hexa
                </h2>
                <p className="animated" data-animate="fadeInUp" data-delay="0.2">
                  HEXA is best purchased and sold through HexaFinity Swap, but it
                  can also be found on PancakeSwap, Biswap, and an ever-growing
                  list of DEX. Please note that, outside of HexaFinity Swap, and
                  exchanges which support one may not support the other.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-xxl">
          <div className="nk-block">
            <div className="row gutter-vr-50px">
              <div
                className="col-sm-6 col-lg-3"
                style={{ backgroundColor: "#0000004a" }}
              >
                <div
                  className="doc animated"
                  data-animate="fadeInUp"
                  data-delay="0.3"
                >
                  <div className="doc-photo doc-shape doc-shape-d">
                    <img src="hexa/img/logo(2).webp" alt="" />
                  </div>
                  <div className="doc-text">
                    <h5 className="doc-title title-sm">
                      Hexa <small>HexaFinity</small>
                    </h5>
                    {/* <a className="doc-download" href="#"><em className="ti ti-import"></em></a> */}
                    <a className="doc-download" href="#">
                      {" "}
                      Buy <em className="ti ti-shopping-cart"></em>
                    </a>

                    {/* <div className="doc-lang">ENGLISH</div> */}
                  </div>

                </div>
              </div>
              <div className="col-sm-6 col-lg-3 ">
                <div
                  className="doc animated"
                  data-animate="fadeInUp"
                  data-delay="0.4"
                >
                  <div className="doc-photo doc-shape doc-shape-d">
                    <img src="hexa/img/pancake-removebg-preview.webp" alt="" />
                  </div>
                  <div className="doc-text">
                    <h5 className="doc-title title-sm">
                      HEXA <small>PancakeSwap</small>
                    </h5>
                    {/* <a className="doc-download" href="#"><em className="ti ti-import"></em></a> */}
                    <a className="doc-download" href="https://pancakeswap.finance/swap?outputCurrency=0x1e2d26b6351bfFE970baB183C25E267d9c0d1223" target={`_blank`}>
                      {" "}
                      Buy <em className="ti ti-shopping-cart"></em>
                    </a>

                    {/* <div className="doc-lang">ENGLISH</div> */}
                  </div>
                </div>
              </div>
              <div
                className="col-sm-6 col-lg-3"
                style={{ backgroundColor: "#0000004a" }}
              >
                <div
                  className="doc animated"
                  data-animate="fadeInUp"
                  data-delay="0.5"
                >
                  <div className="doc-photo doc-shape doc-shape-d">
                    <img src="hexa/img/biswapicon-removebg-preview.webp" alt="" />
                  </div>
                  <div className="doc-text">
                    <h5 className="doc-title title-sm">
                      HEXA <small>Biswap</small>
                    </h5>
                    {/* <a className="doc-download" href="#"><em className="ti ti-import"></em></a> */}
                    <a className="doc-download" href="#">
                      {" "}
                      Buy <em className="ti ti-shopping-cart"></em>
                    </a>

                    {/* <div className="doc-lang">ENGLISH</div> */}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div
                  className="doc animated"
                  data-animate="fadeInUp"
                  data-delay="0.6"
                >
                  <div className="doc-photo doc-shape doc-shape-d">
                    <img src="hexa/img/babyswapicon-removebg-preview.webp" alt="" />
                  </div>
                  <div className="doc-text">
                    <h5 className="doc-title title-sm">
                      Hexa <small> babyswap</small>
                    </h5>
                    {/* <a className="doc-download" href="#"><em className="ti ti-import"></em></a> */}
                    <a className="doc-download" href="#">
                      {" "}
                      Buy <em className="ti ti-shopping-cart"></em>
                    </a>

                    {/* <div className="doc-lang">ENGLISH</div> */}
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

export default BuySection;
