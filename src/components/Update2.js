import React,{Component} from 'react'

export default class Update2 extends Component{
     constructor(props){
        super(props)
        this.state={
            name2:this.props.name
        }
     }

     static getDerivedStateFromProps(props,state){
        console.log("call getDerivedStateFromProps method");
        console.log(props);
        console.log(state);  
        
        if(props.name!==state.name2)
        {
            return {name2:props.name}
        }
        return null
     }

     shouldComponentUpdate(nextprops,nextstate){
        console.log("call shouldComponentUpdate method");
        console.log(nextprops);
        console.log(nextstate);
        return false;
     
        // if (nextprops == nextstate) {
        //     return false;
        //   } else {
        //     return true;
        //   }
     }


    render(){    
        console.log("render......");
            return(
            <div>
                 <h1>{this.state.name2}</h1>
                 
            </div>
        )
    }
}