import React from 'react'
import fglogo from '../Assets/fglogo.svg'
import { NavLink } from 'react-router-dom'
import Login from '../Components/Login'

function LoginPage() {
    return (
        <div>
            <header>
        <div class="content-color">
            <div class="container-fluid p-0">
                <nav class="navbar navbar-expand-lg" id="navbar" style={{position:'fixed'}}>
                    <a class="navbar-brand P-0" >
                        <img id="img" src={fglogo} height="100px" width="133px" alt="logo" />
                        
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onclick="toggleClock()" id="clockButton">
                        <i class="fas fa-align-right text-light"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav"
                     style={{backgroundColor: '#ff6612', width:'100%' }}>
                        <div class="mr-auto"></div>
                        <ul class="navbar-nav" style={{marginRight:'-100px'}}>
                            <li class="nav-item dropdown">
                                <div class="dropdown">
                                <NavLink className="nav-link"
                                    to="/"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                    >
                                    Home
                                </NavLink>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
            {/* <img src={img1} height="700" width='100%' />
            <div id="contenth" class=" container text-center place">
                <div class="row">
                    <div class="texts-header text-white">

                        <h1 id="byehead">B2B PAYMENT</h1>

                        <div class="container para-fg">
                            <br/><br/><br/>
                            <p id="byep">
                                We aspire to inculcate more transparency, stricter security
                            </p>
                        </div>
                        <br/><br/>
                    </div>
                </div>
            </div> */}
    
            {/* <video controls loop autoplay muted id="myVideo">
                <source src={vid} type="video/mp4"/>
            </video>
            <div id="contenth" class="container text-center place">
                <div class="row">
                    <div class="texts-header text-white">

                        <h1>FINTRACT GLOBAL</h1>
                        <h6>OUR PRODUCTS</h6>
                        <div class="container para-fg">
                            <h3>
                                <b>Open Banking</b>
                            </h3>
                        </div>

                        <br/><br/>
                        

                    </div>

                </div>
            </div> */}

        </div>
    </header>
            
        <Login/>
        
        </div>
    )
}

export default LoginPage
