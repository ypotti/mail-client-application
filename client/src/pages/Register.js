import React, { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaIdCard } from "react-icons/fa";

const Register = () => {
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
          <div className="d-flex flex-column col-11 col-md-5 mt-5 mb-auto ms-2 ms-md-5  h-50 justify-content-between">
            <span className="color-Lblue fw-bolder text-uppercase pb-3">
              Register For Free
            </span>
            <div className="d-flex align-items-center">
              <h1 className="text-light heading">Welcome! Register Here</h1>
              <BsCircleFill className="color-green align-self-end ms-1 mb-3 dot" />
            </div>
            <h4 className="color-Lblue text-to-register fw-regular mb-3 ">
              Already a Member?
              <Link to="/login" className="text-decoration-none">
                <span className="link color-green"> Login here</span>
              </Link>
            </h4>
            <form
              className="form-width h-100 d-flex flex-column justify-content-around mt-3"
              onSubmit={submitHandler}
            >
              <div className="d-flex">
                <div
                  className={`d-flex align-items-center pt-2 pb-2 ps-3 pe-3 mr-2 flex-shrink-1 glass mb-3 ${
                    selectedElement === "First-Name" && "selected"
                  }`}
                >
                  <div
                    className="d-flex flex-column align-items-start me-auto w-100 color-Lblue"
                    onFocus={() => updateSelectedElement("First-Name")}
                    onBlur={handleValidations}
                  >
                    <span className="form-label">First Name:</span>
                    <input
                      placeholder="First Name"
                      className="w-100 form-element fw-100"
                    />
                  </div>
                  <div className="ms-2  align-self-center">
                    <FaIdCard className="form-icon-small" />
                  </div>
                </div>
                <div
                  className={`d-flex align-items-center pt-2 pb-2 ps-3 pe-3 flex-shrink-1 ms-2 glass mb-3 ${
                    selectedElement === "Last-Name" && "selected"
                  }`}
                >
                  <div
                    className="d-flex flex-column align-items-start me-auto w-100 color-Lblue"
                    onFocus={() => updateSelectedElement("Last-Name")}
                    onBlur={handleValidations}
                  >
                    <span className="form-label">Last Name:</span>
                    <input
                      placeholder="Last Name"
                      className="w-100 form-element fw-100"
                    />
                  </div>
                  <div className="ms-2  align-self-center">
                    <FaIdCard className="form-icon-small" />
                  </div>
                </div>
              </div>
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
              <div
                className={`d-flex align-items-center pt-2 pb-2 ps-3 pe-3 w-100 glass mb-3 ${
                  selectedElement === "Confirm-Password" && "selected"
                }`}
              >
                <div
                  className="d-flex flex-column align-items-start me-auto w-100 color-Lblue"
                  onFocus={() => updateSelectedElement("Confirm-Password")}
                  onBlur={handleValidations}
                >
                  <span className="form-label">Confirm Password:</span>
                  <input
                    type={!showPassword ? "password" : "input"}
                    placeholder="Confirm Password"
                    className="w-100 form-element fw-100"
                  />
                </div>
                <div className="ms-2  align-self-center pointer">
                  {/* <MdConfirmationNumber className="form-icon"/> */}
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
                    <span className="link text-white">Register</span>
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

export default Register;
