import React from "react";
import Sidebar from "./DashboardComponents/Sidebar";

import Tracking from "./DashboardComponents/Tracking";
import Reports from "./DashboardComponents/Reports";
import Dashboard from "./DashboardComponents/Dashboard";

import CustomClearance from "./DashboardComponents/CustomClearance";
import CustomClearance2 from "./DashboardComponents/CustomClearance2";
import CustomClearance3 from "./DashboardComponents/CustomClearance3";


class UsersPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            path: ''
        }

    }
    render(){
        return(
            <div className='row'>

                <div className='col-4 p-3 ml-2'>
                    <Sidebar />
                </div>

                <div className='col mt-3 mr-2 bg bg-dark'>
                    {
                        !this.props.pathProps ||  this.props.pathProps === 'dashboard' ?
                        <Dashboard />
                        :
                        this.props.pathProps === 'tracking' ?
                        <Tracking />
                        :
                        this.props.pathProps === 'reports' ?
                        <Reports />
                        :
                        this.props.pathProps === 'clearance2' ?
                        <CustomClearance2 />
                        :
                        this.props.pathProps === 'clearance3' ?
                        <CustomClearance3 />
                        :
                        <CustomClearance />
                    }
                </div>

            </div>
        )
    }
}

export default UsersPage;