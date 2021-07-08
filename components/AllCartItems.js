import React, { Component } from "react";
import { useState, useContext, useEffect } from "react";
import { AppStateContext } from "../AppGlobalState";
import CheckOutItem from "./CheckOutItem";

import NavBar from './NavBar'

function Cart() {

  var shippingCost = 100;

    const [isUpdateing, setIsUpdating] = useState(false);
    const { cartItems,setCartItems } = useContext(AppStateContext);
    const [totalItemsPrice, setTotalItemsPrice] = useState(0);



    
  // update total price every time cart change
  useEffect(() => {updateTotalPrice(cartItems) }, [cartItems]);
 
  

  const updateTotalPrice = (cartItemss)=>{
    var totalPrice = 0
    cartItemss.map(i=>totalPrice+=i.neededQuantity*i.itemPrice)
    setTotalItemsPrice(totalPrice)
  }


  const onClickUpdate = () => {

    setIsUpdating(!isUpdateing);
  };

  return(
    <div>
    
    <div className="cart-page-container">
        <div className="cart-card">
        
        <div className="check-out-header">
          <div> Cart Items</div>
            <div className="update-cart-button" onClick={onClickUpdate}>{isUpdateing?"Confirm Update":"Update Cart"} </div>
            
        </div>
            {cartItems.map(i=>{return(
                <CheckOutItem key={i.id} item={i} isUpdateing={isUpdateing}></CheckOutItem>
            )})}
        </div>
        <div className="total-cost-card">
        <div className="check-out-header">{"Total amout : "+ (totalItemsPrice+shippingCost)+" $"}</div>
        <div className="one-cost-line"><div>Items</div><div>{totalItemsPrice+" $"}</div></div>
        <div className="one-cost-line"><div>Shipping</div><div>{shippingCost+" $"}</div></div>
            <div className="check-out-button">Go To Checkout</div>
        </div>
    </div>
    </div>
 
  )}

export default Cart



