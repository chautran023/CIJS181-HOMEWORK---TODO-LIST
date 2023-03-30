import logo from './logo.svg';
import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom';
import Layout from './Components/Layout';
import LoginPage from './Components/LoginPage';
import ProductsPage from './Components/ProductsPage';
import HomePage from './Components/HomePage';
import UserProfile, { About, EditProfile } from './Components/UserProfile';
import ProductDetailPage from './Components/ProductDetailPage';
import { createContext , useState } from 'react';
import HomeworkuseEffect , {WordCount, BackToTop} from './Components/HomeworkuseEffect';

export const LoggedIn = createContext('');
export const User = createContext('');

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(isLoggedIn === true ? false : true);
    }
    const [userInput, setUserInput] = useState('');
    const handleInput = (input) => {
      setUserInput(input);
    }   

  return (
    <>
    <LoggedIn.Provider value={isLoggedIn}>
      <User.Provider value={userInput}>
      <Routes>
        <Route element={<Layout />}>
          <Route path='' element={<HomePage />}></Route>
          <Route path='login' element={<LoginPage handleLogin={handleLogin} handleInput={handleInput} />}></Route>
          <Route path='products' element={<ProductsPage />}></Route>
          <Route path='products/:id' element={<ProductDetailPage />}></Route>
          <Route path='profile' element={<UserProfile />}>
            <Route path='' element={<About />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='edit' element={<EditProfile />}></Route>
          </Route>
          <Route path='homeworkuseeffect' element={<HomeworkuseEffect />}>
            <Route path='' element={<BackToTop />}></Route>
            <Route path='backtotop' element={<BackToTop />}></Route>
            <Route path='wordcount' element={<WordCount />}></Route>
          </Route>
          <Route path='*' element={<h1>NOT FOUND</h1>}></Route>
        </Route>
      </Routes>
      </User.Provider>
    </LoggedIn.Provider>
  </>
    );
}

export default App;
