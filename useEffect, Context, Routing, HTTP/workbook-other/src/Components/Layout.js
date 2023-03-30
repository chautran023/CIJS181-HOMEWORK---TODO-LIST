import { NavLink, Outlet} from 'react-router-dom'; 
import Nav from './Nav'; 
import Footer from './Footer'; 
import { createContext , useState } from 'react';

export const Translate = createContext();

const en = {
  home: 'Home',
  login: 'Login',
  signout: "Sign Out",
  products: 'Products',
  profile: 'Profile',
  greeting: "Welcome, Guest!",
  greeting2: "Hi",
  greeting3: "You're logged in!",
  userprofile: "User Profile",
  aboutme: "About Me",
  editprofile: "Edit Profile",
  name: "Your Name",
  note: "We'll never share your information with anyone else.",
}
const vi = {
  home: 'Trang chủ',
  login: 'Đăng nhập',
  signout: "Đăng xuất",
  products: 'Sản phẩm',
  profile: 'Lý lịch',
  greeting: "Xin chào, Khách!",
  greeting2: "Chào bạn",
  greeting3: "Bạn đã đăng nhập thành công!",
  userprofile: "Lý lịch người dùng",
  aboutme: "Lý lịch",
  editprofile: "Chỉnh sửa lý lịch",
  name: "Họ Tên",
  note: "Thông tin của bạn được bảo mật."
}

export const dictionary = {
  en, vi,
}

export default function Layout(){
    const [ currentLanguage, setCurrentLanguage ] = useState('en');
    const handleSelect = (option) => {
        setCurrentLanguage(option);
    }
    return (
        <>
        <Translate.Provider value={currentLanguage}>
            <Nav />
            <div className='container'>
                <Outlet />
            </div>
            <div>
                <Footer handleSelect={handleSelect}/>
            </div>
        </Translate.Provider >
        </>
    )
}