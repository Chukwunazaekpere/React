import React from 'react';
import { NavLink } from 'react-router-dom';


class Dashboard extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            items: {
                "Operations": '', 
                "Transport": '', 
                "Admin": '', 
                "Marine": '', 
                "Finance request": '', 
                "Mobile app": '', 
                "Import custom clearance": '', 
                "Export clearance": '',
                "Haulage": '',
                "Personal effect": ''
            }
        }

    }

    updateItemValue = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        }

    render(){
        const items = [
            "Operations", "Transport", "Admin", "Marine", 
            "Finance request", "Mobile app", 
            "Import custom clearance", "Export clearance",
            "Haulage", "Personal effect"
        ]
        
        const icons = [
            'fas fa-users', 'fas fa-truck', 'fas fa-user', 'fas fa-ship', 'fas fa-donate',
            'fas fa-mobile', 'fas fa-cloud', 'fas fa-download', 'fas fa-shopping-cart',
            'fas fa-home'
        ]

        const heightStyle = {
            minHeight: "15vh",
            minWidth: "50vh"
        };


        return(
            <div>
                <div className='row'>
                    <div className='col-12 bg bg-warning mt-2 mb-2 text-dark'>
                        <h3 className=' p-2 float-left'>Overview<hr /></h3>
                    </div> 
                </div>

                
                <div className='row'>

                        { 
                            items.map((item, index) =>
                                <div key={ item } className='col-6 align-content-center'>
                                    <div className='col-4 mr-5'>
                                    <NavLink to={`/${item}`} style={heightStyle} className='mb-3 btn btn-success btn-md'>
                                        <i className={icons[index]}> { item } </i>
                                    </NavLink>
                                    </div>

                                </div>
                            ) 
                            
                        }
                </div>
            </div>
        );

    }
};

export default Dashboard;