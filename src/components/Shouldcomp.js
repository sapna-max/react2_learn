import React,{Component} from 'react'


export default class Shouldcomp extends Component{

    
     constructor(props){
        super(props)
        this.state={
            name:"sap"
        }
        console.log("call Constructor");
     }

     changeState=()=>{
        console.log("button Clicked....");
        this.setState({
            name:"prem"
        })
    }
    static getDerivedStateFromProps(props,state){
        console.log("call getDerivedStateFromProps method");
        console.log(props);
        console.log(state); 
        return null
     }

     shouldComponentUpdate(nextprops,nextstate){
        console.log("call shouldComponentUpdate method");
        console.log(nextprops);
        console.log(nextstate);
        return true;
     }

     getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("call shouldComponentUpdate method");
        console.log(prevprops);
        console.log(prevstate);
        return "true";
     }

     componentDidUpdate(prevprops,prevstate,snapshot){
        console.log("call shouldComponentUpdate method");
        console.log(prevprops);
        console.log(prevstate);
        console.log(snapshot);
     }
    
    render(){    
        console.log("call render......");
        return(
            <div>
               <h1>{this.props.city}</h1>
               <h1>{this.state.name}</h1>
               <button onClick={this.changeState}>click</button>
            </div>
        )
    }
}