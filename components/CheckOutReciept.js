import React, { Component } from "react";
import { useState, useContext, useEffect } from "react";
import { AppStateContext } from "../AppGlobalState";
import { FaTrashAlt } from "react-icons/fa";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";

function CheckOutReciept(props) {
  const [isUpdateing, setIsUpdating] = useState(false);
  const { cartItems,setCartItems } = useContext(AppStateContext);
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);

  // update total price every time cart change
  useEffect(() => {updateTotalPrice(cartItems) }, [cartItems]);
 


  const onCLickAdd=(id)=>{
    var newCartItems = []
    cartItems.map((i)=>{
      var currentItem = {...i};
      currentItem.neededQuantity++;
      currentItem.id == id?
      newCartItems.push(currentItem)
      :newCartItems.push(i)
    })
    setCartItems(newCartItems)
  }
 
  const onCLickRemove=(id)=>{
    var newCartItems = []
    cartItems.map((i)=>{
      var currentItem = {...i};
      currentItem.neededQuantity--;
      currentItem.id == id?
      newCartItems.push(currentItem)
      :newCartItems.push(i)
    })
    setCartItems(newCartItems)
  }
 

  const onCLickDelete=(id)=>{
    var newCartItems = []
    cartItems.map((i)=>{
      var currentItem = {...i};
      currentItem.neededQuantity=0
      currentItem.id == id?
      newCartItems.push(currentItem)
      :newCartItems.push(i)

    })
    setCartItems(newCartItems)
  }
 

  const updateTotalPrice = (cartItemss)=>{
    var totalPrice = 0
    cartItemss.map(i=>totalPrice+=i.neededQuantity*i.itemPrice)
    setTotalItemsPrice(totalPrice)
  }


  const onClickUpdate = () => {

    setIsUpdating(!isUpdateing);
  };

  function returnOneItem(i) {

    return i.neededQuantity > 0 ? (
      <div className="one-chosen-item-container">
        <div>{i.itemName}</div>
        <div>{i.neededQuantity + "X" + i.itemPrice + "$"}</div>
        <img
          src={i.itemPhoto}
          alt="No image"
          className="one-chosen-item-photo"
        ></img>
        {isUpdateing ? (
          <div className="update-icons-container{">
            <BiPlusCircle className=" add-sub-del-icon"  onClick={()=>onCLickAdd(i.id)}/>
            <BiMinusCircle className=" add-sub-del-icon" onClick={()=>onCLickRemove(i.id)} />
            <FaTrashAlt className=" add-sub-del-icon" onClick={()=>onCLickDelete(i.id)}/>
          </div>
        ) : (
          ""
        )}
      </div>
    ) : (
      <div />
    );
  }

  return (
    <div className="check-out-main-container">
      <div className="check-out-header">
        <div>{isUpdateing ? "" : "Total Price : " + totalItemsPrice + "$"}</div>
        <div className="check-out-buttons-containers">
          <div className="update-cart-button" onClick={onClickUpdate}>
            {isUpdateing ? "Confirm" : "Update"}
          </div>
          {isUpdateing ? (
            <div />
          ) : (
            <div className="confirm-cart-button">Checkout</div>
          )}
        </div>
      </div>

      <div className="check-out-sub-container">
        <div className="customer-info-container">
          <h1>nada</h1>
          <h1>nada</h1>
          <h1>nada</h1>
          <h1>nada</h1>
          <h1>nada</h1>
          <h1>nada</h1>
          <h1>nada</h1>
          <h1>nada</h1>
          <h1>nada</h1>
        </div>
        <div className="order-summary-container">
          <div className="order-summary-header">Order Summary</div>

          {cartItems.map((i) => {
            return returnOneItem(i);
          })}
        </div>
      </div>
    </div>
  );
}

export default CheckOutReciept;
