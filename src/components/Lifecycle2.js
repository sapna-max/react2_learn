import React,{Component} from 'react'

export default class Lifecycle2 extends Component{
     constructor(props){
        super(props)
        this.state={
            name:"mounting2"
        }
        console.log("mounting2 state");
     }

     static getDerivedStateFromProps(props,state){
        console.log("call getDerivedStateFromProps method2");
        console.log(props);
        console.log(state);
        return null
     }

     componentDidMount(){
        console.log("Call  componentDidMount2")
     }
    render(){    
        console.log("mounting2 render");   
        return(
            <div>
                 <h1>{this.state.name}</h1>
                 <h1>{this.props.city}</h1>
            </div>
        )
    }
}