import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LocationWrapper = (props) => {

    const {id} = useParams();
    
    return(
        <Location id = {id} locations = {props.locations}/>
    )
}

class Location extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            location: null
        }

    }

    componentDidMount(){
        console.log(this.props);
        
        this.props.locations.map( (location) => {
            if(location.id === this.props.id){
                this.setState({
                    location: location
                });
            }
        }); 
    }

    render(){
        if(this.state.location === null){
            return(
                <div> </div>
            )
        }
        else{
            return(
                <div>
                    Name: {this.state.location.name} Address: {this.state.location.address} Id: {this.state.location.id}
                </div>
            )
        }
    }
}

export default LocationWrapper;