import React from "react";
import Button from "../Button";

class CustomClearance2 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            'Shipper': '',
            'Consignee': '',
            'Form M. Number': '',
            'Cargo description': '',
            }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render(){
        const headingStyle = {
            minHeight: '100vh',
        }

        const texts = {
            color: 'black',
            fontWeight: 'bold',
            minWidth: '100vh',
            fontSize: '1rem'
        }

        const formFields = [
            'Shipper', 'Consignee',
            'Form M. Number', 'Cargo Description'
        ]

        return(
            <div style={headingStyle} className='bg bg-secondary'>
                <div style={headingStyle} className='bg bg-info ml-4 mr-4 mt-2 mb-4'>
                    <div className='row'>
                        <div style={texts} className='col-12 bg bg-secondary'>
                            <h4 className='p-2 float-left'>Import Custom Clearance (Page 2/3)</h4>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-6 ml-4'>
                            <div style={texts} className='col-1 float-right mt-3'>
                                <label >Pre - Alert Date:</label>
                            </div>
                            <div className='col-7 form-group'>
                                <input type="date" 
                                        className='form-control'
                                        name=""
                                        />
                            </div>
                        </div>
                    </div>

                    {/* place forms */}
                    <div style={texts} className='row'>
                            {
                                formFields.map(field => 
                                        <div key={field} className='col-7 mt-3 form-group'>
                                            <div className='col-4 ml-2 float-left'>
                                                <label>{ field }:</label>
                                            </div>

                                            <div className='col-6 float-right'>
                                                <input type="text" 
                                                        className='form-control'
                                                        placeholder={field}
                                                        name={`${field}`}
                                                        value={this.state.field}
                                                        onChange={this.state.handleChange}
                                                        />
                                            </div>
                                           
                                        </div>
                                    )
                            }
                    </div>
                    <div className='row mt-5'>
                        <div className='col-8'></div>
                        <div className='col-2 mt-5 float-left'>
                            <Button status='Previous'/>
                        </div>

                        <div className='col-2 mt-5 float-left'>
                            <Button status='Next2'/>
                        </div>
                    </div>
                </div>

               

            </div>
        );
    }
}

export default CustomClearance2;