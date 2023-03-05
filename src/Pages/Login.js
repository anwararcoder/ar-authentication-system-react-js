import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import imageLogo from "./../assets/images/02_logo.png";
import imageAuthor from "./../assets/images/me.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [passwordUsers, setPasswordUsers] = useState([]);

  const getApiDataAllUsers = async () => {
    const response = await fetch("https://ar-server-auth.glitch.me/users").then(
      (response) => response.json()
    );
    setUsers(response.map((item) => item.email));
    setPasswordUsers(response.map((item) => item.password));
  };

  const emailInAllUsersList = users.find((item) => item === email);
  const PasswordInAllUsersList = passwordUsers.find((item) => item === password);

  useEffect(() => {
    getApiDataAllUsers();
  }, []);

  useEffect(() => {
    localStorage.clear();
  }, []);

  const submitLogin = async (event) => {
    event.preventDefault();

    if (emailInAllUsersList === "" || emailInAllUsersList === null || emailInAllUsersList === undefined || emailInAllUsersList !== email) {
      toast.error("This user does not exist", "Error");
      return;
    }
    if (password === "" || password === null || password === undefined || PasswordInAllUsersList === undefined) {
      toast.error("Check Your Password", "Error");
      return;
    }
    if (email === emailInAllUsersList && password === PasswordInAllUsersList){
      const response = await fetch(
        "https://ar-server-auth.glitch.me/users?email="+email
      );
      const content = await response.json();
      const newContent = content.find(item=>item)
      localStorage.setItem("firstName", newContent.firstName);
      localStorage.setItem("lastName", newContent.lastName);
      localStorage.setItem("address", newContent.address);
      localStorage.setItem("city", newContent.city);
      localStorage.setItem("country", newContent.country);
      localStorage.setItem("phone", newContent.phone);
      localStorage.setItem("email", newContent.email);
      localStorage.setItem("question", newContent.question);
      localStorage.setItem("answerTheQuestion", newContent.answerTheQuestion);
      localStorage.setItem("photo", newContent.photo);
      toast.success("Login Successfull", "Success");
      navigate("/");
    }
  };

  return (
    <div className="login">
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
                <h2>Login</h2>
                <p>
                  Don't Have An Account? <Link to="/register">Sign Up</Link>
                </p>
              </div>
              <form className="login-form row" onSubmit={submitLogin}>
                <div className="col-md-12">
                  <div className="item">
                    <span>Email*</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="item">
                    <span>Password*</span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Your password"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <button className="btn-1 submit" type="submit">
                    Login
                  </button>
                  <p className="forget text-center">
                    <Link to="/restpassword">Forget Password?</Link>
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

export default Login;
