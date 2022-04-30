import React, { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedElement, setSelectedElement] = useState();
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const togglePasswordType = () => {
    setShowPassword(!showPassword);
  };

  const updateSelectedElement = (value) => {
    setSelectedElement(value);
  };

  const handleValidations = () => {
    updateSelectedElement("");
  };

  return (
    <div className="login-container">
      <div className="container-1">
        <div className="container-2 d-flex flex-column p-4">
          <div className="d-flex align-items-center text-light">
            <BsCircleFill className="color-green logo me-3" />
            <h1 className="logo-name">Anywhere App</h1>
            <BsCircleFill className="color-green align-self-end ms-1 mb-2 dot" />
          </div>
          <div className="d-flex flex-column col-11 col-md-5 mt-auto mb-auto ms-2 ms-md-5  h-50 justify-content-between">
            <div className="d-flex align-items-center">
              <h1 className="text-light heading">Welcome Back! Login Here</h1>
              <BsCircleFill className="color-green align-self-end ms-1 mb-3 dot" />
            </div>
            <h4 className="color-Lblue text-to-register fw-regular mb-3 ">
              Not a Member?
              <Link to="/register" className="text-decoration-none">
                <span className="link color-green"> Register here</span>
              </Link>
            </h4>
            <form
              className="form-width h-100 d-flex flex-column justify-content-around mt-3"
              onSubmit={submitHandler}
            >
              <div
                className={`d-flex align-items-center pt-2 pb-2 ps-3 pe-3 w-100 glass mb-3 ${
                  selectedElement === "Email" && "selected"
                }`}
              >
                <div
                  className="d-flex flex-column align-items-start me-auto w-100 color-Lblue"
                  onFocus={() => updateSelectedElement("Email")}
                  onBlur={handleValidations}
                >
                  <span className="form-label">Email ID:</span>
                  <input
                    placeholder="Enter email ID"
                    className="w-100 form-element fw-100"
                  />
                </div>
                <div className="ms-2  align-self-center">
                  <HiMail className="form-icon" />
                </div>
              </div>
              <div
                className={`d-flex align-items-center pt-2 pb-2 ps-3 pe-3 w-100 glass mb-3 ${
                  selectedElement === "Password" && "selected"
                }`}
              >
                <div
                  className="d-flex flex-column align-items-start me-auto w-100 color-Lblue"
                  onFocus={() => updateSelectedElement("Password")}
                  onBlur={handleValidations}
                >
                  <span className="form-label">Password:</span>
                  <input
                    type={!showPassword ? "password" : "input"}
                    placeholder="Enter Password"
                    className="w-100 form-element fw-100"
                  />
                </div>
                <div className="ms-2  align-self-center pointer">
                  {!showPassword ? (
                    <AiFillEye
                      className="form-icon"
                      onClick={togglePasswordType}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      className="form-icon"
                      onClick={togglePasswordType}
                    />
                  )}
                </div>
              </div>
              <div>
                <button className="button-style">
                  <Link to="/" className="text-decoration-none">
                    <span className="link text-white">Login</span>
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
