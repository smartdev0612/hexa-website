import React from "react";

function ResetPopup() {
    return (
        <main className="nk-pages tc-light">
            <div className="modal fade" id="reset-popup">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <a
                            href="#"
                            className="modal-close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <em className="ti ti-close"></em>
                        </a>
                        <div className="ath-container m-0">
                            <div className="ath-body bg-theme tc-light">
                                <h5 className="ath-heading title">
                                    Reset <small className="tc-default">with your Email</small>
                                </h5>
                                <form action="#">
                                    <div className="field-item">
                                        <div className="field-wrap">
                                            <input
                                                type="text"
                                                className="input-bordered"
                                                placeholder="Your Email"
                                            />
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-block btn-md">
                                        Reset Password
                                    </button>
                                    <div className="ath-note text-center">
                                        Remembered?{" "}
                                        <a
                                            href="#"
                                            data-toggle="modal"
                                            data-dismiss="modal"
                                            data-target="#login-popup"
                                        >
                                            {" "}
                                            <strong>Sign in here</strong>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ResetPopup;
