import React from "react";
import "./../../styles/common.css";

import SignUpCard from "../../components/SignUpCard/SignUpCard";

const SignupPage = () => {
  return (
    <>
      <div className="mask rgba-gradient align-items-center authpage">
        <div className="container">
          <div className="row">
            <div className="col-md-6 white-text text-center text-md-left mt-xl-5 mb-5">
              <button className="pill" type="button">
                pennyWise
                <br />
                <span className="span-text"> TRACK YOUR EXPENSES BETTER</span>
              </button>
            </div>

            <div className="col-md-6 col-xl-5 mt-xl-5 wow fadeInRight">
              <SignUpCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
