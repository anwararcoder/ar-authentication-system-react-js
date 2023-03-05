import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import imageLogo from "./../assets/images/02_logo.png";
import imageAuthor from "./../assets/images/me.jpg";

const AnswerPassword = ({ user }) => {
  const navigate = useNavigate();
  const [answerQuestionUser, setAnswerQuestionUser] = useState("");

  useEffect(() => {
    if (
      user.answerTheQuestion === "" ||
      user.answerTheQuestion === null ||
      user.answerTheQuestion === undefined
    ) {
      navigate("/restpassword");
    }
  }, []);

  const submitAnswerPassword = (event) => {
    event.preventDefault();
    if (answerQuestionUser === user.answerTheQuestion) {
      toast.success("Please Update Your Password", "Success");
      navigate("/finishanswerpassword");
      return;
    } else {
      toast.error("Please Try Agin", "Error");
      return;
    }
  };

  return (
    <div className="login restpassword">
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
              <div className="sec-title">
                <h2>Answer The Question?</h2>
              </div>
              <form className="login-form row" onSubmit={submitAnswerPassword}>
                <div className="col-md-12">
                  <div className="item">
                    <span>{user.question}*</span>
                    <input
                      onChange={(event) =>
                        setAnswerQuestionUser(event.target.value)
                      }
                      type="text"
                      placeholder="Enter Your Answer Question"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <button className="btn-1 submit" type="submit">
                    Next Step
                  </button>
                  <p className="forget text-center">
                    Have An Account? <Link to="/login">Login</Link>
                  </p>
                  <p className="forget text-center">
                    Don't Have An Account? <Link to="/register">Sign Up</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerPassword;
