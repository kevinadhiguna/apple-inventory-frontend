import React, { Component } from 'react';
import axios from 'axios';

class AddProduct extends Component{
    state = {
        name: ''
    }
    handleSubmit = async(event) => {
        event.preventDefault()
        const {name} = this.state;

        //Async
        const createProductRest = await axios({
            method: 'POST',
            url: 'http://localhost:1337/products',
            data: {
                name
            }
        });

        if(createProductRest.status === 200){
            alert("Successfully created new product!");
            window.location = window.location.href;
        }
    }

    render(){
        const {name} = this.state;
        return(
            <div>
                <div>
                    <p className="NPtagline">Our biggest updates Ever.</p>
                </div>
                <div className="AddProduct">
                    <h3 className="NPtitle">Input a new product</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            name="name" 
                            value={name}
                            onChange={(event) => this.setState({name: event.target.value})} 
                            />
                        <button className="CreateButton" type="submit">Create new product</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddProduct;
