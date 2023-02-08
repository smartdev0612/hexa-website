import React from "react";

import getImage from './../helpers/getImage';

function TeamPageNewSection() {
  return (
    <main className="nk-pages tc-light">
      <section className="section bg-dark">
        <div className="container">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-9">
                <div className="banner-caption cpn tc-light text-center">
                  <div className="cpn-head">
                    <h2 className="title ttu"> Our Team - members</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="nk-block nk-block-team-list team-list">
            <div className="row justify-content-start gutter-vr-30px">
              <div className="col-lg-3 col-sm-6">
                <div className="team team-s4 round bg-light-custom">
                  <div className="team-photo team-photo-s1 round-full">
                    <img
                      src={getImage(`avatars/team/creed.png`)}
                      alt="team"
                      className="round-full"
                    />
                  </div>
                  <h5 className="team-name">Creed J</h5>
                  <span className="team-position tc-primary">
                    Senior Blockchain Engineer
                  </span>
                  <div className="team-desc">
                  </div>
                  <ul className="team-social team-social-s2">
                    <li>
                      <a href="#">
                        <em className="fab fa-linkedin-in"></em>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="fab fa-facebook-f"></em>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="fab fa-twitter"></em>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team team-s4 round bg-light-custom">
                  <div className="team-photo team-photo-s1 round-full">
                    <img
                      src={getImage(`avatars/team/emily.png`)}
                      alt="team"
                      className="round-full"
                    />
                  </div>
                  <h5 className="team-name">Emily Cooper</h5>
                  <span className="team-position tc-primary">
                    Blockchain Developer
                  </span>
                  <div className="team-desc">
                  </div>
                  <ul className="team-social team-social-s2">
                    <li>
                      <a href="#">
                        <em className="fab fa-linkedin-in"></em>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="fab fa-facebook-f"></em>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="fab fa-twitter"></em>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team team-s4 round bg-light-custom">
                  <div className="team-photo team-photo-s1 round-full">
                    <img
                      src={getImage(`avatars/team/ashlee.jpg`)}
                      alt="team"
                      className="round-full"
                    />
                  </div>
                  <h5 className="team-name">Ashlee C</h5>
                  <span className="team-position tc-primary">
                    Senior Digital Marketing
                  </span>
                  <div className="team-desc">
                  </div>
                  <ul className="team-social team-social-s2">
                    <li>
                      <a href="#">
                        <em className="fab fa-linkedin-in"></em>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="fab fa-facebook-f"></em>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="fab fa-twitter"></em>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="team team-s4 round bg-light-custom">
                  <div className="team-photo team-photo-s1 round-full">
                    <img
                      src={getImage(`avatars/team/rachel.jpg`)}
                      alt="team"
                      className="round-full"
                    />
                  </div>
                  <h5 className="team-name">Rachel B</h5>
                  <span className="team-position tc-primary">
                    Content Marketing
                  </span>
                  <div className="team-desc">
                  </div>
                  <ul className="team-social team-social-s2">
                    <li>
                      <a href="#">
                        <em className="fab fa-linkedin-in"></em>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="fab fa-facebook-f"></em>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="fab fa-twitter"></em>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TeamPageNewSection;
