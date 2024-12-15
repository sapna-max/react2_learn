import { useEffect ,useState } from "react"


function UseEffect(){
    let [count,setcount]=useState(0)

    useEffect(()=>{
        console.log("Hello I am UseEffect =" +count);
    },[])
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}> Button</button>
        </div>
    )
}

export default UseEffect