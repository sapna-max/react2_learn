import React ,{Component} from 'react'

export default class Employee extends Component{
    state={
        name:this.props.name,
        counter:1
    }
    
    changename(){
        this.setState({
            name:"Welcome to our channel",
            counter:this.state.counter+1
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <h1>{this.state.name}</h1>
                <input type="button" value="click" onClick={()=>this.changename()}/>
            </div>
        )
    }
}