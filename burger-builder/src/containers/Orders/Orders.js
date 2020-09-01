import React, { Component } from 'react';
import axios from '../../axios-orders';

import Order from '../../components/Order/Order';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  }

  componentDidMount() {
    axios.get('/orders.json')
      .then(res => {
        this.setState({loading: false});
      })
      .catch(err => {
        this.setState({loading: false});
      })
  }

  render () {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}

export default Orders;