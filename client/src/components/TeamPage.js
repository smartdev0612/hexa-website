import React from "react";

import getImage from './../helpers/getImage';

import style from './../assets/styles/home/team.module.css'

function TeamPage() {
  return (
    <main className="nk-pages tc-light">
      <section className="section py-5" id="team">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <div className="section-head section-head-s2">
                <h2
                  className="title title-xl animated"
                  data-animate="fadeInUp"
                  data-delay="0.1"
                  title="our Team"
                >
                  OUR EXECUTIVE TEAM
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-xxl">
          <div className="nk-block">
            <div
              className="has-carousel carousel-nav-center"
              data-items="4"
              data-navs="true"
            >
              <div
                className="item animated"
                data-animate="fadeInUp"
                data-delay="0.3"
              >
                <div className="team team-s2 team-odd">
                  <div className={`team-photo team-photo-s2 ${style.remote_pink}`}>
                    <img src={getImage(`avatars/members/san.webp`)} alt="" />
                    <a
                      href="#team-popup-1"
                      className="team-show content-popup"
                    ></a>
                  </div>
                  <h5 className="team-name title title-md">
                    Dr. Juan Sanjuan
                  </h5>
                  <span className="team-position">
                    Founder & Chief Executive Officer
                  </span>
                  <ul className="team-social team-social-s2">
                    <li>
                      <a href="https://www.linkedin.com/in/juan-sanjuan-a3a820234/">
                        <em className="fab fa-linkedin-in"></em>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/thejuansanjuan">
                        <em className="fab fa-twitter"></em>
                      </a>
                    </li>
                  </ul>
                </div>

                <div
                  id="team-popup-1"
                  className="team-popup bg-theme tc-light mfp-hide"
                >
                  <a title="Close" className="mfp-close">
                    ×
                  </a>
                  <div className="row align-items-start">
                    <div className="col-md-6">
                      <div className="team-photo">
                        <img src={getImage(`avatars/members/san.webp`)} alt="team" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="team-popup-info pl-md-3">
                        <h3 className="team-name title title-lg pt-4">
                          Dr. Juan Sanjuan
                        </h3>
                        <p className="team-position">
                          Founder & Chief Executive Officer
                        </p>
                        <ul className="team-social team-social-s2 mb-4">
                          <li>
                            <a href="https://twitter.com/thejuansanjuan">
                              <em className="fab fa-twitter"></em>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/juan-sanjuan-a3a820234/">
                              <em className="fab fa-linkedin-in"></em>
                            </a>
                          </li>
                        </ul>
                        <p>
                          Dr. Sanjuan joined HexaFinity as CEO in 2022.{" "}
                        </p>
                        <p>
                          Extensive experience in investment banking, crypto implementation, and investor relationship with a focus on developing a secure compliance system & collaborating with banking to develop the future of financial services.
                        </p>
                        <div className="progress-list">
                          <div className="progress-wrap">
                            <div className="progress-title">
                              Blockchain{" "}
                              <span className="progress-amount">85%</span>
                            </div>
                            <div className="progress-bar progress-bar-xs bg-black-10">
                              <div
                                className="progress-percent bg-primary"
                                data-percent="85"
                              ></div>
                            </div>
                          </div>
                          <div className="progress-wrap">
                            <div className="progress-title">
                              Decentralization{" "}
                              <span className="progress-amount">68%</span>
                            </div>
                            <div className="progress-bar progress-bar-xs bg-black-10">
                              <div
                                className="progress-percent bg-primary"
                                data-percent="68"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="item animated"
                data-animate="fadeInUp"
                data-delay="0.4"
              >
                <div className="team team-s2 team-even">
                  <div className={`team-photo team-photo-s2 ${style.remote_pink}`}>
                    <img src={getImage(`avatars/members/yezlybeth.webp`)} alt="" />
                    <a
                      href="#team-popup-2"
                      className="team-show content-popup"
                    ></a>
                  </div>
                  <h5 className="team-name title title-md">Yezlybeth M</h5>
                  <span className="team-position">
                    President & Chief Operating Officer
                  </span>
                  <ul className="team-social team-social-s2">
                    <li>
                      <a href="https://www.linkedin.com/in/yezlybeth-mora-5a67b63b/">
                        <em className="fab fa-linkedin-in"></em>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <!-- Start .team-profile  --> */}
                <div
                  id="team-popup-2"
                  className="team-popup bg-theme tc-light mfp-hide"
                >
                  <a title="Close" className="mfp-close">
                    ×
                  </a>
                  <div className="row align-items-start">
                    <div className="col-md-6">
                      <div className="team-photo">
                        <img src={getImage(`avatars/members/yezlybeth.webp`)} alt="" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="team-popup-info pl-md-3">
                        <h3 className="team-name title title-lg pt-4">
                          Yezlybeth M
                        </h3>
                        <p className="team-position">
                          President & Chief Operating Officer
                        </p>
                        <ul className="team-social team-social-s2 mb-4">
                          <li>
                            <a href="https://www.linkedin.com/in/yezlybeth-mora-5a67b63b/">
                              <em className="fab fa-linkedin-in"></em>
                            </a>
                          </li>
                        </ul>
                        <p>
                          Yezlybeth M joined in 2021 HexaFinity and now serves as COO, overseeing the implementation of long-term, strategic business goals while ensuring effective procedures are in place.
                        </p>
                        <p>
                          Yezlybeth has deep expertise in blockchain and fintech along with a high-level understanding of research, development, and marketing.
                        </p>
                      </div>
                    </div>
                    {/* <!-- .col  --> */}
                  </div>
                  {/* <!-- .row  --> */}
                </div>
                {/* <!-- .team-profile  --> */}
              </div>

              <div
                className="item animated"
                data-animate="fadeInUp"
                data-delay="0.5"
              >
                <div className="team team-s2 team-odd">
                  <div className={`team-photo team-photo-s2 ${style.remote_pink}`}>
                    <img src={getImage(`avatars/members/product.webp`)} alt="" />
                    <a
                      href="#team-popup-3"
                      className="team-show content-popup"
                    ></a>
                  </div>
                  <h5 className="team-name title title-md">Isaiah J</h5>
                  <span className="team-position">
                    Chief Product Officer
                  </span>
                  <ul className="team-social team-social-s2">
                    <li>
                      <a href="https://www.linkedin.com/in/isaiah-johnson-b38014256/">
                        <em className="fab fa-linkedin-in"></em>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <!-- Start .team-profile  --> */}
                <div
                  id="team-popup-3"
                  className="team-popup bg-theme tc-light mfp-hide"
                >
                  <a title="Close" className="mfp-close">
                    ×
                  </a>
                  <div className="row align-items-start">
                    <div className="col-md-6">
                      <div className="team-photo">
                        <img src={getImage(`avatars/members/product.webp`)} alt="" />
                      </div>
                    </div>
                    {/* <!-- .col  --> */}
                    <div className="col-md-6">
                      <div className="team-popup-info pl-md-3">
                        <h3 className="team-name title title-lg pt-4">
                          Isaiah J
                        </h3>
                        <p className="team-position">
                          Chief Product Officer
                        </p>
                        <ul className="team-social team-social-s2 mb-4">
                          <li>
                            <a href="https://www.linkedin.com/in/isaiah-johnson-b38014256/">
                              <em className="fab fa-linkedin-in"></em>
                            </a>
                          </li>
                        </ul>
                        <p>
                          Isaiah J joined HexaFinity early 2020 and now serves as CPO, developing & managing core parts of the HexaFinity DEX. {" "}
                        </p>
                        <p>
                          Isaiah J has been building valuable tools & infrastructure for financial innovation for the past 10 years.
                        </p>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              <div
                className="item animated"
                data-animate="fadeInUp"
                data-delay="0.6"
              >
                <div className="team team-s2 team-even">
                  <div className={`team-photo team-photo-s2 ${style.remote_pink}`}>
                    <img src={getImage(`avatars/members/financial.webp`)} alt="" />
                    <a
                      href="#team-popup-4"
                      className="team-show content-popup"
                    ></a>
                  </div>
                  <h5 className="team-name title title-md">Joseph O</h5>
                  <span className="team-position">
                    Chief Financial Officer
                  </span>
                  <ul className="team-social team-social-s2">
                    <li>
                      <a href="#">
                        <em className="fab fa-facebook-f"></em>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="fab fa-linkedin-in"></em>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="fab fa-twitter"></em>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <!-- Start .team-profile  --> */}
                <div
                  id="team-popup-4"
                  className="team-popup bg-theme tc-light mfp-hide"
                >
                  <a title="Close" className="mfp-close">
                    ×
                  </a>
                  <div className="row align-items-start">
                    <div className="col-md-6">
                      <div className="team-photo">
                        <img src={getImage(`avatars/members/financial.webp`)} alt="" />
                      </div>
                    </div>
                    {/* <!-- .col  --> */}
                    <div className="col-md-6">
                      <div className="team-popup-info pl-md-3">
                        <h3 className="team-name title title-lg pt-4">
                          Joseph O
                        </h3>
                        <p className="team-position">
                          Chief Financial Officer
                        </p>
                        <ul className="team-social team-social-s2 mb-4">
                          <li>
                            <a href="#">
                              <em className="fab fa-facebook-f"></em>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <em className="fab fa-linkedin-in"></em>
                            </a>
                          </li>
                        </ul>
                        <p>
                          Joseph O is the serving CFO of HexaFinity. {" "}
                        </p>
                        <p>
                          Since 2012, Joseph has been instrumental in the development of HexaFinity, establishing banking relationships, attracting key personnel & re-domiciling the exchange.
                        </p>
                      </div>
                    </div>
                    {/* <!-- .col  --> */}
                  </div>
                  {/* <!-- .row  --> */}
                </div>
                {/* <!-- .team-profile  --> */}
              </div>

              <div
                className="item animated"
                data-animate="fadeInUp"
                data-delay="0.7"
              >
                <div className="team team-s2 team-odd">
                  <div className={`team-photo team-photo-s2 ${style.remote_pink}`}>
                    <img src={getImage(`avatars/members/legal.webp`)} alt="" />
                    <a
                      href="#team-popup-5"
                      className="team-show content-popup"
                    ></a>
                  </div>
                  <h5 className="team-name title title-md">Mathew C</h5>
                  <span className="team-position">
                    Chief Legal Officer
                  </span>
                  <ul className="team-social team-social-s2">
                    <li>
                      <a href="#">
                        <em className="fab fa-facebook-f"></em>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="fab fa-linkedin-in"></em>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="fab fa-twitter"></em>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <!-- Start .team-profile  --> */}
                <div
                  id="team-popup-5"
                  className="team-popup bg-theme tc-light mfp-hide"
                >
                  <a title="Close" className="mfp-close">
                    ×
                  </a>
                  <div className="row align-items-start">
                    <div className="col-md-6">
                      <div className="team-photo">
                        <img src={getImage(`avatars/members/legal.webp`)} alt="" />
                      </div>
                    </div>
                    {/* <!-- .col  --> */}
                    <div className="col-md-6">
                      <div className="team-popup-info pl-md-3">
                        <h3 className="team-name title title-lg pt-4">
                          Mathew C
                        </h3>
                        <p className="team-position">
                          Chief Legal Officer
                        </p>
                        <ul className="team-social team-social-s2 mb-4">
                          <li>
                            <a href="#">
                              <em className="fab fa-facebook-f"></em>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <em className="fab fa-linkedin-in"></em>
                            </a>
                          </li>
                        </ul>
                        <p>
                          Mathew C is an cryptocurrency lawyer & accountant acting for leading businesses within this dynamic space.{" "}
                        </p>
                        <p>
                          Mathew obtained his law degree from Florida State University College of Law in 1999 & spent 8 years at Paypal prior to joining HexaFinity.
                        </p>
                      </div>
                    </div>
                    {/* <!-- .col  --> */}
                  </div>
                  {/* <!-- .row  --> */}
                </div>
                {/* <!-- .team-profile  --> */}
              </div>

              <div className="item">
                <div className="team team-s2 team-even">
                  <div className={`team-photo team-photo-s2 ${style.remote_pink}`}>
                    <img src={getImage(`avatars/members/marketing.webp`)} alt="" />
                    <a
                      href="#team-popup-6"
                      className="team-show content-popup"
                    ></a>
                  </div>
                  <h5 className="team-name title title-md">Abigail S</h5>
                  <span className="team-position">
                    Chief Marketing Officer
                  </span>
                  <ul className="team-social team-social-s2">
                    <li>
                      <a href="#">
                        <em className="fab fa-facebook-f"></em>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="fab fa-linkedin-in"></em>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="fab fa-twitter"></em>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <!-- Start .team-profile  --> */}
                <div
                  id="team-popup-6"
                  className="team-popup bg-theme tc-light mfp-hide"
                >
                  <a title="Close" className="mfp-close">
                    ×
                  </a>
                  <div className="row align-items-start">
                    <div className="col-md-6">
                      <div className="team-photo">
                        <img src={getImage(`avatars/members/marketing.webp`)} alt="" />
                      </div>
                    </div>
                    {/* <!-- .col  --> */}
                    <div className="col-md-6">
                      <div className="team-popup-info pl-md-3">
                        <h3 className="team-name title title-lg pt-4">
                          Abigail S
                        </h3>
                        <p className="team-position">
                          Chief Marketing Officer
                        </p>
                        <ul className="team-social team-social-s2 mb-4">
                          <li>
                            <a href="#">
                              <em className="fab fa-facebook-f"></em>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <em className="fab fa-linkedin-in"></em>
                            </a>
                          </li>
                        </ul>
                        <p>
                          Abigail S is a serial entrepreneur with 10 years of experience building and designing consumer tech companies centered around social media, entertainment, and community. {" "}
                        </p>
                        <p>
                          She has been recognized in the Wired UK for NFT implementation in business.
                        </p>
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

export default TeamPage;
