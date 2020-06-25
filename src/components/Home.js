import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
            <div>
                <div className="Greeting">
                    <p>Hello!</p>
                    <p>Welcome to Inventory Management System</p>
                </div>
                <div className="Imgs">
                    <div className="Up">
                      <img 
                        src={require('../images/iPhone.png')}
                        alt="iPhone_img"
                        className="iPhone_img" 
                        />
                      <img 
                        src={require('../images/macBookPro.png')}
                        alt="macBookPro_img"
                        className="macBookPro_img" 
                        />
                    </div>
                    <div className="Down">
                      <img 
                        src={require('../images/appleWatch.png')}
                        alt="appleWatch_img"
                        className="appleWatch_img" 
                        />
                      <img 
                        src={require('../images/iMac.png')}
                        alt="iMac_img"
                        className="iMac_img"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
