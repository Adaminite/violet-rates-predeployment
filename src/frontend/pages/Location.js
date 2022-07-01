import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


/*
    deepEquals function to check for object equality found on stack overflow; Credit to "atmin"
    https://stackoverflow.com/questions/201183/how-to-determine-equality-for-two-javascript-objects 

    Purpose was to eliminate the maximum depth error caused by setLocation and useEffect

function deepEqual(x, y) {
    const ok = Object.keys, tx = typeof x, ty = typeof y;
    return x && y && tx === 'object' && tx === ty ? (
      ok(x).length === ok(y).length &&
        ok(x).every(key => deepEqual(x[key], y[key]))
    ) : (x === y);
  }
*/

const Location = (props) => {
    const {id} = useParams();

    const[location, setLocation] = useState(null);

    const [review, setReview] = useState("");

    const handleChange = (e) =>{
        setReview(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let result = review;

        console.log(result);


        setReview("");
        
    }

    useEffect( () => {        
        let locations = props.locations;
        locations.map( (item) => {
            //if(item.id === id && !deepEqual(item, location)){
                if(item.id === id && location === null){
                    setLocation(item);
                }
               
        //}
        });
    });

    if(location === null){
        return(
            <div> </div>
        )
    }
    else{
        return(
            <div>
   
                <div>
                    Name: {location.name} Address: {location.address} Id: {location.id}
                </div>

                <br/>
                <br/>

                <form onSubmit={handleSubmit}>

                    <div className = "form-group">
                        <label className = "form-label" htmlFor="review"> </label>
                        <textarea onChange = {handleChange} style ={{resize: "none"}} maxLength={500} name = "review" className = "form-control" value={review}> </textarea>
                    </div>
                    <a> {500 - review.length} characters remaining </a>
                    <div className = "form-group submit-btn-ctnr">
                        <input style={{backgroundColor: "#6f5499"}} className = "btn btn-primary" type = "submit" value = "Add Review"/> 
                    </div>

                </form>
            </div>
        )
    }
}

export default Location;


