import React from 'react';
import classes from './Cart.module.css';
const Cart = (props) => {

  return (
    <button>{props.children}</button>
  )
};

export default Cart;
