import React from "react";
import { NavLink, Link } from "react-router-dom";


class Navbar extends React.Component{
    constructor(props){
        super(props);

        this.navStyle = {
            backgroundColor: "red",
            fontWeight: 'bold',
            justifyContent: "center",
            alignItems: "center"
        }

        this.navsStyle = {
            justifyContent: "center",
            alignItems: "center"
        }

        this.usernameStyle = {
            borderRadius: "0.35rem",
            backgroundColor: "red",
            transition: "all 0.5s ease-in-out",
        }
    }
    
    render(){
        const links = [
            "Home",
            "Services",
            "Contact-us",
            "About-us"
        ]

        return(
            <React.Fragment>
            <div className="container-fluid">
                <div className="row bg-info p-3 align-items-center">
                    {/* Place branding */}
                    <div className="navbar-header col-4">
                        <NavLink to="" className="btn btn-danger text-dark float-left">
                            <i className="fas fa-home">ELs Group</i>
                        </NavLink>
                    </div>
                    
                    {/* place links */}
                    <div className="col-5">
                        {
                            links.map(linkItem =>
                                <div key={linkItem} >
                                    {linkItem !== "Home" ?
                                    <React.Fragment>
                                        <span className="float-left">|</span>
                                        <NavLink to={`/${linkItem}`}
                                            activeStyle={this.navStyle} className="float-left btn btn-info">
                                            {linkItem}
                                        </NavLink> 
                                    </React.Fragment>
                                        : 
                                    <React.Fragment>
                                        <span className="float-left">|</span>
                                        <NavLink to="" exact
                                            activeStyle={this.navStyle} className="float-left btn btn-info">
                                            {linkItem} 
                                        </NavLink>
                                    </React.Fragment>
                                    }
                                </div>
                            )
                        }
                        <span className="float-left">|</span>
                    </div>

                    {/* Links to identify user & log-out */}
                    <div className="col mt-2 align-items-center">
                        <h6 style={ this.usernameStyle } className="bg-danger m-2 float-left">Welcome Emmanuel</h6>
                        <Link to="/logout">
                            <li><h6 className="float-center badge badge-danger">logout</h6></li>
                        </Link>
                    </div>
                </div>
            </div>   
            </React.Fragment>

        );
    }
}

export default Navbar;