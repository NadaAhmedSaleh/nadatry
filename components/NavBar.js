import React, { Component, useState,useEffect,useContext } from 'react';
import { AppStateContext } from "../AppGlobalState";
import Link from "next/link"
function NavBar(props) {

 
 
    const { cartItems } = useContext(AppStateContext);

       
  useEffect(() => {
    getTotalItems()
  }, [cartItems]);

    const[totalItems,setTotalItems]= useState(0);
    const getTotalItems=()=>{
       var totalItems = 0
        cartItems.map(i=>totalItems+=i.neededQuantity)
        setTotalItems(totalItems)

    }
  
    return (
        <div className="navBar-container"   >
            <img alt="Logo" className="navBar-logo" src='https://s3-eu-west-1.amazonaws.com/wuzzuf/files/company_logo/Gebhaly-com-Egypt-32768-1593097553.png' />
            <span style={{display:"flex",alignItems:"center"}}>
            <div className="navBar-link"> <Link  href="/">Products </Link></div>
            <div className="navBar-link"> <Link  href="/checkoutpage">Cart </Link></div>
            <div className="dot">{totalItems}</div>
            
            </span>

        </div>
    );
}
export default NavBar