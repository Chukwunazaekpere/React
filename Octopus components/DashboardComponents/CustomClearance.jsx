import React from "react";
import Button from "../Button";


class CustomClearance extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            tpMeans: 'air',  // for the radio button for transport means, select air by default.

            frMeans: 'direct',  // for the radio button for freight means, select air by default.

            seaFields: {
                SCAC: '',
                BL: '',
            },

            airFields: {
                airline: '',
                WB: '',
            },

            selectMenu: 'Select client'
        };
    }

    handleTransportToggle = (event) =>{
        this.setState({ tpMeans: event.target.value })
    }

    handleFreightToggle = (event) =>{
        this.setState({ frMeans: event.target.value })
    }

    handleChange = (event) => {
        if(event.target.name === 'SCAC' || event.target.name === 'BL'){
            this.setState({ seaFields: {[event.target.name]: event.target.value }} )

        }else{
            this.setState({ airuFields: {[event.target.name]: event.target.value }} )
        }
    }

    handleSelectOptions = (event) => {
        this.setState({ selectMenu: event.target.value })
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
        const headingStyle = {
            minHeight: '100vh',
        }

        const texts = {
            color: 'black',
            fontWeight: 'bold',
            minWidth: '100vh',
            fontSize: '1rem'
        }

        const airfields = ['Airline', 'W/B']
        const seafields = ['SCAC', 'B/L']
        const selectOptions = ['Select client', 'Krypton', 'Selenium', 'Promethium']

        const transpMeans = ['sea', 'air'];
        const freightMeans = ['direct', 'transfer'];

        return(
            <div style={headingStyle} className='bg bg-secondary'>
                <div style={headingStyle} className='bg bg-info ml-4 mr-4 mt-2 mb-4'>
                    <div className='row'>
                        <div style={texts} className='col-12 bg bg-secondary'>
                            <h4 className='p-2 float-left'>Import Custom Clearance (Page 1/3)</h4>
                        </div>
                    </div>

                    <p style={texts} className='float-center pt-3'>Select preferred transport means</p> <br/>

                    {/* Assign radio buttons */}
                    <div style={texts} className='row'>
                        {
                            transpMeans.map(means =>
                                <div className='col-4 form-group'>
                                    <label className='col-2 ml-3 form-check-label float-left'> { this.titleCase(means) }</label> 
                                    <input type="radio" className='col-2 form-check-input float-left'
                                        checked={ this.state.tpMeans === means }
                                        value={ `${means}` }
                                        onChange={ this.handleTransportToggle }
                                    />
                                </div>
                            )
                        }
                    </div>

                    {/* Change input fields based off of which radio-button is active */}
                    {
                        this.state.tpMeans === 'sea' ?
                            <React.Fragment>
                                {
                                    seafields.map(field => 
                                        <div key={field} style={texts} className='form-group ml-2 mr-2'>
                                            <label htmlFor="text">{field}</label>
                                            <input type="text" 
                                                className='form-control'
                                                name={`${field}`}
                                                value={ this.state.seaFields[field] }
                                                onChange={this.handleChange }
                                            />
                                        </div>
                                    )
                                    
                                }
                            </React.Fragment>
                        :
                            <React.Fragment>
                                {
                                    airfields.map(field => 
                                        <div key={field} style={texts} className='form-group ml-2 mr-2'>
                                            <label htmlFor="text">{field}</label>
                                            <input type="text" 
                                                className='form-control'
                                                name={`${field}`}
                                                value={ this.state.airFields[field] }
                                                onChange={this.handleChange }
                                            />
                                        </div>
                                    )
                                }
                            </React.Fragment>
                    }

                    <div style={texts} className='row mt-5 align-items-center form-group'>
                            <div className='col-1 mt-2 mr-3 ml-2 float-left'>
                                <label>Client:</label>
                            </div>

                            <div className='col-3 mr-4 float-left'>
                                <select name="" className='form-control'
                                        value={ this.state.selectMenu }
                                        onChange={ this.handleSelectOptions }>
                                        {
                                            selectOptions.map(options => 
                                                    <option value={options} key={options}>
                                                        {options}
                                                    </option>
                                                )
                                        }
                                        
                                </select>
                            </div>

                        <div className='col-3 align-items-center ml-4'>
                                <label className='float-left mt-1' >Add New Client</label>
                                <button className='btn btn-dark float-right btn-sm' type="reset">+</button>
                        </div>

                        <div className='col mt-5'>
                            <label >Type of Freight:</label>

                                 {/* Assign radio buttons */}
                            <div style={texts} className='row '>
                                {
                                    freightMeans.map(means => 
                                        <div className='col-3 form-group'>
                                            <label className='col-2 mr-3 form-check-label float-left'> {this.titleCase(means)}</label> 
                                            <input className='col-3 form-check-input float-left'
                                                type="radio"
                                                checked={ this.state.frMeans === means }
                                                value={ `${means}` }
                                                onChange={ this.handleFreightToggle }
                                            />
                                            <div className='col-6 mr-4 ml-4 float-right'> </div>
                                        </div>
                                    )
                                }
                            </div>

                            <div className='float-right mt-5'>
                                <Button status='Next' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CustomClearance;