import React, { Component } from 'react';

import * as actions from '../../../store/actions/index';

class Logout extends Component {
  render () {
    return ();
  };
};

const mapDispatchToprops = dispatch => {
  return {
    onLogout: () => dispatch()
  }
}

export default Logout;