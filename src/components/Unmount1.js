import React, { Component } from 'react';
import Childunmount from './Childunmount'

class Unmount1 extends Component {
    constructor(){
        super();
        this.state={
            active:true
        }
        console.log("constructor......");
    }

    changecom=()=>{
        this.setState({
            active:false
    })
    }

    render() {
        console.log("Render1........");
        return (
            <div>
             
            {this.state.active ? <Childunmount/>:<h1>Delete Comp</h1>}
            <button onClick={this.changecom}>Button</button>
            </div>
        );
    }
}

export default Unmount1;
