import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const SignUp = () => {
  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  const [phoneValue, setPhoneValue] = useState();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleChange = (e) => {
    console.log(e);
    value = e.target.value;
    name = e.target.name;

    setUser({ ...user, [name]: value });
  };

  // const handleSubmit=(e)=> {
  //   e.preventDefault();

  //   console.log('The form was submitted with the following data:');
  //   console.log(user);
  // }

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, cpassword } = user;

    const res = await fetch("/localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    console.log(data);
    console.log(data.msg);

    if (data.msg !== "success") {
      window.alert("Invalid registration");
    } else {
      window.alert("registereed successful");
      console.log("registereed successful");
    }
  };

  

  

  return (
    <div>
      <div style={{ height: "90px" }}></div>
      <div className="signup-container">
        <div id="login-div" className="">
          <div className="fields ">
            {/* <span style={{ width: "100%" }} className="fields-span">
            Register 
          </span> */}
          </div>
          <div className="md:max-w-sm md:mx-auto signup-box">
            <span style={{ display: "block" }} className="fields-span">
              SignUp
            </span>
            <span
              style={{
                display: "block",
                width: "100%",
                marginBottom: 2 + "rem",
              }}
            >
              <h6> Welcome To Open Banking</h6>
            </span>
            <form method="POST" className="login-form">
              <div className="field">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <div className="inputt">
                  <PersonIcon />
                  <input
                    required
                    type="text"
                    id="name"
                    className="inputt-area"
                    placeholder="Name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="email">
                  E-Mail Address
                </label>
                <div className="inputt">
                  <MailIcon />
                  <input
                    type="email"
                    id="email"
                    className="inputt-area"
                    placeholder="Email ID"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label" htmlFor="phone">
                  phone
                </label>
                {/* <div className="inputt">
                <PhoneIcon/>
                <input
                type="text"
                id="phone"
                className="inputt-area"
                placeholder="Phone No."
                name="phone"
                value={user.phone}
                
                onChange={handleChange}
              />
              </div> */}

                <PhoneInput
                  // className="inputt"
                  placeholder="Enter phone number"
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="IN"
                  value={phoneValue}
                  onChange={setPhoneValue}
                />
              </div>
              <div className="field">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <div className="inputt">
                  <LockIcon />
                  <input
                    type={values.showPassword ? "text" : "password"}
                    id="password"
                    className="inputt-area"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                  <IconButton
                    style={{ height: "5px" }}
                    onClick={handleClickShowPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="cpassword">
                  Confirm Password
                </label>
                <div className="inputt">
                  <LockIcon />
                  <input
                    type={values.showPassword ? "text" : "password"}
                    id="cpassword"
                    className="inputt-area"
                    placeholder="Confirm your password"
                    name="cpassword"
                    value={user.cpassword}
                    onChange={handleChange}
                  />
                  <IconButton
                    style={{ height: "5px" }}
                    onClick={handleClickShowPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </div>
              </div>
              </form>

              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="field">
                  <button
                    style={{ cursor: "pointer", textAlign: "center" }}
                    value="register"
                    onClick={PostData}
                    className="form-button mr-20"
                  >
                    Register
                  </button>
                </div>

                <div>
                  <p style={{ cursor: "pointer", textAlign: "center" }}>
                    Already Have Account ?{" "}
                    <NavLink to="/login" className="links">
                      Log In
                    </NavLink>
                  </p>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
