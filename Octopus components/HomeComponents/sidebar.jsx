import React from "react";

class Sidebar extends React.Component{
    constructor(props){
        super(props);
        
        this.sidebarStyle = {
            listStyle: "none",
        }

    }
    

    render(){
        return(
            <div style={ this.sidebarStyle } className="side-bg-img">
                <h2 className="mt-2">Design & Consultancy</h2><hr/>
                <div className="float-left text-left">
                    <ul style={ this.sidebarStyle }>
                        <h5>
                            <li>Mechanical</li><br/>
                            <li>Structural</li><br/>
                            <li>Civil & Architectural</li>
                        </h5>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;