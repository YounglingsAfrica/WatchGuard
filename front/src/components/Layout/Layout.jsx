import {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import User_navbar from '../navbar/User_navbar';
import Header from '../Header/Header';
import './layout.css'

function Layout() {

  const [navVisible, setNavVisible] = useState(true);

  function handleResize () {
    const newWindowWidth = window.innerWidth;
    if (newWindowWidth < 768) {
      setNavVisible(false);
      
    } else {
      setNavVisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <div className={`grid ${navVisible ? 'grid-cols-page': 'grid-cols-nav'} `}>
      <div className="bg-[white] z-20 h-screen">
        <User_navbar/>
      </div>

      <div id='header' className="mt-[40px] z-10">

          <Header></Header>

          <div className="w-full h-full ">
            <Outlet/>
          </div>


      </div> 
      </div>
    </div>
  )
}

export default Layout