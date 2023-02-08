import React from 'react'
// const modelOpen = true
function ModelLoginPopup( {modelOpen, setModelOpen} ) {
    const loginBtnHandler = () => {
        setModelOpen(false)
        console.log("false",modelOpen)
    }
  return (
 
    
  	<div className={modelOpen ?  "modal fade show" : "modal fade"} id="login-popup" style={{paddingRight: "16px", display: modelOpen ?  "block" : "node"}}>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            {/* <a href="#" className="modal-close" data-dismiss="modal" aria-label="Close"><em className="ti ti-close"></em></a> */}
                <a className="modal-close" data-dismiss="modal" aria-label="Close" onClick={loginBtnHandler} ><em className="ti ti-close"></em></a>
                <div className="ath-container m-0">
                    <div className="ath-body bg-theme tc-light">
                        <h5 className="ath-heading title">Sign in <small className="tc-default">with your ICO Account</small></h5>
                        <form action="#">
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
                            <div className="field-item d-flex justify-content-between align-items-center">
                                <div className="field-item pb-0">
                                    <input className="input-checkbox" id="remember-me-100" type="checkbox" />
                                    <label htmlFor="remember-me-100">Remember Me</label>
                                </div>
                                <div className="forget-link fz-6">
                                    <a href="#" data-toggle="modal" data-dismiss="modal" data-target="#reset-popup">Forgot password?</a>
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block btn-md">Sign In</button>
                        </form>
                        <div className="sap-text"><span>Or Sign In With</span></div>

                        <ul className="row gutter-20px gutter-vr-20px">
                            <li className="col"><a href="#" className="btn btn-md btn-facebook btn-block"><em className="icon fab fa-facebook-f"></em><span>Facebook</span></a></li>
                            <li className="col"><a href="#" className="btn btn-md btn-google btn-block"><em className="icon fab fa-google"></em><span>Google</span></a></li>
                        </ul>
                        <div className="ath-note text-center">
                            Don’t have an account? <a href="#" data-toggle="modal" data-dismiss="modal" data-target="#register-popup"> <strong>Sign up here</strong></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModelLoginPopup