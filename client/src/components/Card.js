import React from "react";

function Card() {
  return (
    <main className="nk-pages tc-light">
    <section className="section bg-dark">
      <div className="container">
        {/* <div class="mt-5 row"><div class="hexa-items col-sm-3"><div class="hexa-item"><span class="hexa-num">01</span><div class="hexa-image "><img src="assets/img/metamask.png" alt="buy woof" class="metamask" /></div><span class="hexa-title">Create MetaMask wallet</span><span class="hexa-content">Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive HEXA.</span></div></div><div class="hexa-items col-sm-3"><div class="hexa-item"><span class="hexa-num">02</span><img src="assets/img/binance-wallet.png" alt="buy woof" class="hexa-image" /><span class="hexa-title">Send BNB to your wallet</span><span class="hexa-content">You can buy Binance (BNB) directly on MetaMask or transfer it to your MetaMask Wallet from exchanges like Coinbase or other DEX. Make sure to use BEP20 (BSC) when transferring.</span></div></div><div class="hexa-items col-sm-3"><div class="hexa-item"><span class="hexa-num">03</span><div class="hexa-image "><img src="assets/img/crypto-wallet-with-bitcoin-and-ethereum.png" alt="buy woof" class="connectwallet" /></div><span class="hexa-title">Connect your wallet to HexaFinity</span><span class="hexa-content">Access your wallet to HexaFInity by clicking 'Connect to a Wallet' and selecting MetaMask.</span></div></div><div class="hexa-items col-sm-3"><div class="hexa-item"><span class="hexa-num">04</span><img src="assets/img/nft-transfer-token.png" alt="buy woof" class="hexa-image" /><span class="hexa-title">Swap BNB for HEXA</span><span class="hexa-content">You can start swapping as soon as you have BNB available! Press 'Select a token' and enter the token address or search for it on the token list.</span></div></div></div> */}

        <div className="nk-block nk-block-features mgb-m30">
          <div className="row">
            <div className="col-lg-3">
              <div className="feature card text-center">
                {/* <div className="feature-icon dot"> */}
                <img style={{ height: "150px" }} src="hexa/img/metamask.png" />
                {/* <em className="icon ikon ikon-paricle-alt"></em> */}
                {/* </div> */}
                <div className="feature-text">
                  <h5 className="title title-sm">Create MetaMask wallet</h5>
                  <p>
                    Create a MetaMask Wallet using either a desktop computer or
                    an iOS/Android mobile device. That will allow you to buy,
                    sell, send, and receive HEXA.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature card text-center">
                <img
                  style={{ height: "150px" }}
                  src="hexa/img/binance-wallet.png"
                />
                <div className="feature-text text-center">
                  <h5 className="title title-sm">Send BNB to your wallet</h5>
                  <p>
                    You can buy Binance (BNB) directly on MetaMask or transfer
                    it to your MetaMask Wallet from exchanges like Coinbase or
                    other DEX. Make sure to use BEP20 (BSC) when transferring.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature card text-center">
                <img
                  style={{ height: "150px" }}
                  src="hexa/img/crypto-wallet.png"
                />
                <div className="feature-text text-center">
                  <h5 className="title title-sm">
                    Connect your wallet to HexaFinity
                  </h5>
                  <p>
                    Access your wallet to HexaFInity by clicking 'Connect to a
                    Wallet' and selecting MetaMask.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature card text-center">
                <img
                  style={{ height: "150px" }}
                  src="hexa/img/nft-transfer-token.png"
                />

                <div className="feature-text text-center">
                  <h5 className="title title-sm">Swap BNB for HEXA</h5>
                  <p>
                    You can start swapping as soon as you have BNB available!
                    Press 'Select a token' and enter the token address or search
                    for it on the token list.
                  </p>
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

export default Card;
