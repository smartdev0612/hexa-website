import React from "react";

function Ecosystems() {
  return (
    <main className="nk-pages tc-light">
    <section className="section py-5" id="ecosystems">
      <div className="container ">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="section-head section-head-s2">
              <h2
                className="title title-xl animated"
                data-animate="fadeInUp"
                data-delay="0.1"
                title="E-Cosystems"
              >
                E-COSYSTEMS
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-xxl">
        <div className="nk-block">
          <div className="row text-center align-items-lg-start gutter-vr-40px">
            <div className="col-lg-3 col-sm-6">
              <div
                className="feature feature-s6 feature-s6-1 animated"
                data-animate="fadeInUp"
                data-delay="0.3"
              >
                <div className="feature-text">
                  <h5 className="title title-sm ttu">Hexa Holders</h5>
                  <p>12,000+</p>
                  <img
                    style={{ height: "130px" }}
                    className=""
                    src="hexa/img/business-team.webp"
                    alt="logo"
                  />

                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet sagittis ipsum et posuere. Cras quis odio dapibus nisl rhoncus.</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="feature feature-s6 feature-s6-2 animated"
                data-animate="fadeInUp"
                data-delay="0.4"
              >
                <div className="feature-text">
                  <h5 className="title title-sm ttu">Max Supply</h5>
                  <p>6 trillion</p>
                  <img
                    style={{ height: "130px" }}
                    className=""
                    src="hexa/img/money-bag-and-coin-sack.webp"
                    alt="logo"
                  />
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet sagittis ipsum et posuere. Cras quis odio dapibus nisl rhoncus.</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="feature feature-s6 feature-s6-3 animated"
                data-animate="fadeInUp"
                data-delay="0.5"
              >
                <div className="feature-text">
                  <h5 className="title title-sm ttu">Hexa Burn</h5>
                  <p>100k</p>
                  <img
                    style={{ height: "130px" }}
                    className=""
                    src="hexa/img/hot-wallet.webp"
                    alt="logo"
                  />
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet sagittis ipsum et posuere. Cras quis odio dapibus nisl rhoncus.</p> */}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="feature feature-s6 feature-s6-4 animated"
                data-animate="fadeInUp"
                data-delay="0.6"
              >
                <div className="feature-text">
                  <h5 className="title title-sm ttu">Hexa Token</h5>
                  <p>-</p>
                  <img
                    style={{ height: "130px" }}
                    className=""
                    src="hexa/img/Hexa.webp"
                    alt="Hexa Token"
                  />
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet sagittis ipsum et posuere. Cras quis odio dapibus nisl rhoncus.</p> */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-image bg-contain bg-bottom-center bg-ecosystems animated d-none d-sm-block"
            data-animate="fadeInUp"
            data-delay="0.2"
          >
            <img src="images/globe-particle.webp" alt="globe" />
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

export default Ecosystems;
