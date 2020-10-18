import React from 'react';


class ForgottenPassword extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: ''
        }

    }
    handleChange = (event) => {
        this.setState({ email: event.target.value })
    }

    render(){
        return(
            <div>
                <h3>Hey 'firstname', let's get you back to your dashboard....</h3>
                <h4>Please enter the email - address you provided upon registration...</h4>

                <label htmlFor="email">Email:</label>
                <input className='form-control' type="text"
                    onChange={ this.handleChange }

                />
            </div>
        );
    }
}

export default ForgottenPassword;