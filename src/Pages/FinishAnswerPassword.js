import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import imageLogo from "./../assets/images/02_logo.png";
import imageAuthor from "./../assets/images/me.jpg";

const FinishAnswerPassword = ({ user }) => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    if (user.email === "" || user.email === null || user.email === undefined) {
      navigate("/restpassword");
    }
  }, []);

  const updateApiDataNewPassword = async () => {
    let responseNewPassword = await fetch(
      "https://ar-server-auth.glitch.me/users/"+user.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: user.firstName,
          lastName: user.lastName,
          address: user.address,
          city: user.city,
          country: user.country,
          phone: user.phone,
          email: user.email,
          password: newPassword,
          question: user.question,
          answerTheQuestion: user.answerTheQuestion,
          photo: user.photo,
        }),
      }
    );
    let responseNewUser = await responseNewPassword.json();
  };

  const submitChangePassword = (event) => {
    event.preventDefault();
    if (
      newPassword === "" ||
      newPassword === null ||
      newPassword === undefined ||
      newPassword <= 3
    ) {
      toast.error("Please Change This New Password", "Error");
      return;
    } else {
      updateApiDataNewPassword();
      toast.success("Updated Your Password", "Success");
      navigate("/login");
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
                <h2>Please Change Your Password</h2>
              </div>
              <form className="login-form row" onSubmit={submitChangePassword}>
                <div className="col-md-12">
                  <div className="item">
                    <span>New Password*</span>
                    <input
                      type="password"
                      placeholder="Enter New Password"
                      onChange={(event) => setNewPassword(event.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <button className="btn-1 submit" type="submit">
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishAnswerPassword;
