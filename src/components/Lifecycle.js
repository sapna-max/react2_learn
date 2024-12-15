import React,{Component} from 'react'
import Lifecycle2 from './Lifecycle2'

export default class Lifecycle extends Component{
     constructor(props){
        super(props)
        this.state={
            name:"sap",
            color: "lightgreen"
        }
        console.log("mounting1 state");
     }


     componentDidMount(){
        console.log("Call  componentDidMount1")
        setTimeout(() => {
            this.setState({ color: "wheat" });
        }, 5000);
     }
    render(){    
        console.log("mounting1 render");   
        return(
            <div>
                 <h1>{this.state.name}</h1>
                 <h1  style={{
                        color: this.state.color,
                        backgroundColor: "rgba(0,0,0,0.88)",
                        textAlign: "center",
                        paddingTop: 20,
                        width: 400,
                        height: 80,
                        margin: "auto"
                    }}>{this.props.city}</h1>
                 <Lifecycle2 city="delhi"/>
            </div>
        )
    }
}