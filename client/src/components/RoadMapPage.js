import React from "react";

import style from './../assets/styles/roadmap/index.module.css';

function RoadMapPage() {
  return (
    <main className="nk-pages tc-light">
      <section className="section" id="roadmap">
        <div class="banner-wrap">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-6 col-lg-9">
                <div class="banner-caption cpn tc-light text-center">
                  <div class="cpn-head">
                    <h2 class="title ttu">Roadmap</h2>
                    <p>
                      The roadmap is update on a quarterly basis. Our team will
                      keep track of all changes on the market and take into the
                      consideration the feedback from our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="nk-block nk-block-roadmap">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="roadmap-wrap mb-0">
                  <div className="roadmap-line"></div>
                  <div className="roadmap">
                    <div className="roadmap-year">2021</div>
                  </div>
                  <div className="roadmap roadmap-right roadmap-finished">
                    <div className="roadmap-step custom-color">
                      <div className="roadmap-head">
                        <span className="roadmap-time-custom">
                          Start: Q1 2021
                        </span>
                        <span className="roadmap-title">Idea Generation</span>
                      </div>
                      <p> ✅Mission Accomplishes</p>
                    </div>
                  </div>
                  <div className="roadmap roadmap-left roadmap-finished">
                    <div className="roadmap-step">
                      <div className="roadmap-head">
                        <span className="roadmap-time-custom">
                          Start: Q2 2021
                        </span>
                        <span className="roadmap-title">Market Research</span>
                      </div>
                      <ul className="list list-dot roadmap-step-list list-custom">
                        <li className="list-custom">
                          ✅Mission in Accomplishes{" "}
                        </li>
                        <li>MVP of wallet prototype released</li>
                        <li>Pre-Sale Starts</li>
                        <li>Redesign of website goes live</li>
                        <li>Version 2 of Whitepaper released</li>
                        <li>Version 3 of Onepager released</li>
                      </ul>
                    </div>
                  </div>

                  <div className="roadmap roadmap-right roadmap-finished">
                    <div className="roadmap-step custom-color">
                      <div className="roadmap-head">
                        <span className="roadmap-time-custom">
                          Start: Q4 2021
                        </span>
                        <span className="roadmap-title">Conceptualization</span>
                      </div>
                      <p>✅Mission on Accomplishes</p>
                      <p>
                        Public ICO launch and crowd-sale starts - 5th Januray
                        &amp; Token distribution will commence - 2nd March.
                      </p>
                    </div>
                  </div>

                  <div className={`roadmap`}>
                    <div className="roadmap-year">2022</div>
                  </div>

                  <div className={`roadmap roadmap-left roadmap-finished ${style.roadmap_left}`}>
                    <div className="roadmap-step custom-color">
                      <div className="roadmap-head">
                        <span className="roadmap-time-custom">
                          Start: Q4 2022
                        </span>
                        <span className="roadmap-title">
                          Private Sale Start
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="roadmap">
                    <div className="roadmap-year">2023</div>
                  </div>

                  <div className="roadmap roadmap-right">
                    <div className="roadmap-step custom-color">
                      <div className="roadmap-head">
                        <span className="roadmap-time-custom">
                          Start: Q1 2023
                        </span>
                        <span className="roadmap-title">
                          ICO Public Sales Launch
                        </span>
                      </div>
                      <p>⏱Mission on Standby</p>
                    </div>
                  </div>

                  <div className="roadmap roadmap-left">
                    <div className="roadmap-step custom-color">
                      <div className="roadmap-head">
                        <span className="roadmap-time-custom">
                          Start: Q2 2023
                        </span>
                        <span className="roadmap-title">
                          Exchange Platform Launch and Third-Party listing
                        </span>
                      </div>
                      <p>⏱Mission on Standby</p>
                    </div>
                  </div>
                  <div className="roadmap roadmap-right">
                    <div className="roadmap-step custom-color">
                      <div className="roadmap-head">
                        <span className="roadmap-time-custom">
                          Start: Q4 2023
                        </span>
                        <span className="roadmap-title">
                          Copy Trade & Bot Trading Platform Development
                        </span>
                      </div>
                      <p>⏱Mission on Standby</p>
                    </div>
                  </div>

                  <div className="roadmap">
                    <div className="roadmap-year">2024</div>
                  </div>

                  <div className={`roadmap roadmap-left ${style.roadmap_left}`}>
                    <div className="roadmap-step custom-color">
                      <div className="roadmap-head">
                        <span className="roadmap-time-custom">
                          Start: Q1 2024
                        </span>
                        <span className="roadmap-title">
                          VIP Rewards Implementation
                        </span>
                      </div>
                      <p>⏱Mission on Standby</p>
                    </div>
                  </div>

                  <div className="roadmap roadmap-right">
                    <div className="roadmap-step custom-color">
                      <div className="roadmap-head">
                        <span className="roadmap-time-custom">
                          Start: Q2 2024
                        </span>
                        <span className="roadmap-title">
                          Lending & Borrow Implementation
                        </span>
                      </div>
                      <p>⏱Mission on Standby</p>
                    </div>
                  </div>

                  <div className="roadmap roadmap-left">
                    <div className="roadmap-step custom-color">
                      <div className="roadmap-head">
                        <span className="roadmap-time-custom">
                          Start: Q4 2024
                        </span>
                        <span className="roadmap-title">
                          NFTs Marketplace Implementation
                        </span>
                      </div>
                      <p>⏱Mission on Standby</p>
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

export default RoadMapPage;
