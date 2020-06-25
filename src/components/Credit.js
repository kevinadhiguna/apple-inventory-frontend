import React, { Component } from 'react';

class Credit extends Component{
    render(){
        return(
            <div>
                <p className="CreditTagline">Credit</p>
                <div className="Kevin">
                    <img
                        src={require('../images/kevinAdhiguna.jpg')}
                        alt="Kevin Adhiguna"
                        className="KevinPhoto"
                        />
                    <div className="ProfileContent">
                        <p className="KevinName">Kevin Akbar Adhiguna</p>
                        <a href="https://github.com/kevinadhiguna">
                            <img 
                                src={require('../images/Git.png')}
                                alt="Git"
                                className="GithubLogo1" 
                                />
                        </a>
                    </div>
                </div>
                <div className="Alex">
                    <div className="ProfileContent">
                        <p className="AlexName">Alex the Enterprenerd</p>
                        <a href="https://github.com/GalloDaSballo">
                            <img 
                                src={require('../images/Git.png')}
                                alt="Git"
                                className="GithubLogo2" 
                                />
                        </a>
                    </div>
                    <img
                        src={require('../images/alexTheEnterprenerd.png')} 
                        alt="Alex The Enterprenerd"
                        className="AlexPhoto"
                        />
                </div>
            </div>
        );
    }
}

export default Credit;
