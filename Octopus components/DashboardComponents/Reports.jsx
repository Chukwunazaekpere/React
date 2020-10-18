import React from "react";
import axios from "axios";


class Reports extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            reports: []
        }
    }

    componentDidMount(){
        axios.get("http://127.0.0.1:8000/octopus/api/users/")
        .then(response => {
            this.setState({ reports: response.data });
        })
    };

    render(){
        return(
            <div>
                <h3>Your Reports</h3>
                <div className='mt-4 ml-4 align-items-center'>
                    <table className='table table-striped  text-white table-sm'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Firstname</th>
                                <th>Surname</th>
                                <th>Username</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.reports.map((items, index) =>
                                    <tr key={index}>
                                        <td>{items.id}</td>
                                        <td>{items.firstname}</td>
                                        <td>{items.lastname}</td>
                                        <td>{items.username}</td>
                                        <td>{items.email}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Reports;