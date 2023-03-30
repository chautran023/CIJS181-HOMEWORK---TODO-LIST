import { NavLink, Outlet} from 'react-router-dom'; 
import { useContext  } from 'react';
import { LoggedIn, User } from '../App';
import {Translate} from './Layout';

export default function Footer({handleSelect}) {
    const currentLanguage = useContext(Translate);
    const handleSelectLanguage = (e) => {
        handleSelect(e.target.value)
    }
    return (
        <footer className='position-fixed bottom-0 start-50 translate-middle-x'>
            <select className="form-select" aria-label="Default select example"
            value = {currentLanguage}
             onChange={handleSelectLanguage}
            >
            <option value={"vi"}>VI</option>
            <option value={"en"}>EN</option>
            </select>
        </footer>
    )
}