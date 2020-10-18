import React from 'react';
import { Link, NavLink } from "react-router-dom";


class Navbar extends React.Component{
    render(){
        const navLinks = ['Home', 'Services', 'About-us', 'Contact-us'];

        const linkstyle = {
            backgroundColor: "red",
            fontWeight: 'bold',
            
        };

        return(
            <React.Fragment>
                <div className='row nav-style bg bg-info align-items-center'>

                    <div className='col-3 btn btn-md btn-danger ml-5 mt-2 p-2'>
                        <Link to='/'>
                            <i className='fas fa-home'/>
                            <h4>Octopus</h4>
                            <h5>Logistics</h5>
                        </Link>
                    </div>

                    <div className='col-5 text-center text-white'>
                        <span className='text-dark'>|</span>
                        {
                            navLinks.map(link => 
                                <span key={link}>
                                    {
                                        link !== "Home" ?
                                            <NavLink to={link} activeStyle={ linkstyle } className='btn btn-info'>
                                                { link }
                                            </NavLink>
                                            :
                                            <NavLink to='/' exact activeStyle={ linkstyle } className='btn btn-info'>
                                                { link }
                                            </NavLink>   
                                            
                                    }
                                    <span className='text-dark'>|</span>
                                </span>
                            )
                        }
                    </div>

                    <div className='col align-items-center '>
                        <p>Welcome</p>
                        <span>{this.props.location.state.username}</span>
                    </div>
                
                </div>
            </React.Fragment>
            
        );
    }
}

export default Navbar;