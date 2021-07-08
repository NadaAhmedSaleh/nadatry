import React, { Component } from 'react';

import OneProductComponent from './OneProductComponent';

import { useState, useEffect, useContext } from 'react';


import { AppStateContext } from '../AppGlobalState';





function AllProductsComponent(props) {

  const [items, setItems] = useState([
    { id: 0, itemName: "Banana", itemPrice: 10, itemCategory: "Fruits", itemPhoto: "https://static.wixstatic.com/media/2cd43b_9d373e082ea8465aba48928ab83a6128~mv2_d_3063_3834_s_4_2.png/v1/fill/w_320,h_401,q_90/2cd43b_9d373e082ea8465aba48928ab83a6128~mv2_d_3063_3834_s_4_2.png", availableQuantity: 3 },
    { id: 1, itemName: "Monkey", itemPrice: 5, itemCategory: "Animals", itemPhoto: "https://images.squarespace-cdn.com/content/v1/5c458ca8b105986dd0814690/1550158006833-8UKMZIOBJFG1MO6P43QI/Monkey-Boy.png?format=1000w", availableQuantity: 10 },
    { id: 2, itemName: "Tulip", itemPrice: 8, itemCategory: "Flowers", itemPhoto: "https://www.iconpacks.net/icons/2/free-tulip-icon-1613-thumb.png", availableQuantity: 1 },
    { id: 3, itemName: "Rose", itemPrice: 8, itemCategory: "Flowers", itemPhoto: "https://image.flaticon.com/icons/png/512/4139/4139428.png", availableQuantity: 11 },
    { id: 4, itemName: "Cat", itemPrice: 10, itemCategory: "Animals", itemPhoto: "https://cdn.pixabay.com/photo/2020/11/15/18/51/cat-5746875_1280.png", availableQuantity: 13 },
    { id: 5, itemName: "Apple", itemPrice: 10, itemCategory: "Fruits", itemPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Red_apple.svg/768px-Red_apple.svg.png", availableQuantity: 0 },
  ])


  const { setCartItems } = useContext(AppStateContext)

  // at the first render map all items with quantity = 0 

  useEffect(() => {
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