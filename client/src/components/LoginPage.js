import React from 'react'

function LoginPage() {
  return (
    <div className="nk-body body-wider bg-light-alt page-loaded chrome no-touch nk-nio-theme">

	<div className="nk-wrap">
    
        <main className="nk-pages nk-pages-centered bg-theme">
            <div className="ath-container">
                <div className="ath-header text-center">
                {/* <img className="logo-light" src="hexa/img/HexaFinity.webp" srcSet="hexa/img/HexaFinity.webp 2x" alt="logo" /> */}

                    <a href="./" className="ath-logo"><img style={{height: "100px"}} src="hexa/img/HexaFinity.webp" srcset="images/logo-full-white2x.png 2x" alt="logo" /></a>
                </div>
                <div className="ath-body">
                    <h5 className="ath-heading title">Sign in <small className="tc-default">with your HexaFinity Account</small></h5>
                    <form action="./">
                        <div className="field-item">
                            <div className="field-wrap">
                                <input type="text" className="input-bordered" placeholder="Your Email" />
                            </div>
                        </div>
                        <div className="field-item">
                            <div className="field-wrap">
                                <input type="password" className="input-bordered" placeholder="Password" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center pdb-r">
                            <div className="field-item pb-0">
                                <input className="input-checkbox" id="remember-me-2" type="checkbox" />
                                <label for="remember-me-2">Remember Me</label>
                            </div>
                            <div className="forget-link fz-6">
                                <a href="page-reset.html">Forgot password?</a>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block btn-md">Sign In</button>
                    </form>
                    <div className="sap-text"><span>Or Sign In With</span></div>

                    <ul className="row gutter-20px gutter-vr-20px">
                        <li className="col"><a href="#" className="btn btn-md btn-facebook btn-block"><em className="icon fab fa-facebook-f"></em><span>Facebook</span></a></li>
                        <li className="col"><a href="#" className="btn btn-md btn-google btn-block"><em className="icon fab fa-google"></em><span>Google</span></a></li>
                    </ul>
                </div>
                <div className="ath-note text-center tc-light">
                    Don’t have an account? <a href="page-register.html"> <strong>Sign up here</strong></a>
                </div>
            </div>
        </main>
    
	</div>
	<div className="preloader" style={{display: "none"}}><span className="spinner spinner-round load-done" tyle={{display: "none"}}></span></div>
	

	<script src="assets/js/jquery.bundle.js?ver=1930"></script>
	<script src="assets/js/scripts.js?ver=1930"></script>
	<script src="assets/js/charts.js"></script>


</div>
  )
}

export default LoginPage