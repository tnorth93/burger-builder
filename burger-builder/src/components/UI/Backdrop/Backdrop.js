import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = (props) => {
  const cssClasses = ['Backdrop', props.show ? classes.BackdropOpen : classes.BackdropClosed];
  return (
   props.show ? <div className={cssClasses.join(' ')} onClick={props.clicked}></div> : null
  );
}


export default backdrop;