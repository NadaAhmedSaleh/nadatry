import React, { Component } from "react";
import { useState, useContext, useEffect } from "react";
import { AppStateContext } from "../AppGlobalState";
import { FaTrashAlt } from "react-icons/fa";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";

import Image from 'next/image'

function CheckOutItem(props) {

  const { cartItems,setCartItems } = useContext(AppStateContext);



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
 





  var i = props.item
  var isUpdateing = props.isUpdateing

    return i.neededQuantity > 0 ? (
      <div className="one-chosen-item-container">
        <div>{i.itemName}</div>
        <div>{i.neededQuantity + "X" + i.itemPrice + "$"}</div>
      
        <Image src={i.itemPhoto} alt="No image"  
         width =  "50px"
         height= "50px"
        ></Image>
        
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

export default CheckOutItem;
