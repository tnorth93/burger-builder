import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
  return (
    <div>
      <h1> Eatin' good in the neighborhood</h1>
      <div style={{width: '300px', height: '300px', margin: 'auto'}}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button
        btnType="Danger"
        clicked>Cancel</Button>
      <Button
        btnType="Success"
        clicked>Continue</Button>
    </div>
  )
}

export default checkoutSummary;