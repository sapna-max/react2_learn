import React ,{Component} from 'react'

export class House extends Component{
    render(){
        // this.props.name="sap21";
        return(
            <div>
                hi {this.props.name} age:{this.props.age}
                {this.props.children}
                <House2/>
            </div>
        )
    }
}

export class House2 extends Component{
    render(){
        // this.props.name="sap21";
        return(
            <div>
                hi {this.props.name} age:{this.props.age}
                {this.props.children}
            </div>
        )
    }
}
