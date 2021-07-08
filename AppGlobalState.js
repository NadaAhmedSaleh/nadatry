import React, { useState, createContext } from 'react'


export const AppStateContext = createContext()
export const AppStateProvider = props => {
    const [cartItems,setCartItems]=useState([])

    const updateQuantity = (id, newQuantity,allItems) => {
        var currentItem = allItems[id];
        var newCartItems = [];
        cartItems.map((i) => {
          i.id == id
            ? newCartItems.push({
                ...currentItem,
                neededQuantity: i.neededQuantity + newQuantity,
              })
            : newCartItems.push(i);
        });
        setCartItems(newCartItems);
        console.log(cartItems)
      };

  


   
    return (
        <AppStateContext.Provider value={{
            cartItems,setCartItems,updateQuantity}}>
            {props.children}
        </AppStateContext.Provider>
    )
}