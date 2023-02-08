import React from 'react'

function RegisterPopup() {
    return (
        <main className="nk-pages tc-light">
            <div className="modal fade" id="register-popup">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <a href="#" className="modal-close" data-dismiss="modal" aria-label="Close"><em className="ti ti-close"></em></a>
                        <div className="ath-container m-0">
                            <div className="ath-body bg-theme tc-light">
                                <h5 className="ath-heading title">Sign Up <small className="tc-default">Create New TokenWiz Account</small></h5>
                                <form action="#">
                                    <div className="field-item">
                                        <div className="field-wrap">
                                            <input type="text" className="input-bordered" placeholder="Your Name" />
                                        </div>
                                    </div>
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
                                    <div className="field-item">
                                        <div className="field-wrap">
                                            <input type="password" className="input-bordered" placeholder="Repeat Password" />
                                        </div>
                                    </div>
                                    <div className="field-item">
                                        <input className="input-checkbox" id="agree-term-22" type="checkbox" />
                                        <label htmlFor="agree-term-2">I agree to Icos <a href="#">Privacy Policy</a> &amp; <a href="#">Terms</a>.</label>
                                    </div>
                                    <button className="btn btn-primary btn-block btn-md">Sign Up</button>
                                </form>
                                <div className="sap-text"><span>Or Sign Up With</span></div>

                                <ul className="row gutter-20px gutter-vr-20px">
                                    <li className="col"><a href="#" className="btn btn-md btn-facebook btn-block"><em className="icon fab fa-facebook-f"></em><span>Facebook</span></a></li>
                                    <li className="col"><a href="#" className="btn btn-md btn-google btn-block"><em className="icon fab fa-google"></em><span>Google</span></a></li>
                                </ul>
                                <div className="ath-note text-center">
                                    Already have an account? <a href="#" data-toggle="modal" data-dismiss="modal" data-target="#login-popup"> <strong>Sign in here</strong></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RegisterPopup