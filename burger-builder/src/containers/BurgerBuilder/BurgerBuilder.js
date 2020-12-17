import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';
import axios from '../../axios-orders';

const BurgerBuilder = props => {
  const [purchasing, setPurchasing] = useState(false);

  const dispatch = useDispatch();

  const ings = useSelector(state => state.burgerBuilder.ingredients);
  const price = useSelector(state => state.burgerBuilder.totalPrice);
  const error = useElector(state => state.burgerBuilder.error);
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  const onIngredientAdded = ingName => dispatch(actions.addIngredient(ingName));
  const onIngredientRemoved = ingName => dispatch(actions.removeIngredient(ingName));
  const onInitIngredients = () => dispatch(actions.initIngredients());
  const onInitPurchase = () => dispatch(actions.purchaseInit());
  const onSetAuthRedirectPath = (path) => dispatch(actions.setAuthRedirectPath(path));
  
  useEffect(() => {
    onInitIngredients();
  }, [onInitIngredients]);


  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  const purchaseHandler= () => {
    if (isAuthenticated) {
      setPurchasing(true);
    } else {
      onSetAuthRedirectPath('/checkout');
      props.history.push('/auth');
    }
  }

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  }

  const purchaseContinueHandler = () => {
    onInitPurchase();
    props.history.push('/checkout');
  }

    const disabledInfo = {
      ...ings
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null;

    let burger = error ? <p>Ingredients cannot be loaded</p> : <Spinner />;

    if (ings) {
      burger = (
        <Aux>
          <Burger ingredients={ings} />
          <BuildControls
            ingredientAdded={onIngredientAdded}
            ingredientRemoved={onIngredientRemoved}
            disabled={disabledInfo}
            purchasable={updatePurchaseState(ings)}
            ordered={purchaseHandler}
            price={price}
            isAuth={isAuthenticated}/>
        </Aux>
      );
      orderSummary = (
        <OrderSummary
        ingredients={ings}
        price={price}
        purchaseCanceled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}/>
      );
    }

    return (
      <Aux>
        {/* <Modal show={state.purchasing} modalClosed={purchaseCancelHandler}> */}
        {purchasing ? <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
          {orderSummary}
        </Modal> : null}
        {burger}
      </Aux>
    );
}

export default withErrorHandler(BurgerBuilder, axios);