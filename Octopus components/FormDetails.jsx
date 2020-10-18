import React, { Component } from 'react';

import Button from "./Button";
import { Redirect } from "react-router-dom";

class FormDetails extends Component{
    constructor(props){
        super(props);

        this.state = {
            buttonState: "False",
        }
    };

    handleSendFormDetails = (event) => {
        event.preventDefault();
        console.log(this.props.form);
        
        this.setState({ buttonState : "True" })
    }

    render(){
        return(
            <div>
                {
                    this.state.buttonState === "True" ?
                        <Redirect to="" />
                        :
                    <Button handler={ this.handleSendFormDetails }
                        status="Send message" /> 
                    
                }     
            </div>
        );
    }
}

export default FormDetails;