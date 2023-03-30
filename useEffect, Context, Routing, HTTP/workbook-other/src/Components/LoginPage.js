import { useState, useEffect } from 'react';
import { useContext  } from 'react';
import { LoggedIn, User } from '../App';
import {dictionary, Translate} from './Layout';

function LoginPage({ handleLogin, handleInput }) {
    const LoggedIn2 = useContext(LoggedIn);
    const User2 = useContext(User);
    const currentLanguage = useContext(Translate);

    const handleInputChange = (e) => {
        handleInput(e.target.value)
    }        
    return (
      <>  
        <h1>
            {dictionary[currentLanguage].login}
        </h1>
        {LoggedIn2 ? 
            <div>
            {dictionary[currentLanguage].greeting2}, {User2}! {dictionary[currentLanguage].greeting3}
            </div> 
            : 
            <div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">{dictionary[currentLanguage].name}</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"               
                    onChange={handleInputChange}
                    />
                    <div id="emailHelp" className="form-text">{dictionary[currentLanguage].note}</div>
                </div>
            </div>
        }
        <button onClick={handleLogin}>{LoggedIn2 ? <>{dictionary[currentLanguage].signout}</> : <>{dictionary[currentLanguage].login}</>}</button>
      </>
    );
  }
  
  export default LoginPage;
  