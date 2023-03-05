import React, { Fragment, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AnswerPassword from "./Pages/AnswerPassword";
import FinishAnswerPassword from "./Pages/FinishAnswerPassword";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import RestPassword from "./Pages/RestPassword";

function App() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");

  const submitRestPassword = async (event) => {
    event.preventDefault();
    const response = await fetch("https://ar-server-auth.glitch.me/users?email=" + email);
    const content = await response.json();
    setUser(content.find((item) => item));
    if (user === "" || user === null || user === undefined) {
      toast.error("Please Type Your Email Agin", "Error");
      return;
    } else if( email === user.email ) {
      toast.success("Please Answer The Question", "Success");
      navigate("/answerpassword");
      return;
    } else{
      toast.error("This user does not exist", "Error");
      navigate("/register");
      return;
    }
  };

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/restpassword" element={<RestPassword setEmail={setEmail} submitRestPassword={submitRestPassword} />} />
        <Route path="/answerpassword" element={<AnswerPassword user={user} />} />
        <Route path="/finishanswerpassword" element={<FinishAnswerPassword user={user} />} />
      </Routes>
    </Fragment>
  );
}

export default App;
