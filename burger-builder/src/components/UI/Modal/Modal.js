import React,{ Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {
  // const shouldComponentUpdate = (nextProps, nextState) => {
  //   return nextProps.show !== props.show || nextProps.children !== props.children;
  // };

  const cssClasses = [classes.Modal, props.show ? classes.ModalOpen : classes.ModalClosed];

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed}/>
      <div
        className={cssClasses.join(' ')}
        // style={{
          // transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          // opacity: this.props.show ? '1' : '0'
        // }}
        >
        {props.children}
      </div>
    </Aux>
  )
}


export default React.memo(
  Modal, 
  (prevProps, nextProps) => 
    nextProps.show === prevProps.show && 
    nextProps.children === prevProps.children 
);