import React from 'react'
import { Link, useHistory } from "react-router-dom";

function NavBar() {
  let history = useHistory();
  return (
    <header
      className="nk-header page-header is-transparent is-sticky is-dark"
      id="header"
    >
      <div className="header-main">
        <div className="header-container container container-xxl">
          <div className="header-wrap">
            <div
              className="header-logo logo animated"
              data-animate="fadeInDown"
              data-delay=".6"
            >
              <Link to="/home" refresh="true" className="logo-link">
                <img
                  className="logo-dark"
                  src="hexa/img/HexaFinity.webp"
                  srcSet="hexa/img/HexaFinity.webp 2x"
                  alt="logo"
                />
                <img
                  className="logo-light"
                  src="hexa/img/HexaFinity.webp"
                  srcSet="hexa/img/HexaFinity.webp 2x"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="header-nav-toggle"><a
              data-menu-toggle="header-menu"
            >
              <div className="toggle-line">
                <span></span>
              </div>
            </a>
            </div>
            <div
              data-animate="fadeInDown"
              data-delay=".6"
            >
              <nav className="header-menu" id="header-menu">
                <ul className="menu">
                  <li className="menu-item ">
                    <Link to="/home" className="menu-link nav-link menu-toggle">
                      Home
                    </Link>
                  </li>
                  <li className="menu-item has-sub">
                    <a className="menu-link nav-link menu-toggle" href="#">
                      About
                    </a>
                    <ul className="menu-sub menu-drop menu-mega ">
                      <div className="menu-mega-innr">
                        <ul className="menu-mega-list">
                          <li className="menu-item">
                            <Link to="/token" href="element-button.html">
                              Token
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/team" href="element-content.html">
                              Team
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="/roadmap" href="element-table.html">
                              RoadMap
                            </Link>
                          </li>

                          <li className="menu-item">
                            <Link to="/home">Home</Link>
                          </li>
                          <li className="menu-item">
                            <a onClick={() => {
                              console.log("clicked")
                              history.push('/home')
                              // window.location(false)
                            }}>Home useHis</a>
                          </li>
                        </ul>

                      </div>
                    </ul>
                  </li>
                  <li className="menu-item has-sub">
                    <a className="menu-link nav-link menu-toggle" href="#">
                      Community
                    </a>
                    <ul className="menu-sub menu-drop">
                      <li className="menu-item">
                        <a href="element-alert.html">twitter</a>
                      </li>
                      <li className="menu-item">
                        <a href="element-button.html">Reddit</a>
                      </li>
                      <li className="menu-item">
                        <a href="element-content.html">Discord</a>
                      </li>
                      <li className="menu-item">
                        <a href="element-table.html">Instagram</a>
                      </li>

                    </ul>
                  </li>
                  <li className="menu-item ">
                    <a className="menu-link nav-link menu-toggle" href="#">
                      WhitePaper
                    </a>

                  </li>
                  <li className="menu-item">
                    <Link to="/blog" className="menu-link nav-link ">
                      Blog
                    </Link>


                  </li>
                </ul>

                <ul className="menu-btns">
                  <li>
                    <a
                      className="btn btn-md btn-thin btn-outline btn-auto btn-primary btn-round no-change"
                    >
                      <span>HexaSwap</span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        className="m-1"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.207 15.061L1 11.854v-.707L4.207 7.94l.707.707-2.353 2.354H15v1H2.56l2.354 2.353-.707.707zm7.586-7L15 4.854v-.707L11.793.94l-.707.707L13.439 4H1v1h12.44l-2.354 2.354.707.707z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar