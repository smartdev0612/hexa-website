import React from 'react';

import style from './../assets/styles/token/index.module.css';

function TokenPage() {
    return (
        <main className="nk-pages">
            <section className="section tc-light">

                <div className="container">
                    <div className="section-head text-center wide-auto-sm wide-auto">
                        <h2 className="title">How Hexa is Used?</h2>
                    </div>
                    <div className="nk-block nk-block-features-s3">
                        <div className="row justify-content-center gutter-vr-30px">
                            <div className="col-lg-6 col-md-10">
                                <div className={`feature feature-s3 feature-center card-custom ${style.card}`}>
                                    <div className="feature-icon">
                                        <em className="icon icon-lg ikon ikon-cloud"></em>
                                    </div>
                                    <div className="feature-text">
                                        <h4 className="title title-md title-dark">Hexa Wallet</h4>
                                        <p>HEXA Wallet is a self-custody crypto wallet, putting you in control of your crypto, keys, and data.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10">
                                <div className={`feature feature-s3 feature-center card-custom ${style.card}`}>
                                    <div className="feature-icon">
                                        <em className="icon icon-lg ikon ikon-safety"></em>
                                    </div>
                                    <div className="feature-text">
                                        <h4 className="title title-md title-dark">HEXA Governance</h4>
                                        <p>
                                            HEXA act as a governance token on our DEX, allowing HEXA holders to influence decisions concerning the project as proposing or deciding on new features proposals and assist in shaping our DEX future.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10">
                                <div className={`feature feature-s3 feature-center card-custom ${style.card}`}>
                                    <div className="feature-icon">
                                        <em className="icon icon-lg ikon ikon-cash"></em>
                                    </div>
                                    <div className="feature-text">
                                        <h4 className="title title-md title-dark">
                                            Zero-hassle Loans
                                        </h4>
                                        <p>
                                            Use your HEXA Token to borrow stablecoins and other cryptocurrencies with no credit check. Everything is done fast directly on the Binance Smart Chain.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-10">
                                <div className={`feature feature-s3 feature-center card-custom ${style.card}`}>
                                    <div className="feature-icon">
                                        <em className="icon icon-lg ikon ikon-globe"></em>
                                    </div>
                                    <div className="feature-text">
                                        <h4 className="title title-md title-dark">
                                            Borderless usability
                                        </h4>
                                        <p>
                                            HexaFinity can be integrated with merchants, exchanges, and wallets just as easily as Bitcoin or any other cryptocurrency.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="bg-theme tc-pattern-dots" id="tokens">
                <div className="section-l section-tokensale tc-light">

                    <div className="container">

                        <div className="section-head text-center wide-auto">
                            <h2 className="title">Hexa Tokens</h2>

                            <p>The world's first decentralized market with blockchain infrastructure.</p>
                        </div>

                        <div className="nk-block nk-block-token mgb-m30">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="token-info bg-theme">
                                        <h4 className="title title-md mb-2 text-sm-center">Hexa Information</h4>
                                        <table className="table table-token">
                                            <tbody>
                                                <tr>
                                                    <td className="table-head">Public Sale Starts</td>
                                                    <td className="table-des">----</td>
                                                </tr>
                                                <tr>
                                                    <td className="table-head">Public Sale Ends</td>
                                                    <td className="table-des">----</td>
                                                </tr>
                                                <tr>
                                                    <td className="table-head">Total Token Supply</td>
                                                    <td className="table-des">6,000,000,000,000</td>
                                                </tr>
                                                <tr>
                                                    <td className="table-head">Initial liquidity Offerring</td>
                                                    <td className="table-des">-----</td>
                                                </tr>
                                                <tr>
                                                    <td className="table-head">initial distribution supply</td>
                                                    <td className="table-des">3,060,000,000,000 or 51% </td>
                                                </tr>
                                                <tr>
                                                    <td className="table-head">Soft Cap</td>
                                                    <td className="table-des">-----</td>
                                                </tr>
                                                <tr>
                                                    <td className="table-head">Token Value 1 BNB</td>
                                                    <td className="table-des">30,000,000</td>
                                                </tr>
                                                <tr>
                                                    <td className="table-head">Accepted</td>
                                                    <td className="table-des">BNB, BUSD, USDT</td>
                                                </tr>
                                                <tr>
                                                    <td className="table-head">Contract Address</td>
                                                    <td className="table-des">
                                                        <a href={`https://pancakeswap.finance/swap?outputCurrency=0x1e2d26b6351bfFE970baB183C25E267d9c0d1223`} target={`_blank`}>
                                                            0x1e2d26b6351bfFE970baB183C25E267d9c0d1223
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="col-lg-5">
                                    <div className="className">
                                        <div className="token-status bg-theme">
                                            <h4 className="title title-md">Token Sale Stage End In</h4>
                                            <div className="token-countdown countdown" data-date="2021/08/10"></div>
                                            <div className="progress-wrap progress-wrap-point">
                                                <span className="progress-info">Raised so far <span>$-,---,---</span></span>
                                                <div className="progress-bar">
                                                    <div className="progress-percent tc-grad" data-percent="30"></div>
                                                    <div className="progress-point progress-point-1">Soft Cap <span>$-.--m</span></div>
                                                    <div className="progress-point progress-point-2">Hard Cap <span>$-.--m</span></div>
                                                </div>
                                            </div>
                                            <a href="#" className="btn btn-grad">Register &amp; Buy Hexa</a>
                                            <span className="token-min">Minimum Purchase: --- Hexa</span>
                                        </div>
                                        <div className="bonus bg-theme">
                                            <div className="bonus-info">
                                                <div className="bonus-percent">50% <small>Bonus</small></div>
                                                <div className="bonus-date">End at 30 Nov, 2022</div>
                                                <span className="bonus-badge badge-xs">Now</span>
                                            </div>
                                            <div className="bonus-info">
                                                <div className="bonus-percent">25%<small>Bonus</small></div>
                                                <div className="bonus-date">Start at 01 Dec, 2023</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="section section-partners tc-light" id="partners">

                <div className="container">

                    <div className="nk-block block-partners">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <h3 className="title title-lg text-center">Our Partners</h3>
                                <ul className="partner-list partner-list-lg">

                                    <li className="partner-logo"><img src="images/partners/a.png" alt="partner" /></li>
                                    <li className="partner-logo"><img src="images/partners/f.png" alt="partner" /></li>
                                    <li className="partner-logo"><img src="images/partners/g.png" alt="partner" /></li>
                                    <li className="partner-logo"><img src="images/partners/e.png" alt="partner" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default TokenPage