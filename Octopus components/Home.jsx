import React from "react";
import Sidebar from "./HomeComponents/sidebar";
import ProductList from "./HomeComponents/productlist";

import HVAC1 from "../site_images/HVAC1.PNG";


class Home extends React.Component{
  constructor(props){
    super(props)

    this.homeStyle = {
      fontStyle: "italic",
      
    }

    this.imageStyle = {
      borderRadius: "5rem",
      border: "0.35rem solid red"
    }

    this.state = {
      
      products: {
        name: "books",
        // product_image_url: "http://book.com",
      },

    };
  };

    render(){
        return(
          <div className="container-fluid">
            <div className="row p-2">
              
                {/* Place sidebar */}
              <div className="col-2 bg-info">
                <Sidebar />
              </div>
  
                {/* Place productlist */}
              <div className="col ml-2 p-1 bg-dark bg-img"> 
                <h3 style={ this.homeStyle } className="App-logo-spin text-white">
                  Welcome to ELs engineering...</h3><hr/>
                  
                  <img className="App-logo" style={ this.imageStyle } src={HVAC1} alt=""/> <br/>

                <ProductList products={this.state.products}/>
              </div>
            </div>
          </div>
        );
    }
}



export default Home;