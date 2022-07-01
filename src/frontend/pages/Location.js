import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Location = (props) => {
    const {id} = useParams();

    const[location, setLocation] = useState({
        id: "",
        name: "",
        address: "",
        reviews: []
    });

    useEffect( () => {
        let locations = props.locations;
        let result = {
            id: "",
            name: "",
            address: "",
            reviews: [] 
        };
        locations.map( (item) => {
            if(item.id === id){
                result = item;
            }
        });
        setLocation(result, location);
    });

    if(location === null){
        return(
            <div> </div>
        )
    }
    else{
        return(
            <div>
                Name: {location.name} Address: {location.address} Id: {location.id}
            </div>
        )
    }
}

export default Location;