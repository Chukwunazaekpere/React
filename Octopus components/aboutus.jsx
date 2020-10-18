import React from "react";


class AboutUs extends React.Component{
    constructor(props){
        super(props);

        this.aboutStyle = {
            backgroundColor: "red",
            // marginTop: 200,
            justifyContent: "center",
            alignItems: "center",
            maxHeigth: "20vh",
            fontStyle: "italic",

        }

    }

    render(){
        return(
            <div className="container-fluid">
                {/* <Navbar /> */}
                <div className="row">
                    <div className="col m-2 bg-dark text-white" style={ this.aboutStyle }>
                        <h3>We're devoted to serving in the field of engineering <br/>
                            with adept manpower, machineries and implementation - sequence <br/>
                            that meets with regulatory standards as well as effectiveness.
                            <br/><br/>
                            With the use of related engineering softwares in addition with on-site experience, <br/>
                            our designers are empowered to engineering and analysing system(s) which are descriptive <br/>
                            and proportionately mimics the behaviour of the actual system to be built.
                            <br/><br/>
                            We're glad you found us!

                        </h3>

                    </div>
                </div>
            </div>
        );
                
    }
}

export default AboutUs;