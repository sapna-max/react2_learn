import React from 'react'

function Hellomessage(props){
    console.log(props);
    // props.name="rehan"
    return(
        <>
         <div>Hello {props.name} {props.age}</div>
         {props.children}
        </>
       )
}

export default Hellomessage