import React from "react";

import { Link } from "react-router-dom";


// this component is required in order to serve the need of the application,
// wherever a button might be needed

class Button extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: [],
            email:    [],
            password: [],
            password2: [],

            loginDetails: false,
            signupDetails: false,
        
        }

    }

    handleStateUpdate (username, password, email, password2) {
        if (username.length > 0 && username !== undefined ) {
            console.log('Username: ', username)
            console.log('Password: ', password)

            this.setState({ username })

        }

        if (password !== undefined && password.length > 0 ) {
            console.log('Username: ', password)
            console.log('Password: ', password)

            this.setState({ password })
        }

        if (email !== undefined && email.length > 0 ) {
            console.log('Username: ', email)
            console.log('Password: ', email)

            this.setState({ email })
        }

        if (password2 !== undefined && password2.length > 0 ) {
            console.log('Username: ', password2)
            console.log('Password: ', password2)

            this.setState({ password2 })
            console.log('password2 in p2: ', this.state.password2 )
        }

        if (this.state.username.length > 0 && this.state.password.length > 0){
            this.setState({ loginDetails: true })
        }

        console.log('email in p2: ', this.state.email )
        console.log('password in p2: ', this.state.password )

        if ( this.state.email.length > 0 ){
            if (this.state.password === this.state.password2 ){
                this.setState({ signupDetails: true })
            }
        }

    }
    
    componentDidUpdate(pprops, pstate){
        console.log('Previous props: ', pprops)
        console.log('Previous state: ', pstate)
        
        const propsUsername = pprops.username;
        const stateUsername = pstate.username;

        const propsemail    = pprops.email;
        const stateemail    = pstate.email;

        const propsPassword = pprops.password;
        const statePassword = pstate.password;

        const propsConfirmPassword = pprops.password2;
        const stateConfirmPassword = pstate.password2;

        if (pprops.path === 'login') {
            if (propsUsername !== undefined){
                if(propsUsername.length > stateUsername.length) {
                    console.log('Username: ', propsUsername)
    
                    this.handleStateUpdate(propsUsername, '')
                }
            }
    
            if (propsPassword !== undefined){
                if(propsPassword.length > statePassword.length) {
                    this.handleStateUpdate(propsUsername, propsPassword)
                }
            }

        } else{
            if (propsemail !== undefined){
                if(propsemail.length > stateemail.length) {
                    this.handleStateUpdate('', '', propsemail, '')
                }
            }

            if (propsPassword !== undefined){
                if(propsPassword.length > statePassword.length) {
                    this.handleStateUpdate('', propsPassword, '', '')
                }
            }

            if (propsConfirmPassword !== undefined){
                if(propsConfirmPassword.length > stateConfirmPassword.length) {
                    this.handleStateUpdate('', '', '', propsConfirmPassword)
                }
            }
        }
    };
        

    render(){
        const { status, path } = this.props;
            

        return(
            <div className='ml-5 mr-5'>
                {
                    status === 'Login' ? // for login button
                    <Link to='/login' className='btn btn-secondary'> {status} </Link>
                    :
                    status === 'Sign up' ?
                    <Link to='/signup' className='btn btn-primary'> {status} </Link>
                    :
                    status === 'Next' ?
                    <Link to='/clearance2' className='btn btn-dark'> {status} </Link>
                    :
                    status === 'Previous' ?
                    <Link to='/Import custom clearance' className='btn btn-dark'> {status} </Link>
                    :
                    status === 'Next2' ?
                    <Link to='/clearance3' className='btn btn-dark'> Next </Link>
                    :
                    status === 'Previous2' ?
                    <Link to='/clearance2' className='btn btn-dark'> Previous </Link>
                    :
                    status === 'Forgotten password' ?
                    <Link to='/Forgotten password' className='btn btn-info'> {status} </Link>
                    : 
                    (this.props.action === 'signup' || !status ) ?
                    <Link to='/dashboard' className='btn btn-success' onClick={ this.props.signupHandler }>
                        Submit
                    </Link>
                    :
                    <Link to={`/${path}`} className='btn btn-success'> Submit</Link>

                }

            </div>

        )
    }
}
export default Button;