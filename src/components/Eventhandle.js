
// function Eventhandle(props){

//     const hellofunction = (name)=>{
//         alert("Hello "+name);
//     }

//     return(
//         <div>
//             <input type="button" value="click" onClick={()=>hellofunction(props.name)}/>
//         </div>
//     )
// }

// export default Eventhandle  


import React,{Component} from 'react'

export default class Eventhandle extends Component{
     
    render(){
        const hellofunction=(name)=>{
            alert("Hello " +name);
        }
        return(
            <div>
                  <input type="button" value="click" onClick={()=>hellofunction(this.props.name)}/>
            </div>
        )
    }
}