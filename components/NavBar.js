import React, { Component } from 'react';
import { AppStateContext } from "../AppGlobalState";
import Link from "next/link"
function NavBar(props) {
 
  
    return (
        <div className="navBar-container"   >
            <img alt="Logo" className="navBar-logo" src='https://s3-eu-west-1.amazonaws.com/wuzzuf/files/company_logo/Gebhaly-com-Egypt-32768-1593097553.png' />
            <span style={{display:"flex",alignItems:"center"}}>
                <Link href="cartpage">Go To Cart </Link>
            </span>

        </div>
    );
}
export default NavBar