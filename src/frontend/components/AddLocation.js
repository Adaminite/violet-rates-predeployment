import React from 'react';

class AddLocation extends React.Component{
    constructor(props){
        super(props);


    }

    render(){
        return(
        <div>
            <h1 style={{textAlign:"center", marginTop: "10px"}} class = "h1"> Add A Location </h1>
            <div id = "add-form-ctnr">    
                <form id = "add-form">
                    <div className ="form-group">
                        <label for = "name"> Name of Location </label>
                        <input className="form-control" name = "name" type = "text" placeholder="Papa's Pizzeria" required/>
                    </div>
                    
                    <div className = "form-group"> 
                        <label for = "address"> Address Line 1 </label>
                        <input className="form-control" name = "address" placeholder = "12345 Cinderella Dr" type = "text" required/>
                    </div>

                    <div className = "form-group"> 
                        <label for = "address"> Address Line 2 </label>
                        <input className="form-control" name = "address" placeholder = "Apt 106" type = "text" value = ""/>
                    </div>

                    <div className = "row">
                        <div className = "form-group col-auto">
                            <label for = "name"> City </label>
                            <input className="form-control" name = "name" type = "text" placeholder="Los Angeles" required/>
                        </div>

                        <div className = "form-group  col-auto">
                            <label for = "name"> State </label>
                            <input className="form-control" name = "name" type = "text" placeholder="CA" required/>
                        </div>

                        <div className = "form-group  col-auto">
                            <label for = "name"> Zip Code </label>
                            <input className="form-control" name = "name" type = "text" placeholder="28742" required/>
                        </div>

                        <div id ="submit-btn-ctnr" className = "form-group">
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