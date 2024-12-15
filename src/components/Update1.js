import React,{Component} from 'react'
import Update2 from './Update2';



export default class Update1 extends Component{

    
     constructor(props){
        super(props)
        this.state={
            name1:"sap"
        }
     }

    changeState=()=>{
        console.log("button Clicked....");
        this.setState({
            name1:"prem"
        })
    }
    
    render(){    
    
        return(
            <div>
               <Update2 name={this.state.name1}/>
               <button onClick={this.changeState}>click</button>
            </div>
        )
    }
}


// import { useState } from "react"
// function Update1(){
//     const [name, setname]=useState("sap")     //Destructing

//     let changestate=()=>{
//         setname("rohan")
//     }
//     return(
//         <div>     
//             <h1>{name}</h1>
//         <button onClick={changestate}>Update</button>
//         </div>
//     )
// }
// export default Update1

