import React from "react";

function Community() {
  return (
    <main className="nk-pages tc-light">
      <div>
        <section className="section section-partners bg-dark-alt" id="partners">
          <div className="container">
            <div className="section-head text-center wide-auto-xm">
              <h2 className="title title-lg title-dark">
                Join The HEXA <span>Community</span>
              </h2>
              <h5 className="title title-sm title-dark">
                30,000+ Twitter Followers
              </h5>
              <h5 className="title title-sm title-dark">
                60,000+ Discord Members
              </h5>
              <h5 className="title title-sm title-dark">
                100,000+ Telegrams Members
              </h5>
              <p>
                Our community is an integral part of our development. We value the
                feedback from our users and try to make changes accordingly
              </p>
              <p>
                Very active community that loves our mission and values. Our
                social account are filled with community members that love to
                discuss and help fellow holders.
              </p>
              <h5 className="title title-sm title-dark">Talk Soon!</h5>
            </div>

            <div className="nk-block block-partners  card-custom-community">
              <div className="row align-items-center ">
                <div className="col-lg-2 col-sm-6 download-option">
                  <a href="https://www.instagram.com/hexafinity/" target="_blank">
                    <img src="hexa/img/icons8-instagram-96.png" alt="" />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-6 download-option">
                  <a href="https://t.me/+uieNKlCTmlAyNjMx" target="_blank">
                    <img src="hexa/img/icons8-telegram-app-96.png" alt="" />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-6 download-option">
                  <a href="https://twitter.com/HexaFinity" target="_blank">
                    <img src="hexa/img/icons8-twitter-96.png" alt="" />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-6 download-option">
                  <a href="https://discord.gg/G547437nW5" target="_blank">
                    <img src="hexa/img/icons8-discord-96.png" alt="" />
                  </a>
                </div>
                <div className="col-lg-2 col-sm-6 download-option">
                  <a href="https://www.facebook.com/Hexafinity" target="_blank">
                    <img src="hexa/img/icons8-facebook-96.png" alt="" />
                  </a>

                </div>
                <div className="col-lg-2 col-sm-6 download-option">
                  <img src="hexa/img/icons8-reddit-96.png" alt="" />
                </div>
              </div>
            </div>
            <div className="section-head text-center wide-auto-xm">
              {/* <em className="material-icons" style={{fontSize:"48px",color:"red"}}>&#9888;</em> */}
              <h5 className="title title-sm title-dark">
                <span style={{ fontSize: "30px", color: "red" }}>&#9888;</span>{" "}
                {"  "}Watch out fake accounts! The HexaFinity team will never
                message you first and ask for private keys or individual
                infomation.{" "}
              </h5>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Community;
