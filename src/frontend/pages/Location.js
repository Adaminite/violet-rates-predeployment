import React from 'react';

class Location extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.id}
            </div>
        )
    }
}

export default Location;