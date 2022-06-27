import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

const axios = require("axios");


class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isSignedIn: false,
            username: ""
        }

        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleSignIn(username){
        this.setState({
            isSignedIn: true,
            username: username
        });
    }
    

    handleLogOut(){
        this.setState({
            isSignedIn: false,
            username: ""
        });
    }

    render(){
        return(
            <div className = "app">
                <Router>
                    <Navbar handleLogOut={this.handleLogOut} isSignedIn = {this.state.isSignedIn} currentUser = {this.state.username}/>
                    <Routes>
                        <Route exact path = "/" element={<Home/>}/>
                        <Route exact path = "/reviews" element = {<Reviews/>}/>
                        <Route path = "/signup" element = {<SignUp handleSignIn = {this.handleSignIn}/>}/>
                        <Route path = "/login" element = {<LogIn handleSignIn = {this.handleSignIn}/>}/>
                    </Routes>
                </Router>
            </div>
        );
    }
}


export default App;