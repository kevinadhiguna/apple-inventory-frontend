import React, { Component } from 'react';

class StockDetail extends Component{
    state = {
        show: false
    }
    
    render(){
        const {name, total, stockEvents} = this.props;
        const {show} = this.state;
        return(
        <div className="StockDetail" onClick={() => this.setState({show: !show}) } >
            <h3>Product : {name} | Total : {total} </h3>
            {show &&
                <div>
                    {stockEvents.map((event, i) => (
                        <div key={i} className="StockEventTable_Card">
                          <p> Id: {event.id} </p>
                          <p> Type: {event.type} </p>
                          <p> Quantity: {event.qty} </p>
                          <p> Product Name: {event.product.name} </p>
                        </div>
                    ))}
                </div>
            }
        </div>
        );
    }
}

export default StockDetail;
