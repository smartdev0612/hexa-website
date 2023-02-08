import React from 'react'

function MvpPage() {
  return (
    <main className="nk-pages tc-light">
    <section className="section py-5" id="mvp">

    <div className="container">
        <div className="row justify-content-center text-center">
            <div className="col-lg-12">
                <div className="section-head section-head-s2">
                    <h2 className="title title-xl animated" data-animate="fadeInUp" data-delay="0.1" title=" - ">How can you participate in HexaFinity</h2>
                    <p className="animated" data-animate="fadeInUp" data-delay="0.2">As a user, you can participate in HexaFinity in six different ways:</p>
                </div>
            </div>
        </div>
    </div>
    <div className="container container-xxl">
        <div className="nk-block">
            <div className="row align-items-center justify-content-center justify-content-xl-between gutter-vr-30px">
                <div className="col-xxl-6 col-xl-6 col-lg-8">
                    <div className="nk-block-img animated" data-animate="fadeInUp" data-delay="0.3">
                        <img className="w-100 shadow rounded" src="hexa/img/image.webp" alt="" />
                        {/* <img className="nk-block-img-plx plx-screen shadow rounded" src="hexa/img/logo (2).png" alt="" /> */}
        
                    </div>
                </div>
                <div className="col-xxl-5 col-xl-6 col-lg-8">
                    <div className="nk-block-text">
                        <div className="feature feature-inline animated" data-animate="fadeInUp" data-delay="0.4">
                            <div className="feature-icon feature-icon-md">
                                <em className="icon icon-xs icon-circle fas fa-check"></em>
                            </div>
                            <div className="feature-text">
                                <p>Trader: As a trader, you can swap cryptocurrency safely using our swap feature. Also, traders can borrow funds from the Vault on margin, entrusting strategic contracts to execute transactions through our exchange or any other exchange..</p>
                            </div>
                        </div>
                        <div className="feature feature-inline animated" data-animate="fadeInUp" data-delay="0.5">
                            <div className="feature-icon feature-icon-md">
                                <em className="icon icon-xs icon-circle fas fa-check"></em>
                            </div>
                            <div className="feature-text">
                                <p>Lender: HexaFinity allows you to earn a return on your base assets by depositing them into the VBank. These assets will then be offered to yield farmers or margin trading investors to leverage their positions.</p>
                            </div>
                        </div>
                        <div className="feature feature-inline animated" data-animate="fadeInUp" data-delay="0.6">
                            <div className="feature-icon feature-icon-md">
                                <em className="icon icon-xs icon-circle fas fa-check"></em>
                            </div>
                            <div className="feature-text">
                                <p>Staker: As a Time-Deposit Staker, you mint shares by time-locking (Staking) your HEXA token for up to 60% APY rewards.</p>
                            </div>
                        </div>
                        <div className="feature feature-inline animated" data-animate="fadeInUp" data-delay="0.7">
                            <div className="feature-icon feature-icon-md">
                                <em className="icon icon-xs icon-circle fas fa-check"></em>
                            </div>
                            <div className="feature-text">
                                <p>Farmer: As a farmer, you can earn a higher yield by opening a leveraged position on HexaFiity. Of course, this comes with risks: liquidation, impermanent loss, etc.</p>
                            </div>
                        </div>
                        <div className="feature feature-inline animated" data-animate="fadeInUp" data-delay="0.8">
                            <div className="feature-icon feature-icon-md">
                                <em className="icon icon-xs icon-circle fas fa-check"></em>
                            </div>
                            <div className="feature-text">
                                <p>VIP, Regular & Visitor: Our users are divided into three categories. Users on the VIP and Regular tier enjoy low to zero exchange fees along with exchange rewards.</p>
                            </div>
                        </div>
                        <div className="feature feature-inline animated" data-animate="fadeInUp" data-delay="0.8">
                            <div className="feature-icon feature-icon-md">
                                <em className="icon icon-xs icon-circle fas fa-check"></em>
                            </div>
                            <div className="feature-text">
                                <p>NFT Collector: HexaFinity also offers the opportunity for collectors to get their hands on our highly exclusive NFTs. Not only are our NFTs beautifully designed, but they also provide real tangible use cases.</p>
                            </div>
                        </div>
                        <div className="text-center text-sm-left animated" data-animate="fadeInUp" data-delay="0.9">
                            <a href="#" className="btn btn-round btn-primary">Create New Account</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</section>
</main>
  )
}

export default MvpPage