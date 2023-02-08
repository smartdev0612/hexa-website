import React from "react";

import style from './../assets/styles/home/roadmap.module.css';

function RoadMap() {
  return (
    <main className="nk-pages tc-light">
      <section className="section py-5" id="roadmap">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <div className="section-head section-head-s2">
                <h2
                  className="title title-xl animated"
                  data-animate="fadeInUp"
                  data-delay="0.1"
                  title="RoadMap"
                >
                  ROADMAP
                </h2>
                <p
                  className="animated"
                  data-animate="fadeInUp"
                  data-delay="0.2"
                >
                  The roadmap is update on a quarterly basis. Our team will keep
                  track of all changes on the market and take into the
                  consideration the feedback from our community.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-xxl">
          <div className="nk-block">
            <div
              className="roadmap-wrap roadmap-wrap-ovl-right text-center animated"
              data-animate="fadeInUp"
              data-delay="0.3"
            >
              <div className="roadmap-line-s2"></div>
              <div
                className="roadmap-slider has-carousel carousel-nav-center"
                data-blank="true"
                data-items="5"
                data-items-tab-l="4"
                data-items-tab-p="2"
                data-items-mobile="1"
                data-margin="-1"
                data-navs="true"
              >
                <div className="roadmap roadmap-s2 roadmap-i1 roadmap-finished">
                  <h6 className="roadmap-year-s2">Idea Generation</h6>
                  <h5 className="title title-sm roadmap-date">
                    Start: Q1 2021
                  </h5>
                  <div className="roadmap-text">
                    <p>Status: ✅Mission Accomplishes</p>
                  </div>
                </div>

                <div className="roadmap roadmap-s2 roadmap-i2 roadmap-finished">
                  <h6 className="roadmap-year-s2">Market Research</h6>
                  <h5 className="title title-sm roadmap-date">
                    Start: Q2 2021
                  </h5>
                  <div className="roadmap-text">
                    {/* <p>Status: Mission in Progress</p> */}
                    <p>Status: ✅Mission in Accomplishes</p>
                  </div>
                </div>

                {/* <div className="roadmap roadmap-s2 roadmap-i3">
                        <h6 className="roadmap-year-s2">Q3 2018</h6>
                        <h5 className="title title-sm roadmap-date">Sep - Oct 2018</h5>
                        <div className="roadmap-text">
                            <p>Start Private Token Sale Round to our contributors.</p>
                        </div>
                    </div> */}
                <div className="roadmap roadmap-s2 roadmap-i3 roadmap-finished">
                  <h6 className="roadmap-year-s2">Conceptualization</h6>
                  <h5 className="title title-sm roadmap-date">
                    Start: Q4 2021
                  </h5>
                  <div className="roadmap-text">
                    <p>Status: ✅Mission on Accomplishes</p>
                  </div>
                </div>

                <div className="roadmap roadmap-s2 roadmap-i4 roadmap-finished">
                  <h6 className="roadmap-year-s2">Private Sale Start</h6>
                  <h5 className="title title-sm roadmap-date">
                    Start: Q4 2022
                  </h5>
                  <div className="roadmap-text">
                    <p>Status: ✅Mission on Accomplishes</p>
                  </div>
                </div>

                <div className="roadmap roadmap-s2 roadmap-i5">
                  <h6 className="roadmap-year-s2">ICO Public Sales Launch</h6>
                  <h5 className="title title-sm roadmap-date">
                    Start: Q1 2023
                  </h5>
                  <div className="roadmap-text">
                    <p>Status: ⏱Mission on Standby</p>
                  </div>
                </div>

                <div className="roadmap roadmap-s2 roadmap-i6">
                  <h6 className={style.roadmap_year_s1}>
                    Exchange Platform Launch and<br />Third-Party Listing
                  </h6>
                  <h5 className="title title-sm roadmap-date">
                    Start: Q2 2023
                  </h5>
                  <div className="roadmap-text">
                    <p>Status: ⏱Mission on Standby</p>
                  </div>
                </div>

                <div className="roadmap roadmap-s2 roadmap-i7">
                  <h6 className={style.roadmap_year_s1}>
                    Copy Trade & Bot Trading<br />Platform Development
                  </h6>
                  <h5 className="title title-sm roadmap-date">
                    Start: Q4 2023
                  </h5>
                  <div className="roadmap-text">
                    <p>Status: ⏱Mission on Standby</p>
                  </div>
                </div>

                <div className="roadmap roadmap-s2 roadmap-i8">
                  <h6 className={style.roadmap_year_s1}>
                    {" "}
                    VIP Rewards<br />Implementation
                  </h6>
                  <h5 className="title title-sm roadmap-date">
                    Start: Q1 2024
                  </h5>
                  <div className="roadmap-text">
                    <p>Status: ⏱Mission on Standby</p>
                  </div>
                </div>

                <div className="roadmap roadmap-s2 roadmap-i9">
                  <h6 className={style.roadmap_year_s1}>
                    {" "}
                    Lending & Borrow<br />Implementation
                  </h6>
                  <h5 className="title title-sm roadmap-date">
                    Start: Q2 2024
                  </h5>
                  <div className="roadmap-text">
                    <p>Status: ⏱Mission on Standby</p>
                  </div>
                </div>

                <div className="roadmap roadmap-s2 roadmap-i10">
                  <h6 className={style.roadmap_year_s1}>
                    NFTs Marketplace <br />Implementation
                  </h6>
                  <h5 className="title title-sm roadmap-date">
                    Start: Q4 2024
                  </h5>
                  <div className="roadmap-text">
                    <p>Status: ⏱Mission on Standby</p>
                  </div>
                </div>

                {/* <div className="roadmap roadmap-s2 roadmap-i5">
                        <h6 className="roadmap-year-s2">Q1 2019</h6>
                        <h5 className="title title-sm roadmap-date">Jan - Apr 2019</h5>
                        <div className="roadmap-text">
                            <p>Release of the initial versions of operational applications and smart contracts.</p>
                        </div>
                    </div>
                    <div className="roadmap roadmap-s2 roadmap-i6">
                        <h6 className="roadmap-year-s2">Q2 2019</h6>
                        <h5 className="title title-sm roadmap-date">Jul - Aug 2019</h5>
                        <div className="roadmap-text">
                            <p>Creation of a decentralize martketplace to neural network adjacent coefficients.</p>
                        </div>
                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main >
  );
}

export default RoadMap;
