import React from "react";

// this is a reuseable componetn that initiates a 
// task on the basis of the "status" props passed to it.
class Button extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            buttonState: "false"
        }
    };

    render(){
        if (this.props.status === "Send message"){
            return(
                <button onClick={ this.props.handler } className="bg bg-warning form-control">
                    { this.props.status }
                </button>
            );
        }
        return(
            <h3>Message status: unknown!</h3>
        );
    }

}

export default Button;