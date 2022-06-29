import React from 'react';
const axios = require('axios');

import AddLocation from "../components/AddLocation.js";

class Reviews extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(newLocation){
        this.props.handleAddLocation(newLocation);
    }
    
    render(){
        return(
            <div>
                <ul>
                    {
                        this.props.locations.map( (location) => {
                            return <li key={location.id}> Name: {location.name} Address: {location.address} Id: {location.id} </li>
                        })
                    }
                </ul>
                <AddLocation handleSubmit = {this.handleSubmit}/>
            </div>
            
        );
    }
}

export default Reviews;