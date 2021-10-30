import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function Login() {

  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const [user, setUser] = useState({
    email: "",
    password: ""
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

  const PostData = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    const res = await fetch("/userlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);
    console.log(data.msg);

    if (data.msg !== "success") {
      window.alert("Invalid registration");
    } else {
      window.alert("login successful");
      console.log("login successful");
    }
  };

  return (
    <div>
      <div style={{ height: "90px" }}></div>
      <body className="login-container">
        <div id="login-div" className="">
          <div className="fields ">
            <span style={{ width: '100%', }} className="fields-span">
              Welcome back!
            </span>
            <span style={{ display: 'block', width: '100%', marginBottom: 1 + 'rem' }} >
              Sign in and continue your journey.
            </span>
          </div>
          <div className="  md:max-w-sm md:mx-auto login-box">
            <span style={{ display: 'block' }} className="fields-span">
              Login
            </span>
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
                  Password
                </label>
                <div className="inputt" style={{display:'flex',alignItems:'center'}}>
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
                  <IconButton style={{height:"5px"}}
                    onClick={handleClickShowPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>

                </div>

              </div>
              </form>

              <p style={{ cursor: "pointer" , textAlign:"right" }}>
                <NavLink to="/forgotpassword" className="links">Forgot password?</NavLink>
              </p>

            <NavLink to="/user" style={{  textAlign:"center" , display:'flex' , flexDirection:'column' }}>
              <div className="field" >
                <button
                  style={{ cursor: "pointer" , textAlign:"center" }}
                  value="login"
                  onClick={PostData}
                  className="form-button mr-20"
                >
                  Login
                </button>
              </div>
            </NavLink>
            
            <p style={{ cursor: "pointer" , textAlign:"center" }}>
                Don't Have An Account ? <NavLink to="/signup" className="links">SignUp <i class="fa fa-arrow-right"></i></NavLink>
            </p>

            

            <br />

            

          </div>
        </div>
      </body>
    </div>
  );
}

export default Login;
