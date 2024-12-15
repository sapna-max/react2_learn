import React,{Component} from 'react'

export default class Parentcomp extends Component{

    componentWillUnmount(){
        console.log("call componentWillUnmount........");
    }
  
    
    render(){    
        console.log("call render......");
        return(
            <div>
              <h1>Unmount components</h1>
            </div>
        )
    }
}