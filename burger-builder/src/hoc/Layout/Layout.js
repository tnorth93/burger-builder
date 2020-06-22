import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  drawerToggleClickedHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    });
  }

  // sideDrawerOpenedHandler = () => {
  //   this.setState({showSideDrawer: true})
  // }

  render () {
    return (
      <Aux>
        <Toolbar drawerToggleClickedHandler={this.drawerToggleClickedHandler}/>
        <SideDrawer
          status={this.state.showSideDrawer}
          toggled={this.drawerToggleClickedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}
  

export default Layout;
