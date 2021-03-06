import { AppStateContext } from "../AppGlobalState";
import React from "react";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";

import { useState, useContext } from "react";

import Image from 'next/image'

function OneProductComponent(props) {
  const { updateQuantity ,cartItems} = useContext(AppStateContext);
  const [numberOfItems, setnumberOfItems] = useState(0);

  // on click add or remove change item quantity to the current quantity

  const OnCLickAddItem = () => {
    var newQuantity = numberOfItems + 1;
    setnumberOfItems(newQuantity);
  };
  const OnCLickRemoveItem = () => {
    var newQuantity = numberOfItems;
    if (numberOfItems > 0) newQuantity--;
    setnumberOfItems(newQuantity);
  };



  const onClickAddToCart = (id, newQuantity) => {
    updateQuantity(id, newQuantity, props.allItems);
    setnumberOfItems(0)
  };

  return (
    <div className="one-product-container">
      <div className="item-name-price-container">
        <div>
          <div className="item-name-price-name">{props.itemName}</div>
          <div className="item-name-price-category">{props.itemCategory}</div>
        </div>

        <div className="item-name-price-price">{props.itemPrice}</div>
      </div>
      <div className="item-photo-container" >
      <Image src={props.itemPhoto} alt="image not found"  width =  "96%"  
         height= "180px"></Image>
      </div>
      <div className="number-of-items-container">
      <BiMinusCircle
          className="add-sub-del-icon"
          onClick={OnCLickRemoveItem}
        />
        <div style={{ paddingTop: "5px" }}>{numberOfItems}</div>

       
         <BiPlusCircle
          className="add-sub-del-icon"
          onClick={OnCLickAddItem}
        />
      </div>

      <div
        className="add-to-cart-button"
        onClick={() => onClickAddToCart(props.id, numberOfItems)}
      >
        Add To Cart
        <FaCartPlus
          className="add-to-cart-icon"
        />
      </div>
    </div>
  );
}

export default OneProductComponent;
