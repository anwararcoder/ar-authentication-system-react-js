import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import imageLogo from "./../assets/images/02_logo.png";
import imageAuthor from "./../assets/images/me.jpg";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [question, setQuestion] = useState("");
  const [answerTheQuestion, setAnswerTheQuestion] = useState("");
  const [photo, setPhoto] = useState(null);
  const [users, setUsers] = useState([]);

  const getApiDataAllUsers = async () => {
    const response = await fetch("https://ar-server-auth.glitch.me/users").then(
      (response) => response.json()
    );
    setUsers(response.map((item) => item.email));
  };
  useEffect(() => {
    getApiDataAllUsers();
  }, []);
  const emailInAllUsersList = users.filter((item) => item === email)[0];
  
  const addApiDataNewUser = async () => {
    let responseCreateUser = await fetch("https://ar-server-auth.glitch.me/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        address,
        city,
        country,
        phone,
        email,
        password,
        question,
        answerTheQuestion,
        photo,
      }),
    });
    let responseNewUser = await responseCreateUser.json();
    console.log(responseNewUser);
  };

  const submitRegister = async (event) => {
    event.preventDefault();
    try {
      if (firstName === "" || firstName === null) {
        toast.error("Please Enter First Name", "Error");
        return;
      }
      if (lastName === "" || lastName === null) {
        toast.error("Please Enter Last Name", "Error");
        return;
      }
      if (address === "" || address === null) {
        toast.error("Please Enter Your Address", "Error");
        return;
      }
      if (city === "" || city === null) {
        toast.error("Please Enter Your City", "Error");
        return;
      }
      if (country === "" || country === null) {
        toast.error("Please Enter Your Country", "Error");
        return;
      }
      if (phone.length <= 10) {
        toast.error("Please Enter Your Phone Number", "Error");
        return;
      }
      if (email === "" || email === null) {
        toast.error("Please Enter Your Email", "Error");
        return;
      }
      if (password !== confirmPassword) {
        toast.error("Check Your Password", "Error");
        return;
      }
      if (question === "" || question === null) {
        toast.error("Select Any The Question", "Error");
        return;
      }
      if (answerTheQuestion === "" || answerTheQuestion === null) {
        toast.error("Please Answer Your Question", "Error");
        return;
      }
      if (photo === "" || photo === null) {
        toast.error("Please Choose Any Image", "Error");
        return;
      }
      if (email === emailInAllUsersList) {
        toast.error("This user already exists", "Error");
        return;
      }
      addApiDataNewUser();
      toast.success("Registration Done", "Success");
      navigate("/login");
    } catch (error) {
      toast.error(error, "Error");
      navigate("/register");
    }
  };

  return (
    <div className="login register">
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
                <h2>Sign Up</h2>
                <p>
                  Have An Account? <Link to="/login">Login</Link>
                </p>
              </div>
              <form className="login-form row" onSubmit={submitRegister}>
                <div className="col-md-6">
                  <div className="item">
                    <span>First Name*</span>
                    <input
                      onChange={(event) => setFirstName(event.target.value)}
                      type="text"
                      name="firstName"
                      placeholder="Enter Your First Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span>Last Name*</span>
                    <input
                      onChange={(event) => setLastName(event.target.value)}
                      type="text"
                      name="lastName"
                      placeholder="Enter Your Last Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span>Address*</span>
                    <input
                      onChange={(event) => setAddress(event.target.value)}
                      type="text"
                      name="address"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span>City*</span>
                    <input
                      onChange={(event) => setCity(event.target.value)}
                      type="text"
                      name="city"
                      placeholder="City"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span>Country*</span>
                    <input
                      onChange={(event) => setCountry(event.target.value)}
                      type="text"
                      name="country"
                      placeholder="Country"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span>Phone*</span>
                    <input
                      onChange={(event) => setPhone(event.target.value)}
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="item fileimage">
                    <span>Upload Your Photo*</span>
                    <input
                      onChange={(event) =>
                        setPhoto(URL.createObjectURL(event.target.files[0]))
                      }
                      type="file"
                      className="fileimage"
                      name="Photo"
                      accept="image/png, image/gif, image/jpeg"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="item">
                    <span>Email*</span>
                    <input
                      onChange={(event) => setEmail(event.target.value)}
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span>Password*</span>
                    <input
                      onChange={(event) => setPassword(event.target.value)}
                      type="password"
                      name="password"
                      placeholder="Enter Your password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span>Confirm Password*</span>
                    <input
                      onChange={(event) =>
                        setConfirmPassword(event.target.value)
                      }
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span>Choose Question*</span>
                    <select
                      name="question"
                      onChange={(event) => setQuestion(event.target.value)}
                    >
                      <option>what is your family name</option>
                      <option>What is your best friend's name?</option>
                      <option>
                        What is the name of your secondary school?
                      </option>
                      <option>What is your favorite sport</option>
                      <option>What is your favorite soccer team</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item">
                    <span>Answer The Question*</span>
                    <input
                      onChange={(event) =>
                        setAnswerTheQuestion(event.target.value)
                      }
                      type="text"
                      name="answerTheQuestion"
                      placeholder="Answer The Question"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <button className="btn-1 submit" type="submit">
                    Sign Up
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

export default Register;
