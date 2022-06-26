import React from 'react';
const axios = require('axios');

import AddLocation from "../components/AddLocation.js";

class Reviews extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            locations: []
        }

        let result;
        
        axios.get("http://localhost:5000/api/locations").then( (response) => {

            let locations = response.data.map( (value) => {
                return {
                    address: value.address,
                    name: value.name,
                };
            });

            this.setState({
                locations: locations
            });
            }).catch( (error) => {
                console.log(error);
            });
            
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(newLocation){
        this.setState({
            locations: this.state.locations.concat(newLocation)
        });
    }
    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.locations.map( (location) => {
                            return <li> Name: {location.name} Address: {location.address}</li>
                        })
                    }
                </ul>
                <AddLocation handleSubmit = {this.handleSubmit}/>
            </div>
            
        );
    }
}

export default Reviews;