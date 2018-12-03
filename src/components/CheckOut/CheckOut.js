import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import './CheckOut.scss';

class CheckOut extends Component {
    constructor() {
        super();
        this.state = {
            total: 8
        }
    }

onToken = (stripeToken) =>{
    console.log('onToken', stripeToken)
    axios.post('/api/charge',
     {
        method: 'POST',
        body: stripeToken,
        amount: this.state.total * 100
     })
    }

  render() {
    return (
      <div>
        <StripeCheckout
            token={this.onToken}
            stripeKey="pk_test_LjNm06RplXdJCIdfZJ7f9gTV"
            card='424242424242424242'
        />  
      </div>
    )
  }
}

export default CheckOut;
