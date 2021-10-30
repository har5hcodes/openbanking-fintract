import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function ForgotPassword() {
  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;

  const handleChange = (e) => {
    console.log(e);
    value = e.target.value;
    name = e.target.name;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("login working");
  };
  return (
    <div>
      <div style={{ height: "90px" }}></div>
      <body className="login-container">
        <div id="login-div" className="">
          <div className="fields ">
            <span style={{ width: "100%" }} className="fields-span">
              Reset Password
            </span>
            <span
              style={{
                display: "block",
                width: "100%",
                marginBottom: 1 + "rem",
              }}
            >
              Create a new password to login your account.
            </span>
          </div>
          <div className="  md:max-w-sm md:mx-auto login-box">
            <form className="login-form" onSubmit={handleSubmit} method="POST">
              <div className="field md:w-full">
                <label for="email" className=" label">
                  Username or Email
                </label>
                <div className="inputt">
                  <PersonIcon />
                  <input
                    className="inputt-area"
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Username or Email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field md:w-full">
                <label for="password" className="label">
                  Enter New Password
                </label>
                <div
                  className="inputt"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <LockIcon />
                  <input
                    className="inputt-area"
                    required
                    type={values.showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                  />
                  <IconButton
                    style={{ height: "5px" }}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </div>
              </div>

              <div className="field md:w-full">
                <label for="password" className="label">
                  Re-Enter New Password 
                </label>
                <div
                  className="inputt"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <LockIcon />
                  <input
                    className="inputt-area"
                    required
                    type={values.showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                  />
                  <IconButton
                    style={{ height: "5px" }}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </div>
              </div>

              <NavLink to="/user">
                <button className=" form-button">Reset Password</button>
              </NavLink>
            </form>

        <br/>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <NavLink to="/login" className="links">
            <p style={{ cursor: "pointer" , textAlign:"center" }}><PersonIcon />login</p>
        </NavLink>
        <NavLink to="/signup" className="links">
            <p style={{ cursor: "pointer" , textAlign:"center" }}><PersonAddIcon />create new account</p>
        </NavLink>
        </div>

          </div>
        </div>
      </body>
    </div>
  );
}

export default ForgotPassword;
