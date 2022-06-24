import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./pages/Navbar.js";
import Home from "./pages/Home.js";
import Reviews from "./pages/Reviews.js";

const axios = require("axios");


class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "app">
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route exact path = "/" element={<Home/>}/>
                        <Route exact path = "/reviews" element = {<Reviews/>}/>
                    </Routes>
                </Router>
            </div>
        );
    }
}


export default App;