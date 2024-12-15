import React from 'react'
import { Routes,Route } from 'react-router-dom';
import {Home1}  from './components/Home1'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar';
import Product from './components/Product';
import Shirts from './components/Shirts';
import Jeans from './components/Jeans';
import Users from './components/Users';
import UsersDetails from './components/UsersDetails';
import Admin from './components/Admin';
import PagenotFound from './components/PagenotFound'
import Search from './components/Search'
import Eventhandle from './components/Eventhandle'
import Lifecycle from './components/Lifecycle'
import Update1 from './components/Update1'
import Shouldcomp from './components/Shouldcomp'
import Parentcomp from './components/Parentcomp'
import Propsstate from './components/Propsstate'
import UseEffect from './components/UseEffect'
import FetchAPI from './components/FetchAPI'
import Unmount1 from './components/Unmount1'
import UseEff from './components/UseEff'




function Routingpage(){

    return(
        <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home1/>}/>
            
            <Route path='/about' element={<About/>}/>
            <Route path='/product' element={<Product/>}>
                <Route index element={<Shirts/>}></Route>
                <Route path='shirts' element={<Shirts/>}/>
                <Route path='jeans' element={<Jeans/>}/>
            </Route>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/users' element={<Users/>}>
                    <Route path=':id' element={<UsersDetails/>}/>
                    <Route path='admin' element={<Admin/>}/>
            </Route>
            <Route path='/search' element={<Search/>}/>
            <Route path='*' element={<PagenotFound/>}/>
            <Route path='/eventhandle' element={<Eventhandle name="rohit"/>}/>
            <Route path='/lifecycle' element={<Lifecycle city="mumbai" name="rohit"/>}/>
            <Route path='/update' element={<Update1 city="mumbai"/>}/>
            <Route path='/shouldcomp' element={<Shouldcomp city="mumbai"/>}/>
            <Route path='/parentcomp' element={<Parentcomp/>}/>
            <Route path='/propsstate' element={<Propsstate name="sap">

                <ol>
        <li>Item1</li>
        <li>Item1</li>
        <li>Item1</li>
      </ol>

            </Propsstate>}/>
            <Route path='/fetchapi' element={<FetchAPI/>}/>
            <Route path='/UseEffect' element={<UseEffect/>}/>
            <Route path='/unmount1' element={<Unmount1/>}/>
            <Route path='/useEff' element={<UseEff/>}/>

           
        </Routes>           
        </>
    )
}
export default Routingpage;