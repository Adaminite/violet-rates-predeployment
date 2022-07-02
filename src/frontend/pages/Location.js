import React, { useEffect, useState, useReducer } from 'react';
import { useParams } from 'react-router-dom';

const Location = (props) => {
    const {id} = useParams();
    const [rerender, setRerender] = useState(false);
    const[location, setLocation] = useState(null);
    const [review, setReview] = useState("");
    const [reviews, setReviews] = useState([]);

    const handleChange = (e) =>{
        setReview(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let rating = e.target.elements.rating.value;
        if(props.isSignedIn){
            props.addReview(review, id, rating);
            setReview("");  
        }
        else{
            alert("Please sign in to write a review!")
        }  
    }

    useEffect( () => {        
        let locations = props.locations;
        locations.map( (item) => {
                if(item.id === id && location === null){
                    setLocation(item);
                    setReviews(item.reviews);
                    console.log(reviews);
                }
        });
    });

    useEffect( () => {
        setTimeout( () => {
            setRerender(!rerender)
        }, 100); 
    }, []);
    

    if(location === null){
        return(
            <div> </div>
        )
    }
    else{
        return(
            <div>
   
                <div>
                    Name: {location.name} Address: {location.address}
                </div>

                <br/>
                <br/>

                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend className="form-label"> Add Review </legend>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="rating" id = "option1" value="1"/>
                            <label class="form-check-label" htmlFor="option1">1</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="rating" id = "option2" value="2"/>
                            <label class="form-check-label" htmlFor="option2">2</label>
                        </div>

                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="rating" id = "option3" value="3"/>
                        <label class="form-check-label" htmlFor="option3">3</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="rating" id = "option4" value="4"/>
                        <label class="form-check-label" htmlFor="option4">4</label>
                        </div>

                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="rating" id = "option5" value="5"/>
                        <label class="form-check-label" htmlFor="option5">5</label>
                        </div>
                    </fieldset>
                    <div className = "form-group">
                        <textarea onChange = {handleChange} style ={{resize: "none"}} maxLength={500} name = "review" className = "form-control" value={review}> </textarea>
                    </div>
                    <a> {500 - review.length} characters remaining </a>
                    <div className = "form-group submit-btn-ctnr">
                        <input style={{backgroundColor: "#6f5499"}} className = "btn btn-primary" type = "submit" value = "Add Review"/> 
                    </div>

                </form>

                <h2> Reviews </h2>
                <ul>
                    {reviews.map( (review) => {
                        return <li> {review.username} 
                            <br/>
                            {review.rating}
                            <br/>
                            {review.content}
                            <br/>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Location;


