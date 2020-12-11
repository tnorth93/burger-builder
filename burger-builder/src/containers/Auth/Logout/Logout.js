import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

const Logout = props => {
  useEffect(() => {
    props.onLogout(props.history);
  }, []);


  return <Redirect to="/"/>;
};

const mapDispatchToprops = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout()),
  }
}

export default connect(null, mapDispatchToprops)(Logout);