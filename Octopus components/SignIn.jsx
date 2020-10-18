import React from "react";
import destination_3 from "../images/destination_3.jpg";
import Button from "./Button";
import axios from "axios";

import { Redirect } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signupForm: {
        Firstname: "",
        Lastname: "",
        Email: "",
        Password: "",
        "Confirm password": "",
      },

      signupFormDetails: [
        {
          Firstname: "",
          Lastname: "",
          Email: "",
          Password: "",
          "Confirm password": "",
        },
      ],

      signupStatus: false,
      signupErrorDetails: {},
      username: '',
    };
  }

  handleChange = (event) => {
    const formFieldValue = event.target.value;
    const formFieldName = event.target.name;

    const updateForm = this.state.signupForm;
    updateForm[formFieldName] = formFieldValue;

    // console.log("Field value: ", formFieldValue)

    this.setState({ signupForm: updateForm });
    this.handleFormDetails(formFieldName, formFieldValue);
  };

  handleFormDetails(formFieldName, formFieldValue) {
    // If the user inputs into a field by editing the field,
    // check if the field name already exists; and delete the entry.
    const formDetails = this.state.signupFormDetails;
    formDetails[formFieldName] = formFieldValue;

    this.setState({ signupFormDetails: formDetails });
    console.log("field values: ", this.state.signupFormDetails);
  }

  // Post users' signup details to backend
  handleSignup = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/octopus/api/users/", {
        password: this.state.signupFormDetails.Password,
        email: this.state.signupFormDetails.Email,
        firstname: this.state.signupFormDetails.Firstname,
        lastname: this.state.signupFormDetails.Lastname,
        confirm_password: this.state.signupFormDetails["Confirm password"],
      })
      .then((response) => {
        if (response.status <= 250) {
          console.log(response.status);
          const username = response.data['username']
          this.setState({ username })
          this.setState({ signupStatus: true });
        }
      })
      .catch((error) => {
        const errorKey = Object.keys(error.response.data);

        const errorDictionary = this.state.signupErrorDetails;
        errorDictionary[errorKey] = error.response.data[errorKey];
        this.setState({ signupErrorDetails: errorDictionary });
        console.log("status code: ", error.response.status);
        console.log("error: ", this.state.signupErrorDetails);
      });

    console.log("Data: ", this.state.signupFormDetails);
  };

  render() {
    const fields = [
      "Firstname",
      "Lastname",
      "Email",
      "Password",
      "Confirm password",
    ];

    const imgStyle = {
      minHeight: "100vh",
    };

    return (
      <React.Fragment>
        <div className="row">
          <div style={imgStyle} className="col-6">
            <img src={destination_3} alt="" />
          </div>
          <div className="col-5 text-white form-group">
            {fields.map((field) => (
              <div key={field} className="ml-5">
                <br />
                <label>{field}:</label> <br />
                <div className="bg bg-danger">
                  {this.state.signupErrorDetails[field.toLowerCase()]}
                </div>
                <input
                  className="form-control"
                  type="text"
                  onChange={this.handleChange}
                  name={`${field}`}
                  value={this.state.signupForm[field]}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-8 float-right"></div>

          <div className="col-2 mb-5 float-right">
            <Button
              signupHandler={this.handleSignup}
              action="signup"
            />
            {this.state.signupStatus === true ? 
                <Redirect to="/dashboard" />
             : 
                <Redirect to={{ 
                    pathname:"/signup", state:{username:this.state.username} 
                }} />
            }
          </div>
        </div>

      </React.Fragment>
    );
  }
}
export default SignIn;
