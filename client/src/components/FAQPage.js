import React from "react";

function FAQPage() {
  return (
    <main className="nk-pages tc-light">
    <section className="section py-5" id="faqs">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="section-head section-head-s2">
              <h2
                className="title title-xl animated"
                data-animate="fadeInUp"
                data-delay="0.1"
                title="FAQS"
              >
                FAQS
              </h2>
              <p className="animated" data-animate="fadeInUp" data-delay="0.2">
                Below we’ve provided a bit of Hexa, cryptocurrencies, and few
                others. If you have any other questions, please get in touch.
              </p>
            </div>
          </div>
        </div>

        <div className="nk-block">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <ul
                className="nav tab-nav tab-nav-btn tab-nav-btn-bdr tab-nav-center pdb-r animated"
                data-animate="fadeInUp"
                data-delay="0.3"
              >
                <li>
                  <a className="active" data-toggle="tab" href="#tab-2-1">
                    General Questions
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#tab-2-2">
                    Platform - Hexa Questions
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#tab-2-3">
                    Trading Fees
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#tab-2-4">
                    {" "}
                    Use Case
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-2-1">
                  <div className="accordion" id="acc-1">
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.4"
                    >
                      <h5
                        className="accordion-title accordion-title-sm"
                        data-toggle="collapse"
                        data-target="#acc-1-1"
                      >
                        What is HexaInfinity?{" "}
                        <span className="accordion-icon"></span>
                      </h5>
                      <div
                        id="acc-1-1"
                        className="collapse show"
                        data-parent="#acc-1"
                      >
                        <div className="accordion-content">
                          <p>
                            HexaFinity is a next-generation decentralized
                            exchange (DEX) that enables lightning-fast trades at
                            a low fee. We are the only DEX that offers variable
                            fees as low as 0%, along with trading rewards. We
                            combine Dex services with DeFi to offer Lending &
                            Borrowing functions, Time Deposit Staking, and Yield
                            farming. In addition, we are an automated market
                            maker (AMM) built on the Binance Smart Chain.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.5"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-1-2"
                      >
                        Is DeFi Safe? <span className="accordion-icon"></span>
                      </h5>
                      <div
                        id="acc-1-2"
                        className="collapse"
                        data-parent="#acc-1"
                      >
                        <div className="accordion-content">
                          <p>
                            As of right now, DeFi is still growing and operates
                            in slightly uncharted territory. However, many
                            innovations are to be incorporated and many security
                            features to be built, so make sure that you research
                            and study everything accordingly and attentively
                            before jumping into any project. We want to see
                            Binance develop a system lock in place that makes it
                            impossible for developers to act untruthfully
                            towards users.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.6"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-1-3"
                      >
                        How can I participate in the Hexa Token sale?{" "}
                        <span className="accordion-icon"></span>
                      </h5>
                      <div
                        id="acc-1-3"
                        className="collapse"
                        data-parent="#acc-1"
                      >
                        <div className="accordion-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam aliquet sagittis ipsum et posuere. Cras
                            quis odio dapibus nisl rhoncus.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.7"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-1-4"
                      >
                        How do I buy hexa{" "}
                        <span className="accordion-icon"></span>
                      </h5>
                      <div
                        id="acc-1-4"
                        className="collapse"
                        data-parent="#acc-1"
                      >
                        <div className="accordion-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam aliquet sagittis ipsum et posuere. Cras
                            quis odio dapibus nisl rhoncus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-2-2">
                  <div className="accordion" id="acc-2">
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.4"
                    >
                      <h5
                        className="accordion-title accordion-title-sm"
                        data-toggle="collapse"
                        data-target="#acc-2-1"
                      >
                        Exchange <span className="accordion-icon"></span>
                      </h5>
                      <div
                        id="acc-2-1"
                        className="collapse show"
                        data-parent="#acc-2"
                      >
                        <div className="accordion-content">
                          <p>
                            HexaFinity is an automated market maker (AMM) built
                            on the Binance Smart Chain. HexaFinity automated the
                            order process of the Binance order book. Our
                            decentralized exchange (DEX) enables lightning-fast
                            trades with low fees from (0% to 0.2%). We are the
                            only DEX that offers variable fees as low as 0%,
                            along with trading rewards. We combine Dex services
                            with DeFi to offer Lending & Borrowing functions,
                            Time Deposit Staking, Non-fungible Tokens, and Yield
                            farming. HexaFinity enables users to trade freely,
                            peer-to-peer, with liquidity that other users
                            supply. This means that new projects can easily
                            connect to their desired markets as long as some
                            entity is willing to provide the liquidity. BSC was
                            chosen over other blockchains because of Binance
                            Smart Chain reliability, scalability, and security.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.5"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-2-2"
                      >
                        Trading Platform<span className="accordion-icon"></span>
                      </h5>
                      <div
                        id="acc-2-2"
                        className="collapse"
                        data-parent="#acc-2"
                      >
                        <div className="accordion-content">
                          <p>
                            HexaFinity exchange provides a straightforward,
                            cost-effective, and reliable option for quickly
                            swapping one token for another. The swapping feature
                            is a standard feature on other AMM platforms;
                            however, the cost-effectiveness and simplicity of
                            executing swaps along with many rich DeFi features
                            will lead the way to adopt the crypto ecosystem.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.6"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-2-3"
                      >
                        Swap <span className="accordion-icon"></span>
                      </h5>
                      <div
                        id="acc-2-3"
                        className="collapse"
                        data-parent="#acc-2"
                      >
                        <div className="accordion-content">
                          <p>
                            For users who do not require our order books but
                            enjoy low-cost gas prices and trading fees,
                            HexaFinity has implemented this feature for users
                            who want to swap their tokens.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.7"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-2-4"
                      >
                        Liquidity Vault <span className="accordion-icon"></span>
                      </h5>
                      <div
                        id="acc-2-4"
                        className="collapse"
                        data-parent="#acc-2"
                      >
                        <div className="accordion-content">
                          <p>
                            Liquidity vault are places to store tokens (which we
                            sometimes call liquidity) to use to make trades in a
                            decentralized way. These vaults are created by users
                            and decentralized apps (or Dapps, for short) who
                            want to profit from their usage. To store liquidity,
                            the amounts a user supplies must be equally divided
                            between two coins: the primary token and the second
                            token. You can only swap tokens on HexaFinity if
                            there is enough liquidity for those tokens to be
                            swapped. If nobody has added liquidity for the
                            tokens or tokens you want to swap, it will be
                            difficult, expensive, or impossible to do so.
                            Providing liquidity will get you LV Tokens, which
                            will earn you rewards in the form of trading fees
                            for providing liquidity for the exchange to use.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-2-3">
                  <div className="accordion" id="acc-3">
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.4"
                    >
                      <h5
                        className="accordion-title accordion-title-sm"
                        data-toggle="collapse"
                        data-target="#acc-3-1"
                      >
                        Trading Fees<span className="accordion-icon"></span>
                      </h5>
                      <div
                        id="acc-3-1"
                        className="collapse show"
                        data-parent="#acc-3"
                      >
                        <div className="accordion-content">
                          <p>
                            HexaFinity provides advantages over the traditional
                            financial product by eliminating the middlemen,
                            providing global and equal access, and allowing
                            users full control of their funds at all times. Why
                            pay higher fees? With variable trading fees for
                            regular and VIP users. Our trading fees vary from
                            0.2% to 0%, which are lower than most exchanges.
                            When a regular user makes a swap on the exchange, a
                            trading fee of 0.2% will be charged, which is
                            distributed in the following way: 0.1% - Returned to
                            Liquidity Vault in the form of a fees reward for
                            liquidity providers. 0.06% - Sent to the HexaVault
                            0.04% - HEXA buyback and burn
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.5"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-3-2"
                      >
                        Fee Structures <span className="accordion-icon"></span>
                      </h5>
                      <div
                        id="acc-3-2"
                        className="collapse"
                        data-parent="#acc-3"
                      >
                        <div className="accordion-content">
                          <p>
                            Our trading fees are different for regular and VIP
                            users. Our variable trading fees range between 0.2%
                            to 0%. Our typical fee is 0.2% for swapping tokens,
                            0.03% staking fee, and 0.2% unstaking fees. In
                            addition, 0.01% of the total fees are redeposited
                            into the Infinity Pool and reward Yield Farmers.
                            Additionally, 0.006 is sent to the HexaVault Staking
                            Pool and rewards those staking their HEXA and other
                            tokens; the 0.004% remaining is used to buy back and
                            burn HEXA. Swapping fees are immediately deposited
                            into liquidity reserves. This increases the value of
                            liquidity tokens, functioning as a payout to all
                            liquidity providers proportional to their share of
                            the vault. Fees are collected by burning liquidity
                            tokens to remove a proportionate share of the
                            underlying reserves.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.6"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-3-3"
                      >
                        Lorem ipsum dolor sit amet,{" "}
                        <span className="accordion-icon"></span>
                      </h5>
                      <div
                        id="acc-3-3"
                        className="collapse"
                        data-parent="#acc-3"
                      >
                        <div className="accordion-content">
                          <p>
                            Once ICO period is launched, You can purchased Token
                            with Etherum, Bitcoin or Litecoin. You can also
                            tempor incididunt ut labore et dolore magna aliqua
                            sed do eiusmod eaque ipsa.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.7"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-3-4"
                      >
                        Lorem ipsum dolor sit amet,{" "}
                        <span className="accordion-icon"></span>
                      </h5>
                      <div
                        id="acc-3-4"
                        className="collapse"
                        data-parent="#acc-3"
                      >
                        <div className="accordion-content">
                          <p>
                            Once ICO period is launched, You can purchased Token
                            with Etherum, Bitcoin or Litecoin. You can also
                            tempor incididunt ut labore et dolore magna aliqua
                            sed do eiusmod eaque ipsa.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-2-4">
                  <div className="accordion" id="acc-4">
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.4"
                    >
                      <h5
                        className="accordion-title accordion-title-sm"
                        data-toggle="collapse"
                        data-target="#acc-4-1"
                      >
                        Use Case<span className="accordion-icon"></span>
                      </h5>
                      <div
                        id="acc-4-1"
                        className="collapse show"
                        data-parent="#acc-4"
                      >
                        <div className="accordion-content">
                          <p>
                            Cryptocurrencies' primary advantages are low
                            transaction costs, international borderless
                            transferability and convertibility, trustless
                            ownership and exchange, pseudo-anonymity, real-time
                            transparency, and immunity from legacy banking
                            system problems. Common explanations for the current
                            limited mainstream use of cryptocurrencies include
                            volatile price swings, inadequate market
                            understanding of the technology, insufficient
                            ease-of-use for non-technical users, and security.
                            HexaFinity is a protocol for easy token exchange on
                            the Binance Smart Chain. We ensure that everyone –
                            from beginner cryptocurrency enthusiasts to pro
                            traders - can trade on our platform seamlessly.
                            HexaFinity It is designed around ease-of-use, gas
                            efficiency, bank-grade security, and censorship
                            resistance.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.5"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-4-2"
                      >
                        Function <span className="accordion-icon"></span>
                      </h5>
                      <div
                        id="acc-4-2"
                        className="collapse"
                        data-parent="#acc-4"
                      >
                        <div className="accordion-content">
                          <p>
                            HEXA tokens can be used just like bitcoins, i.e., in
                            a p2p, pseudo-anonymous, decentralized,
                            cryptographically secure environment<br></br>
                            <br></br>
                            HexaFinity can be integrated with merchants,
                            exchanges, and wallets just as easily as Bitcoin or
                            any other cryptocurrency.<br></br>
                            <br></br>
                            HexaFinity inherits the properties of the Binance
                            Smart Chain, which include: a decentralized
                            exchange; browser-based, open-source, wallet
                            encryption; Binance-based transparency,
                            accountability, multi-party security, and reporting
                            functions.<br></br>
                            <br></br>
                            HexaFinity will not face any market risks such as
                            Black Swan events, liquidity crunches, etc., as 3
                            reserves are maintained in a one-to-one ratio rather
                            than relying on market forces.<br></br>
                            <br></br>
                            Simple Crypto swap (without leaving our exchange)
                            <br></br>
                            <br></br>
                            To promote a healthy ecosystem, HexaFinity will
                            reward its user for being active.<br></br>
                            <br></br>
                            We want to facilitate the crypto transaction by
                            allowing consumers to pay through our wallet using
                            cryptocurrencies when shopping.<br></br>
                            <br></br>
                            Multichain Bridge: HexaFinity Bridge will allow
                            users to exchange HEXA for any crypto in any chains
                            <br></br>
                            <br></br>A new experience: The all-in-one DeFi
                            suite. Trade, Farm, Stake, NFT, and Borrow/Loan
                            digital assets directly from your wallet. Near zero
                            fees and instant transactions – DeFi for everyone.
                            <br></br>
                            <br></br>
                            Liquid staking uses your staked HEXA as collateral
                            for DeFi. Your delegations are liquid within the
                            Binance ecosystem. Lend and borrow digital assets to
                            trade and earn interests without losing exposure to
                            your BNB
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.6"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-4-3"
                      >
                        Objective
                        <span className="accordion-icon"></span>
                      </h5>
                      <div
                        id="acc-4-3"
                        className="collapse"
                        data-parent="#acc-4"
                      >
                        <div className="accordion-content">
                          <p>
                            At any given time, the balance of fiat currency held
                            in our reserves will equal (or greater than) the
                            number of HEXA tokens in circulation. This simple
                            configuration most easily supports a reliable Proof
                            of Reserves process; This process is fundamental to
                            maintaining the price-parity between HEXA in
                            circulation and the underlying fiat currency held in
                            reserves.
                          </p>
                          <img src="hexa/img/useCase.webp" className="img-position"/>
                        </div>
                      </div>
                    </div>
                    <div
                      className="accordion-item accordion-item-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="0.7"
                    >
                      <h5
                        className="accordion-title accordion-title-sm collapsed"
                        data-toggle="collapse"
                        data-target="#acc-4-4"
                      >
                        Use cases
                        <span className="accordion-icon"></span>
                      </h5>
                      <div
                        id="acc-4-4"
                        className="collapse"
                        data-parent="#acc-4"
                      >
                        <div className="accordion-content">
                          <p>
                            Use Case #1<br></br>
                            <b>Ms. Suzy, </b>the lender, deposits her BNB into
                            the Vault; his assets become available to borrow for
                            a farmer of leveraged yield farming or a trader of
                            farming trading; he earns returns from debt
                            interests paid by farmers or traders borrowed BNB
                            from the Bank.<br></br>
                            <br></br>
                            Mr. Derick, the yield farmer, wants to open a
                            leveraged yield farming position on the BNB/HEXA
                            pair with 3x leverage; he borrows BNB from the Vault
                            and enjoys 3 times of yield farming rewards while
                            being obligated to pay back equal value BNB and pay
                            borrowing interest when closing positions.<br></br>
                            <br></br>
                            Mr. Robert, the margin trading investor, is
                            optimistic about BNB. She can open a long position
                            for BNB with 6 times leverage through HexaFinity,
                            providing BNB as a principal and borrowing USDT from
                            HexaFinity Vault to buy BNB and entrust it to
                            HexaFiity Vault Contract. Ms. C will pay borrowing
                            interest to HexaFinity Vault for the USDT loan and
                            get 6 times amplified gains from the rise in BNB
                            price.<br></br>
                            <br></br>
                            Mr. Sheldon enjoys low risk earning; so, he
                            Time-Locked his HEXA token, earning up to 60% APY
                            while avoiding high-risk trading.<br></br>
                            <br></br>
                            Ms. Bayleigh is tired of paying high exchange fees;
                            so, she turned to HexaFinity protocol and held a
                            5.6m HEXA token, and by doing this, she avoided
                            paying the exchange fees.<br></br>
                            <br></br>
                            Use Case #2<br></br>
                            <br></br>
                            Without any bankers or third parties involved, the
                            protocol will calculate his collateral value and let
                            him take an over-collateralized loan on it. He
                            borrows USDC instantly and uses his crypto exchange
                            account to convert it into local fiat currency. Now
                            Derick has enough funds to buy his dream house while
                            waiting for the markets. He is not obliged to make
                            any monthly payments, and his collateral
                            appreciation can be used in his favor. He can make
                            payments at any time and pay no additional interest
                            as interest rates are compounded per block.<br></br>
                            <br></br>
                            Lastly, Derick has been paying attention to DeFi and
                            all the new yield farming high APY returns he could
                            earn. These potential earnings may be short-lived
                            but are fundamental for the time being. How does
                            Derick take advantage of this? Does he want to jump
                            through hurdles to get some of his collateral out to
                            stake crypto on another protocol? No – Derick wants
                            a one-stop-shop solution so he can participate in
                            yield farming quickly. Within the dashboard or the
                            smart contracts, she can stake crypto without any
                            central authority and use the reward earned from
                            crypto staking onto the latest DeFi yield farming
                            project with ease.<br></br>
                            <br></br>
                            Use Case #3<br></br>
                            <br></br>
                            Derick wants to buy his new dream house, but the
                            bankers have declined his application. Derick has
                            been a cryptocurrency advocate for years and has a
                            good portfolio but doesn't want to expose herself to
                            capital gains tax to sell the asset or earn any
                            potential appreciation. Then again, Derick believes
                            in the underlying technology of cryptocurrencies as
                            she believes in the mid and long-term growth of the
                            asset class. So what does Derick do? He can't use
                            his bank to borrow money from his asset class. He
                            can't sell at the moment and expose herself to taxes
                            and missing opportunities.<br></br>
                            <br></br>
                            Derick turns to the HexaFinity protocol using the
                            token canal project to move his XRP from the XRP
                            Ledger to the Binance Smart Chain with no fees. He
                            then utilizes his browser and the internet to access
                            the HexaFinity Dashboard and supplies his XRP to the
                            protocol. He is now benefiting from the potential
                            price appreciation of her XRP while earning a modest
                            APY on his supply. He then prepares to take a loan
                            in USDC by calculating how much he needs, then
                            utilizing the dashboard to take the loan.<br></br>
                            <br></br>
                          </p>
                        </div>
                      </div>
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

export default FAQPage;
