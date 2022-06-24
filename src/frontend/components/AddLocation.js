import React from 'react';

class AddLocation extends React.Component{
    constructor(props){
        super(props);


    }

    render(){
        return(
        <form>
            <div className ="form-group">
                <label for = "name"> Name of Location </label>
                <input className="form-control" name = "name" type = "text" placeholder="Papa's Pizzeria"/>
            </div>
            
            <div class = "form-group"> 
                <label for = "address"> Address </label>
                <input className="form-control" name = "address" placeholder = "12345 Cinderella Dr" type = "text"/>
            </div>

        </form>
        );
    }
}

export default AddLocation;