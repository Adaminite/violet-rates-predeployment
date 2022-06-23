import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isSignedIn: false,
            currentUser: "Omar"
        };
    }

    render(){
        const linkInlineStyle = {textDecoration: 'none', color: 'inherit'};
        let rightPart;
        if(this.state.isSignedIn){
            rightPart = <ul style = {{margin: 0, padding: 0, listStyleType: 'none'}} className = "right-items">
                            <li style={linkInlineStyle}> Hello, {this.state.currentUser}!</li>
                            <Link style={linkInlineStyle} to = "/"> Log Out </Link>
                        </ul>
        }
        else{
            rightPart = <ul style = {{margin: 0, padding: 0}} className = "right-items">   
                            <Link style={linkInlineStyle} to = "/signup"> Sign Up </Link>
                            <Link style={{textDecoration: 'none', color: 'inherit'}} to = "/login"> Log In </Link>
                        </ul>
        }
        return(
            <nav className = "my-navbar bg-dark">
                <ul style = {{margin: 0, padding: 0}} className ="left-items" >
                    <Link style={linkInlineStyle} to = "/"> Home </Link>
                    <Link style={linkInlineStyle} to = "/about"> About </Link>
                    <Link style={linkInlineStyle} to = "/search"> Search </Link>
                </ul>
                {rightPart}
            </nav>
        );
    }
}


export default Navbar;