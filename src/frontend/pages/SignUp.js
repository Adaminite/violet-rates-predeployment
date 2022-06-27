import React from 'react';
import {Navigate} from 'react-router-dom';

const axios = require('axios');

class SignUp extends React.Component{

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            toHome: false
        }
    }

     handleSubmit(event){
        event.preventDefault();
        const data = event.target.elements;
        const email = data[0].value;
        const username = data[1].value;
        const password = data[2].value;

        
        axios.post('http://localhost:5000/api/users/add', {
                username: username,
                password: password,
                email: email
            }
        ).then( (response) => {
            if(response.data === "Success"){
                this.setState({
                    toHome: true
                });

                this.props.handleSignIn(username);
            }
            else{
                console.log(response);
                alert(response.data);
            }
            
        }).catch( (error) => {
            console.log(error);
            alert("Unable to register at this time. Please try again later");
        })

        
    }
    render(){
        if(this.state.toHome){
            return <Navigate to="/" replace={true}/>
        }
        return(
            <div>       
                <h1 style={{textAlign:"center", marginTop: "10px"}} class = "h1"> Sign Up </h1>
                <div id = "sign-up-container">
                    <form id="sign-up-form" onSubmit = {this.handleSubmit}>
                        <div className= "form-group">
                            <label htmlFor="email"> Email Address </label>
                            <input className = "form-control" type = "email" name = "email" required/>
                        </div>

                        <div className= "form-group">
                            <label htmlFor="username"> Username </label>
                            <input className = "form-control" type = "text" name = "username" required/>
                        </div>

                        <div className= "form-group">
                            <label htmlFor="password"> Password</label>
                            <input className = "form-control" type = "password" name = "password" required/>
                        </div>

                        <div className = "form-group submit-btn-ctnr">
                            <input style={{backgroundColor: "#6f5499"}} class = "btn btn-primary" type = "submit" value = "Register"/> 
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp;