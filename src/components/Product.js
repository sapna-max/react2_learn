import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

function Product(){
    return(
        <>
        <h1>This is Product Page</h1>
        <nav className="product-nav">
        <NavLink to='shirts'>Shirt</NavLink>
        <NavLink to='jeans'>jeans</NavLink>     
        </nav>
        <Outlet/>
        </>       
    )
}

export default Product