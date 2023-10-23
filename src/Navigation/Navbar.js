import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "../Content/Home";
import About from "../Content/About";
import Services from "../Content/Services";
import Contact from "../Content/Contact";
import {
    HiHome,
    HiUser
} from 'react-icons/hi';
  
import {
    HiEnvelope,
    HiViewColumns
} from 'react-icons/hi2'
  
  
  const navdata = [
    { name: "Home", path: '/', icon: <HiHome />, element: <Home />},
    { name: "About", path: "/about", icon: <HiUser />, element: <About />},
    { name: "Services", path: "/services", icon: <HiViewColumns />, element: <Services />},
    { name: "Contact", path: "/contact", icon: <HiEnvelope />, element: <Contact />}
  ];

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    return(
        <div className="bg-site-bg w-full h-screen bg-cover bg-no-repeat text-white ">
        <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md
        xl:h-screen'> 
            <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8
            bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
                {navdata.map((link, index) => {
                    return <Link className={`${link.path === pathname && 'text-yellow-500'}`} to={link.path}>{link.icon}</Link>
                })}
            </div>
        </nav>

        <Routes>
            {navdata.map((link) => {
                return <Route path={link.path} element={link.element}></Route>
            })} 
        </Routes>
        </div>
    );
}

export default Navbar;