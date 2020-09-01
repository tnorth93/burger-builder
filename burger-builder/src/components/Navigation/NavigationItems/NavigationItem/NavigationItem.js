import React from 'react';
import classes from './NavigationItem.module.css';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <Router>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}>{props.children}</NavLink>
    </Router>
  </li>
);

export default navigationItem;