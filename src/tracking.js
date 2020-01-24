import React from 'react'
import {ReactComponent as Svg} from './assets/images/illustration-devices.svg';
import {ReactComponent as Logo} from './assets/images/logo.svg';
import {ReactComponent as Menu} from './assets/images/align-justify-solid.svg';

const Tracking=()=>{
    return (
        <div id="container">
            
            <nav id="nav-bar">
                <Logo />
                <div id="menu"><Menu /></div>
                <ul>
                    <li>Product</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Login</li>
                </ul>
            </nav>
            
            <main>
               
                    <div className="item column1">
                            <ul>
                                <li><mark>New</mark></li>
                                <li>Monograph</li>
                                <li>Dashboard</li>
                            </ul>
                            <p className="bigSize">Powerful insights<br/> into your team</p>
                            <p id="project">Project planning and time tracking <br/>for agile teams</p>
                            <p id="scheduleLine"><span id="scheduleWord">Schedule a demo </span>
                                    to see a live preview</p>
                    </div>
                    <div className="item column2">
                        <Svg />
                    </div>
                
            </main>
            
            <footer>
                <p className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
                    Coded by <a href="#">Miguel Martinez</a>.
                </p>
            </footer>
        </div>
    )
}

export default Tracking;