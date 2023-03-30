import { NavLink, Outlet} from 'react-router-dom'; 
import { useContext  } from 'react';
import { LoggedIn, User } from '../App';
import {dictionary, Translate} from './Layout';

export default function Nav(){
    const LoggedIn2 = useContext(LoggedIn);
    const User2 = useContext(User);
    const currentLanguage = useContext(Translate);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className={ ( { isActive } ) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/">{dictionary[currentLanguage].home}</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={ ( { isActive } ) => isActive ? "nav-link active" : "nav-link"} to="/login">{dictionary[currentLanguage].login}</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={ ( { isActive } ) => isActive ? "nav-link active" : "nav-link"} to="/products">{dictionary[currentLanguage].products}</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={ ( { isActive } ) => isActive ? "nav-link active" : "nav-link"} to="/profile">{dictionary[currentLanguage].profile}</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={ ( { isActive } ) => isActive ? "nav-link active" : "nav-link"} to="/homeworkuseeffect">useEffect</NavLink>
            </li>
            </ul>
        </div>
        {LoggedIn2 ? <h1 className='login-status'>{dictionary[currentLanguage].greeting2}, {User2}!</h1> : <h1>{dictionary[currentLanguage].greeting}</h1>}
        </div>
        </nav>
    )
}