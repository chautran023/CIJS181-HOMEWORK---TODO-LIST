import {NavLink, Outlet} from 'react-router-dom'; 
import {dictionary, Translate} from './Layout';
import { useContext  } from 'react';

export function About() {
    const currentLanguage = useContext(Translate);
    return (
        <h3>{dictionary[currentLanguage].aboutme}</h3>
    )
}
export function EditProfile() {
    const currentLanguage = useContext(Translate);
    return (
        <h3>{dictionary[currentLanguage].editprofile}</h3>
    )
}

function UserProfile() {
    const currentLanguage = useContext(Translate);
    return (
        <>
      <h1>
        {dictionary[currentLanguage].userprofile}
      </h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
            <NavLink className={ ( { isActive } ) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/profile/about">{dictionary[currentLanguage].aboutme}</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className={ ( { isActive } ) => isActive ? "nav-link active" : "nav-link"} to="/profile/edit">{dictionary[currentLanguage].editprofile}</NavLink>
        </li>
        
    </ul>
    <Outlet></Outlet>
    </>
    );
  }
  
  export default UserProfile;
  