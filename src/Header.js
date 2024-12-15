
import headerhead from './header.module.css';

function Header(){
    return(
        <>
        <h1 className={headerhead.header}>Header</h1>
        <ul>
            <li>Home</li>
            <li>contact</li>
            <li>about</li>
            <li>service</li>
        </ul>
        </>
    )
}

export default Header;