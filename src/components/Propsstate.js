import { useState } from "react"

function Propsstate(props){
    const myArray=useState(props.name)
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{myArray[0]}</h1>
            <button onClick={()=>myArray[1]("Kumar")}>button</button>
        </div>
    )
}
export default Propsstate