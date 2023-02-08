import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

const baseURL = "http://localhost:3001/getCandidates";

function SignUpPage() {
    const [postData, setPostData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmpassword: '',
    
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
      console.log(postData)
      const url = 'http://localhost:3005/signup';
      axios.post(url, postData)
      .then((res) => {
          console.log(res)
          console.log(res)
          console.log(res.data)
          if(res.request.status >= 200){
              console.log("register sucessfuly")
                // SetUserReg(false)
              // To store data
            //   localStorage.setItem('userProfile',JSON.stringify(res.data));
            //   navigate("/signin");
        }
      }).catch(err => {
        console.log(err)
      })
      // clear();
    }
  return (
    <main className="nk-pages nk-pages-centered bg-theme">
            <div className="ath-container py-5">
                <div className="ath-header text-center">
                    {/* <a  href="./" className="ath-logo"><img src="hexa/img/HexaFinity (2).png"  alt="logo" /></a> */}
                </div>
                <div className="ath-body">
                    <h5 className="ath-heading title">Sign Up <small className="tc-default">Create admin Account</small></h5>
                    <form action="./">
                        <div className="field-item">
                            <div className="field-wrap">
                                <input type="text" value={postData.fullname} onChange={(e) => setPostData({ ...postData, fullname: e.target.value })}  className="input-bordered" placeholder="Your Name" />
                            </div>
                        </div>
                        <div className="field-item">
                            <div className="field-wrap">
                                <input type="text" value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })}  className="input-bordered" placeholder="Your Email" />
                            </div>
                        </div>
                        <div className="field-item">
                            <div className="field-wrap">
                                <input type="password" value={postData.password} onChange={(e) => setPostData({ ...postData, password: e.target.value })}  className="input-bordered" placeholder="Password" />
                            </div>
                        </div>
                        <div className="field-item">
                            <div className="field-wrap">
                                <input type="password" value={postData.confirmpassword} onChange={(e) => setPostData({ ...postData, confirmpassword: e.target.value })}  className="input-bordered" placeholder="Repeat Password" />
                            </div>
                        </div>
                        <div className="field-item">
                            <input className="input-checkbox" id="agree-term-2" type="checkbox" />
                            <label for="agree-term-2">I agree to Icos <a href="#">Privacy Policy</a> &amp; <a href="#">Terms</a>.</label>
                        </div>
                        <button onClick={handleSubmit} className="btn btn-primary btn-block btn-md">Sign Up</button>
                    </form>
                    {/* <div className="sap-text"><span>Or Sign Up With</span></div> */}

                    {/* <ul className="btn-grp gutter-20px gutter-vr-20px">
                        <li className="col"><a href="#" className="btn btn-md btn-facebook btn-block"><em className="icon fab fa-facebook-f"></em><span>Facebook</span></a></li>
                        <li className="col"><a href="#" className="btn btn-md btn-google btn-block"><em className="icon fab fa-google"></em><span>Google</span></a></li>
                    </ul> */}
                </div>
                <div className="ath-note text-center tc-light">
                    Already have an account? <a href="page-login.html"> <strong>Sign in here</strong></a>
                </div>
            </div>
        </main>
  )
}

export default SignUpPage