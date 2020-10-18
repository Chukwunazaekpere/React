import React from "react";

import FormDetails from "./FormDetails";

class Contact extends React.Component{
    constructor(props){
        super(props);

        this.contactStyle = {
            color: "white",
            minHeigth: "100vh",

        };

        this.formTextStyle = {
            fontWeight: "bold",   
            fontStyle: "italic",
            color: "white", 
            margin: ".125rem 9.38rem 0.188rem 9.38rem",
            border: "0.625rem solid #fafafa",
            borderRadius: "0.938rem", 
            padding: "0rem 0.938rem 0.938rem 0.938rem"
        }; 

        this.state = {
            formdetails: {
                firstname: " ",
                surname: " ",
                email: " ",
                message:" ",
            },

            formValues: [],
        };
    }

    handleFormInputs = (event) => {
        event.persist();
        const formFieldValue = event.target.value;
        const formFieldName = event.target.name;

        this.setState({ formdetails :{ [ formFieldName ]: formFieldValue }});
        
    };

    handleFormValues = (event) => {
        const formFieldValue = event.target.value;
        const formFieldName = event.target.name;

        // If the user inputs into a field by editing the field,
        // check if the field name already exists; and delete the entry.
        if (this.state.formValues.indexOf(formFieldName) !== -1){
            // Get the index of the field - name
            const fieldNameIndex = this.state.formValues.indexOf(formFieldName)
            console.log(`Index: ${ fieldNameIndex }`)

            // Delete the entry i.e. the field name and its value.
            this.state.formValues.splice(fieldNameIndex, 2);
            console.log(this.state.formValues);
        }
        // Insert entries.
        this.state.formValues.push(formFieldName, formFieldValue);
        console.log(this.state.formValues);
        
    };

    // This function accepts only strings and thus,
    // returns a titled-case string.
    titleCase(string){
        const word = string;
        const first_letter = word.slice(0,1);
        const other_letters = word.slice(1).toLowerCase();
        const title_first_letter = first_letter.toUpperCase();

        const desired_string = title_first_letter.concat(other_letters);
        return desired_string;
    }


    render(){
        const items = ["firstname", "surname", "email", "message"];
        
        return(
            <div className="container-fluid">
                <div className="row">
                    <div style={ this.contactStyle } className="col bg-dark m-2">
               
                        <h3> We're glad you found us! <br/>
                        Send us a message and we'd be glad, replying you soonest... </h3>
                    </div>
                </div>
                
                <div className="row">
                    <div style={ this.formTextStyle } className="col bg-dark form-group">
                        {
                            items.map(item => 
                                <div key={ item }>
                                    <label  htmlFor="input">{ this.titleCase(item) }:</label>
                                    { item !== "message" ?
                                        <input className="form-control" 
                                            type="text"
                                            name= { `${item}` }
                                            value={ this.state.formdetails[item] }
                                            onChange={ this.handleFormInputs }
                                            onBlur={ this.handleFormValues }
                                            
                                        />
                                        :
                                        <textarea  name="message" id="" cols="75" rows="10"
                                            type="text"
                                            placeholder="Your message"
                                            value={ this.state.formdetails.message }
                                            onChange={ this.handleFormInputs }
                                            onBlur={ this.handleFormValues }
                                        />
                                    }
                                    
                                </div>
                            )
                        }
                        
                        <FormDetails form={ this.state.formValues } />
                    </div>
                    
                </div>

            </div>
            
        );
    }
}

export default Contact;