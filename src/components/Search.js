import { useSearchParams } from "react-router-dom"

//http://localhost:3000/search?q=sw&age=21
function Search(){
    const [searchparams,setsearchparams]=useSearchParams();
    const handleSearch=(e)=>{
        e.preventDefault();
        const data=searchparams.get('q');
        const age=searchparams.get('age');
        // alert(data);
        // alert(age);
        alert(data+" "+age);
     
    }
    return(
        <>
              <div>This is Search Page</div>
              <br/>
              <button onClick={()=>setsearchparams({q:"Kumar"})}>update url String</button>
              <form onSubmit={handleSearch}>
                <label> Search :  </label>
                <input type="text" placeholder="Search" onChange={(e)=>setsearchparams({q:e.target.value})}/>
                <br/><br/>
                <input type="submit" value="search"/>
                <input type="button" value="Reset" onClick={()=>setsearchparams({})}/>
              </form>
        </>
  
    )
}
export default Search