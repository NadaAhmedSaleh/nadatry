import React, { Component } from 'react';

import OneProductComponent from './OneProductComponent';

import { useState, useEffect, useContext } from 'react';


import { AppStateContext } from '../AppGlobalState';

import {getAllItems} from '../service'



function AllProductsComponent(props) {

  console.log(getAllItems())
  const [items, setItems] = useState([])
  
  const getItems=async()=>{
    var itemsArr =await  getAllItems()
    setItems(itemsArr)
  }

  const { setCartItems } = useContext(AppStateContext)

  // at the first render map all items with quantity = 0 

  useEffect(async () => {
    await getItems()
    var itemsWithQuan = []
    items.map((i) => { itemsWithQuan.push({ ...i, neededQuantity: 0 }) })
    setCartItems(itemsWithQuan)

  }, []);





  return (
    <div         className="allproducts-container"    >
      {items.map((i) => {
        return (
          <OneProductComponent id={i.id} allItems={items} itemName={i.itemName} itemCategory={i.itemCategory} itemPrice={i.itemPrice + "$"} itemPhoto={i.itemPhoto}></OneProductComponent>
        )
      })}

    </div>
  );

}

export default AllProductsComponent;