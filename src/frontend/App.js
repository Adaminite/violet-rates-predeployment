import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Location from "./pages/Location";

const axios = require("axios");


class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isSignedIn: false,
            username: "",
            User: null,
            locations: []
        }

        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.handleAddLocation = this.handleAddLocation.bind(this);
        this.handleAddReview = this.handleAddReview.bind(this);
    }

    componentDidMount(){
        axios.get("http://localhost:5000/api/locations").then( (response) => {

            let locations = response.data.map( (value) => {
                return {
                    address: value.address,
                    name: value.name,
                    id: (value._id).toString(),
                    reviews: value.reviews
                };
            });

            this.setState({
                locations: locations
            });
            }).catch( (error) => {
                console.log(error);
            });
    }

    handleAddLocation(newLocation){
        this.setState({
            locations: this.state.locations.concat(newLocation)
        });
    }

    handleAddReview(text, locationId){

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
                        <Route exact path = "/reviews" element = {<Reviews locations = {this.state.locations} handleAddLocation = {this.handleAddLocation}/>}/>
                        <Route path = "/reviews/:id" element={<Location locations = {this.state.locations} isSignedIn = {this.state.isSignedIn} addReview = {this.handleAddReview}/>} />
                        <Route path = "/signup" element = {<SignUp handleSignIn = {this.handleSignIn}/>}/>
                        <Route path = "/login" element = {<LogIn handleSignIn = {this.handleSignIn}/>}/>
                    </Routes>
                </Router>
            </div>
        );
    }
}


export default App;