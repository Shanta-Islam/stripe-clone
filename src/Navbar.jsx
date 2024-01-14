
import logo from '../src/assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import { RiArrowDropRightLine, RiArrowRightLine } from "react-icons/ri";
import { useState } from 'react';


const Navbar = () => {
  const [buttonHover, setButtonHover] = useState(false);
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };
  return (
    <nav className='mx-6' onMouseOver={handleSubmenu}>
      <div className='flex justify-between items-center'>
        <div className='lg:flex contents'>
          <img src={logo} alt='logo' className="w-16 cursor-pointer" />
          <button className='btn lg:hidden' onClick={openSidebar}>
            <FaBars />
          </button>
          <div
            className="nav-links duration-500 lg:static absolute  md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
            <ul className="lg:flex hidden   gap-8">
              <li>
                <button className='link-btn' onMouseOver={displaySubmenu}>
                  Products
                </button>
              </li>
              <li>
                <button className='link-btn' onMouseOver={displaySubmenu}>
                  Solutions
                </button>
              </li>
              <li>
                <button className='link-btn' onMouseOver={displaySubmenu}>
                  Developers
                </button>
              </li>
              <li>
                <button className='link-btn' onMouseOver={displaySubmenu}>
                  Resources
                </button>
              </li>
            </ul>

          </div>
        </div>
        <div className='lg:flex hidden'>
          <button className=" text-white  px-4 flex items-center justify-center" onMouseEnter={()=>setButtonHover(!buttonHover)} onMouseLeave={()=>setButtonHover(buttonHover)}>
            Contact sales
            {!buttonHover ? <RiArrowDropRightLine className='text-2xl' /> : <RiArrowRightLine />}
          </button>
          <button className="bg-[hsla(0,0%,100%,0.2)] text-white  px-4 py-0.5 rounded-[16.5px] flex items-center justify-center" >
            Sign in
            {!buttonHover ? <RiArrowDropRightLine className='text-2xl' /> : <RiArrowRightLine />}
          </button>
        </div>

      </div>


    </nav>
  );
};

export default Navbar;
