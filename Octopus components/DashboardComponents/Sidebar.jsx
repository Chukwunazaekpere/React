import React from "react";
import { NavLink } from 'react-router-dom';
import vnew8 from "../Nav components/homeimg/vnew8.jpg";

class Sidebar extends React.Component{

    handlePageChange = (path) => {
        console.log(this.props.match)
    }  

    titleCase(string){
        const word = string;
        const first_letter = word.slice(0,1);
        const other_letters = word.slice(1).toLowerCase();
        const title_first_letter = first_letter.toUpperCase();

        const desired_string = title_first_letter.concat(other_letters);
        return desired_string;
    }

    render(){
        const items = ["dashboard", "tracking", "reports"];

        const linkstyle = {
            backgroundColor: "black",
            fontWeight: 'bold',
        };

        const heightStyle = {
            minHeight: "100vh"
        };

        return(
            <div style={ heightStyle } className='bg bg-info'>

                <div className='row mb-3'>
                    <div className='col-1'></div>
                    <div className='col-1 mt-3 ml-5'>
                        <img className='rounded-circle' src={vnew8} alt="" />
                    </div>
                </div>

                <div className='row '>
                    <div className='col m-1'>
                        {
                            items.map(item =>
                                <div key={item}>
                                    <NavLink to={`/${item}`} className='btn btn-secondary form-control mb-2 text-white' 
                                                            activeStyle={linkstyle}>
                                        {`${this.titleCase(item)}`}
                                    </NavLink>
                                </div>
                            )
                        }
                        
                    </div>
                </div>

                <div className='row m-1'>
                    <div className='col mt-5'>
                        <NavLink to='/' className='col bg bg-dark btn btn-info form-control mt-5 '>
                            Log out
                        </NavLink>

                        {/* <NavLink to='/dashboard' className='col bg bg-dark btn btn-info form-control mt-5 '>
                            Cancel
                        </NavLink> */}

                    </div>
                </div>

            </div>
        );
    }
} 
export default Sidebar;