import React from "react";

class ServicesPage extends React.Component{
    constructor(props){
        super(props);

    this.servicesStyle = {
        minHeight: "100vh",
    }

    this.tableStyle = {
        // display: "flex",
        color: "red",
        fontWeight: "bold",
        
    }

    }
    render(){
        return(
            <div style={ this.servicesStyle } className="m-2 text-white bg-dark">
                <h3>ELs Engineering services...</h3><hr/>
                <h5>In ELs - enginerring, we offer the following services,</h5>
                <table style={ this.tableStyle } className="table table-striped">
                    <thead>
                        <tr>
                            <th>S/n</th>
                            <th>Mechanical</th>
                            <th>Structural</th>
                            <th>Civil & Architectural</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>HVAC design and analysis <br/>
                            for residential, industrial/office pruposes, etc <br/>
                                (inspection & installation)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ServicesPage;