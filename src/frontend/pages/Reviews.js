import React from 'react';
const axios = require('axios');

import AddLocation from "../components/AddLocation.js";

class Reviews extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            locations: ""
        };
    }

    render(){
        return(
            <AddLocation/>
        );
    }
}

export default Reviews;