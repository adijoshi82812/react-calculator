import React, { Component } from 'react';

class Header extends Component{
    render(){
        const firstname = "Aditya";
        const lastname = "Joshi";

        return(
            <header
                className="w3-container w3-blue w3-center"
            >
                <h1>
                    Calculator by {firstname} {lastname}
                </h1>
            </header>
        );
    }
}

export default Header;