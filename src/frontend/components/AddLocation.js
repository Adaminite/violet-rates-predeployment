import React from 'react';
const axios = require('axios');

class AddLocation extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(event.target.elements);

        let data = event.target.elements;

        let name = data[0].value;
        let address;
        if(!data[2].value === ""){
            address = data[1].value + ", " + data[2].value;
        }
        else{
            address = data[1].value;
        }

        let location = data[3].value + ", " + data[4].value + " " + data[5].value; 
        
        axios.post('http://localhost:5000/api/locations/add', {
            name:  name.toLowerCase(),
            address: (address + "\n" + location).toLowerCase()
        }).then( (response) => {
            console.log(response);
            this.props.handleSubmit({
                name: name.toLowerCase(),
                address: (address + "\n" + location).toLowerCase()
            })
        }).catch( (error) => {
            console.log(error);
        });
    }
    
    render(){
        return(
        <div>
            <h1 style={{textAlign:"center", marginTop: "10px"}} class = "h1"> Add A Location </h1>
            <div id = "add-form-ctnr">    
                <form id = "add-form"  onSubmit={this.handleSubmit}>
                    <div className ="form-group">
                        <label htmlFor = "name"> Name of Location </label>
                        <input className="form-control" name = "name" type = "text" placeholder="Papa's Pizzeria" required/>
                    </div>
                    
                    <div className = "form-group"> 
                        <label htmlFor = "address"> Address Line 1 </label>
                        <input className="form-control" name = "address" placeholder = "12345 Cinderella Dr" type = "text" required/>
                    </div>

                    <div className = "form-group"> 
                        <label htmlFor = "address"> Address Line 2 </label>
                        <input className="form-control" name = "address" placeholder = "Apt 106" type = "text"/>
                    </div>

                    <div className = "row">
                        <div className = "form-group col-auto">
                            <label htmlFor = "name"> City </label>
                            <input className="form-control" name = "name" type = "text" placeholder="Los Angeles" required/>
                        </div>

                        <div className = "form-group  col-auto">
                            <label htmlFor = "name"> State </label>
                            <input className="form-control" name = "name" type = "text" placeholder="CA" required/>
                        </div>

                        <div className = "form-group  col-auto">
                            <label htmlFor = "name"> Zip Code </label>
                            <input className="form-control" name = "name" type = "text" placeholder="28742" required/>
                        </div>

                        <div className = "form-group submit-btn-ctnr">
                            <input style={{backgroundColor: "#6f5499"}} class = "btn btn-primary" type = "submit" value = "Add Location"/> 
                        </div>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}

export default AddLocation;