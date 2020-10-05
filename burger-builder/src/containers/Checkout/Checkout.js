import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {
  
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render () {
    let summary = <Redirect to="/"/>
    if (this.props.ings) {
      summary = (
        <CheckoutSummary
          ingredients={this.props.ings}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}/>
      );
    }
    return (
      <div>
        {summary}
        <Route
          path={this.props.match.path + '/contact-data'}
          // component={ContactData}
          // Using render instead of component to send ingredients as a prop
          // render={(props) => (<ContactData ingredients={this.props.ings} price={this.props.price} {...props}/>)}
          component={ContactData} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
  }
}

export default connect(mapStateToProps)(Checkout);