import { useEffect,useState} from "react";

function FetchAPI(){

    const [posts,setposts]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((result)=>{
            setposts(result);
            })
            
    })
   
    return(  
        <>
        <h1>Fetch FetchAPI</h1>
        <ul>
            {
                posts.map((pst)=>{
                    return(
                        <>
                        <li>{pst.id}</li>
                        <li>{pst.title}</li>
                        </>
                    )
                })
            }
        </ul>
        </>
        
    )
}
export default FetchAPI



