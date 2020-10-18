import React from "react";
import Button from "./Button";
import destination_7 from "../images/destination_7.jpg";


class Login extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            loginForm: {
                username: '',
                password: '',
            },

            loginFields: false,

            Username: [],
            Password: [],
        }

    };

    handleChange = (event) => {
        const formFieldValue = event.target.value;
        const formFieldName  = event.target.name;

        const updateLogin = this.state.loginForm;
        updateLogin[formFieldName] = formFieldValue; 

        console.log("Field name: ", formFieldName)
        console.log("Field value: ", formFieldValue)

        this.setState({ loginForm: updateLogin })
        this.handleFormDetails(formFieldName, formFieldValue)
    }


    handleLogIn = (event) => {
        console.log("Welcome back!")
    };

   
    handleFormDetails (formFieldName, formFieldValue) {
        // If the user inputs into a field by editing the field,
        // check if the field name already exists; and delete the entry.
        
        if (formFieldName === 'username'){
            this.setState({ Username: [] })
            this.setState({ Username: formFieldValue })

        }else{

            this.setState({ Password: [] })
            this.setState({ Password: formFieldValue })
        }

        if(this.state.loginForm['username'].length > 0 && this.state.loginFields['password'] > 0){
            this.setState({ loginFields: 'okay' })
        }
        console.log(this.state.formValues);
    };
            
    titleCase(string){
        const word = string;
        const first_letter = word.slice(0,1);
        const other_letters = word.slice(1).toLowerCase();
        const title_first_letter = first_letter.toUpperCase();

        const desired_string = title_first_letter.concat(other_letters);
        return desired_string;
    }

    render(){

        this.formStyle = {
            backgroundColor: "var(--maintorq)",
            minHeight: '10vh',
        };

        return(
            <React.Fragment>
                
                <div className='row'>
                    <div className='col-6'>
                        <img src={destination_7} alt=""/>
                    </div>

                    <div className='col mt-5 m-5 bg bg-dark text-white form-group'>
                    <label htmlFor='input'>Username:</label> <br/>
                        <input className='form-control'
                            type="text"
                            onChange={ this.handleChange }
                            name    ='username'
                            value   ={ this.state.loginForm['Username'] }
                        /> <br />

                        <label htmlFor='input'>Password:</label> <br/>
                        <input className='form-control'
                        type="password"
                        onChange={ this.handleChange }
                        name    ='password'
                        value   ={ this.state.loginForm['password'] }
                        /> <br/>
                    </div>
                </div>


                <div className='row'>
                    <div className='col-5'></div>
                    <div className='col float-right'>
                        <Button username={ this.state.Username }
                            password={ this.state.Password}
                             path='login'
                        /> 
                    </div>
                    {
                        this.state.loginFields !== 'okay' ?
                            <div className='col float-right'>
                                <Button status='Forgotten password' /> 
                            </div>
                            :
                            <div></div>
                    }
                </div>

            </React.Fragment>
        );
    }
}

export default Login;