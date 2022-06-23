import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";

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
                    </Routes>
                </Router>
            </div>
        );
    }
}


export default App;