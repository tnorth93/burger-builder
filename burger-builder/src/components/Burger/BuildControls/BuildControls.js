import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Lettuce', type: 'lettuce'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        // type={ctrl.type}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={()=> props.ingredientRemoved(ctrl.type)}
        disaslbe={props.disabled[ctrl.type]} />
    ))}
  </div>
)

export default buildControls;