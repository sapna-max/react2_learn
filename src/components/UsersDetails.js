import { useParams } from "react-router-dom"


function UsersDetails(){
       const userId= useParams();
       const id=userId.id;
    return(
        <div>Users Details........{id}</div>
    )
}

export default UsersDetails