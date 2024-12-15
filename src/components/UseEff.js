
import React , {useEffect, useState} from 'react';
import './navbar.css'


const UseEff = () => {
  const [data,setdata]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((result)=>{
            console.log(result);
            setdata(result)
        })
    },[])

    return (
        <div>
            <h1>Data</h1>
            {
            data.map((item)=>{
                return(
                    <>
                    <div class="setdata">
 <div>{item.title}</div>
 <div>{item.body}</div>  
                    </div>
                                   
                             
                    </>
                )

            })
            
            }
        </div>
    );
}

export default UseEff;
