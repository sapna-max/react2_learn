import React,{Component} from 'react'
import Childcomp from './Childcomp'


export default class Parentcomp extends Component{
    
    constructor(props){
        super(props)
        this.state={
            active:true
        }
        console.log("call Constructor");
     }

     changeState=()=>{
        console.log("button Clicked....");
        this.setState({
            active:false
        })
    } 
    
    render(){    
        console.log("call render......");
        return(
            <div>
                {this.state.active ? <Childcomp/> :<h1>components deleted</h1>}      
               <button onClick={this.changeState}>click</button>
            </div>
        )
    }
}