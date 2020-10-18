import React from "react";


class ProductList extends React.Component{
    constructor(props){
        super(props);

        this.contentStyle = {
            minHeight: "100vh",
        }
    }

    render(){
        return (
            <div className="bg-img card m-1 p-1 bg-dark text-white" style={ this.contentStyle }>
                <h4 className="bg-success p-1 m-1">Engineering design, services and consultancy</h4>
            </div>
        );
    }
}

export default ProductList;