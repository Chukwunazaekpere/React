import React from "react";

import Button from '../Button';
import destinations from "./homeimg/destinations.jpg";

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            path: '',
        
        }
    
    }

    render(){
        return(
            <React.Fragment>

                <div className='row' >
                    <div className='col-6 float-right'>
                        <Button status='Login' />
                    </div>

                    <div className='col float-left'>
                        <Button status='Sign up' />
                    </div> <br/>

                    <div className='col' >
                        <img src={destinations} alt=""/>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default Home;
