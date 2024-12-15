
import {Link, Outlet} from 'react-router-dom'

function Users(){
    return(
        <>
        <h1>Users Details</h1>
        <h2> <Link to='/users/1'>User 1</Link></h2>       
        <h2><Link to='/users/2'>User 2</Link></h2>
        <h2><Link to='/users/3'>User 3</Link></h2>
        <br/>
        <h1><Link to='/users/admin'>Admin</Link></h1>

        <Outlet/>
        </>       
    )
}

export default Users