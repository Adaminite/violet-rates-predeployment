import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./pages/Navbar.js";
import Home from "./pages/Home.js";
import Reviews from "./pages/Reviews.js";
import SignUp from "./pages/SignUp";

const axios = require("axios");


class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isSignedIn: false,
            username: ""
        }

        this.handleSignIn = this.handleSignIn.bind(this);
    }

    handleSignIn(username){
        this.setState({
            isSignedIn: true,
            username: username
        });
    }
    
    render(){
        return(
            <div className = "app">
                <Router>
                    <Navbar isSignedIn = {this.state.isSignedIn} currentUser = {this.state.username}/>
                    <Routes>
                        <Route exact path = "/" element={<Home/>}/>
                        <Route exact path = "/reviews" element = {<Reviews/>}/>
                        <Route path = "/signup" element = {<SignUp handleSignIn = {this.handleSignIn}/>}/>
                    </Routes>
                </Router>
            </div>
        );
    }
}


export default App;