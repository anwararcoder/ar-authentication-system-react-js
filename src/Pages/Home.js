import React, { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import imageLogo from "./../assets/images/02_logo.png";
import imageAuthor from "./../assets/images/me.jpg";

const Home = () => {
  const navigate = useNavigate();
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const address = localStorage.getItem("address");
  const city = localStorage.getItem("city");
  const country = localStorage.getItem("country");
  const phone = localStorage.getItem("phone");
  const email = localStorage.getItem("email");
  const question = localStorage.getItem("question");
  const answerTheQuestion = localStorage.getItem("answerTheQuestion");
  const photo = localStorage.getItem("photo");

  useEffect(() => {
    if (firstName === "" || firstName === null) {
      navigate("/login");
    }
    if (lastName === "" || lastName === null) {
      navigate("/login");
    }
    if (address === "" || address === null) {
      navigate("/login");
    }
    if (city === "" || city === null) {
      navigate("/login");
    }
    if (country === "" || country === null) {
      navigate("/login");
    }
    if (phone === "" || phone === null) {
      navigate("/login");
    }
    if (email === "" || email === null) {
      navigate("/login");
    }
    if (question === "" || question === null) {
      navigate("/login");
    }
    if (answerTheQuestion === "" || answerTheQuestion === null) {
      navigate("/login");
    }
    if (photo === "" || photo === null) {
      navigate("/login");
    }
  }, []);

  const submitLogOut = () => {
    localStorage.clear()
    toast.success("Logout Successfull", "Success");
    navigate("/login");
  }

  return (
    <div className="login home">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-4">
            <div className="left-sidebar">
              <Link to="/" className="logo">
                <div>
                  <img src={imageLogo} alt="Logo" />
                </div>
                <h2>
                  AR-Authentication
                  <br />
                  system
                </h2>
              </Link>
              <div className="text-box">
                <h1>start your journey with us</h1>
                <p>
                  discover profile ar authentication System best System for
                  authentication in Web development.
                </p>
              </div>
              <div className="author">
                <p>
                  seeking taking business responsibility, enthusiasm,
                  dedication, and good work ethic to accomplish business
                  objectives as a front-end developer using React Js
                </p>
                <div className="author-info">
                  <img src={imageAuthor} alt="Me" />
                  <div>
                    <h5 className="name">Nour Ramadan</h5>
                    <span className="job">Front End</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-center">
            <div className="right-sidebar">
              {email ? (
                <Fragment>
                  <div className="home-box">
                    <img src={photo} className="me-image" alt="Me" />
                    <div className="sec-title">
                      <h2>
                        Hi I'm <br /> {firstName} {lastName}
                      </h2>
                    </div>
                    <ul>
                      <li>Address: <span>{address}</span></li>
                      <li>City: <span>{city}</span></li>
                      <li>Country: <span>{country}</span></li>
                      <li>Phone: <span>{phone}</span></li>
                      <li>Email: <span>{email}</span></li>
                      <li>Question: <span>{question}</span></li>
                      <li>Answer The Question: <span>{answerTheQuestion}</span></li>
                    </ul>
                    <button onClick={submitLogOut} className="btn-1 btn-2">Log Out</button>
                  </div>
                </Fragment>
              ) : (
                <div className="sec-title">
                  <h2>Please Create Account</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
