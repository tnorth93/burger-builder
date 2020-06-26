import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
  componentDidMount () {
    axios.interceptors.request.use(req => {
      this.setState({error: null});
    })
    axios.interceptors.response.use(null, error => {
      this.setState({error: error});
    });
  }

    render() {
      return (
        <Aux>
          <Modal show={this.state.error}>
            {this.state.error.message}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }
}

export default withErrorHandler;