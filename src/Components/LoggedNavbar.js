import React from 'react'
import fglogo from "../Assets/fglogo.svg";
import { NavLink } from "react-router-dom";

function LoggedNavbar() {
    return (
        <div>
            <div style={{height:'125px'}}></div>
      <header>
        <div class="content-color">
          <div class="container-fluid p-0">
            <nav
              class="navbar navbar-expand-lg"
              id="navbar"
              style={{ position: "fixed" }}
            >
              <a class="navbar-brand P-0">
                <img
                  id="img"
                  src={fglogo}
                  height="100px"
                  width="133px"
                  alt="logo"
                />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onclick="toggleClock()"
                id="clockButton"
              >
                <i class="fas fa-align-right text-light"></i>
              </button>
              <div
                class="collapse navbar-collapse"
                id="navbarNav"
                style={{ backgroundColor: "#ff6612", width: "100%" }}
              >
                <div class="mr-auto"></div>
                <ul class="navbar-nav" style={{ marginRight: "-100px" }}>
                  <li class="nav-item active">
                    <a
                      class="nav-link"
                      style={{ textAlign: "center", color: "white" }}
                    >
                      Add Account
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <div class="dropdown">
                      <a
                        style={{ textAlign: "center", color: "white" }}
                        class="nav-link"
                      >
                        Analytics
                      </a>
                      <div id="aboutusfont" class="dropdown-content"></div>
                    </div>
                  </li>

                  <li class="nav-item dropdown">
                    <div class="dropdown">
                      <a
                        style={{ textAlign: "center", color: "white" }}
                        class="nav-link"
                      >
                        Documents
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <div class="dropdown">
                      <a
                        style={{ textAlign: "center", color: "white" }}
                        class="nav-link"
                      >
                        Profile
                      </a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <div class="dropdown">
                      <NavLink
                        className="nav-link"
                        to="/login"
                        activeStyle={{
                          fontWeight: "bold",
                          color: "red",
                        }}
                      >
                        Logout
                      </NavLink>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
        </div>
    )
}

export default LoggedNavbar
