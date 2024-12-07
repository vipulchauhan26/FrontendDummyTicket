//import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
//import { CiSearch } from "react-icons/ci";
//mport SubNavbar from "./SubNavbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
const Navbar = () => {

    const [userName, setUserName] = useState(null);
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.username) {
                setUserName(user.username);
            }
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUserName(null);
    };

//     const button = document.querySelector('#menu-button'); // Hamburger Icon
//     const menu = document.querySelector('#menu'); // Menu
    
//     button.addEventListener('click', () => {
//       menu.classList.toggle('hidden');

// });
const navigation = [
    { name: 'Dummy Tickets', href: '/', current: true },
    { name: 'About Us', href: '/about-us', current: false },
    { name: 'Faq', href: '/faqs', current: false },
    { name: 'Contact Us', href: '#', current: false },

  
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }  
    return (
        <>
        <div className="navbar-container px-[2%] sm:px-[5.5%] md:px-[5.5%] lg:px-[5.5%] xl:px-[5.5%] py-px-[1%] sm:py-px-[5px 0]  md:py-px-[5px 0]  lg:py-px-[5px 0] xl:py-px-[5px 0] items-center sticky top-0 z-10 bg-white shadow-[5px_2px_10px_rgba(0,0,0,0.3)]">
        <Disclosure as="nav" className=" w-[100%]">
     
        <div className="relative flex h-16 items-center justify-between">
      
          <div className="flex items-center sm:items-stretch sm:justify-start w-[100%]">
            <div className="flex shrink-0 items-center">
              <Link to="/"><img
                alt="Your Company"
                src="images/trip-cafe.jpg"  
                className="h-8 sd:h-8 md:h-8 lg:h-8 xl:h-10 w-auto"
              /></Link>
            </div>
           
         
          </div>
          <div className="flex">
          <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    style={{ whiteSpace:'nowrap'}}
                    className={classNames(
                      item.current ? 'border-b-2  border-b-[#cc2c21]  text-[#cc2c21] ' : 'text-black  hover:text-[#cc2c21] hover:border-b-2 hover: border-b-[#cc2c21]',
                      'px-3 py-2 text-sm font-medium ',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
            </div>
            <div className="right-container flex">
                    {/* <span className="mx-[1vw] border rounded-full border-slate-500 p-2">
                        <CiShoppingCart size={25} />
                    </span> */}
                    {userName ? (
                        <div 
                            className="relative mx-[1vw] border rounded-full border-slate-500 p-2 cursor-pointer"
                            onMouseEnter={() => setDropdownVisible(true)}
                            onMouseLeave={() => setDropdownVisible(false)}
                        >
                            <CiUser size={25} />
                            {isDropdownVisible && (
                                <div className="dropdown absolute top-full right-0 mt-2 w-48 p-2 bg-white border border-gray-300 rounded shadow-lg">
                                    <p className="text-center text-sm font-medium mb-2">{userName}</p>
                                    <p 
                                        className="dropdown-item text-center text-sm py-2 cursor-pointer hover:bg-gray-100"
                                        onClick={handleLogout}
                                    > 
                                        Logout
                                    </p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="mx-[1vw] w-24 border rounded-md bg-[#cc2c21] text-white p-2">
                                Login
                            </button>
                        </Link>
                    )}


      
      
                </div>
                </div>
            <div className=" inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center  p-2 text-[#cc2c21]  hover:bg-[#cc2c21] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          
        </div>
    
        <DisclosurePanel className="sm:hidden bg-white">
        <div className="space-y-1 px-2 pb-3 pt-2 ">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'border-b-2  border-b-[#cc2c21]  text-[#cc2c21] ' : 'text-black  hover:text-[#cc2c21] hover:border-b-2 hover: border-b-[#cc2c21]',
                      'block px-3 py-2 text-sm font-medium  flex',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    
      
    </Disclosure>
    </div>

           {/* <div className="navbar-container flex justify-between px-[10%] py-[1%] items-center sticky top-0 z-10 bg-white">
                <div className="brand-name-container">
                    <div  className="w-[100px] sm:w-[150px] md:w-[150px] lg:w-[150px] xl:w-[150px]">
                <Link to="/"><img src="images/trip-cafe.jpg" className="w-[100%]" alt="logo"/></Link></div>
                </div>

               <div className="search-container flex items-center border border-slate-500 w-[50%] p-2 rounded-md bg-gray-200">
                    <CiSearch size={25} />
                    <input type="text" placeholder="Search attraction,activities and more" className="w-full border-none outline-none ml-2 bg-gray-200" />
                </div> 

<div className="hidden w-full md:flex md:items-center md:w-auto  absolute sm:static lg:static xl:static inset-x-0 w-[100%]" id="menu">
          <ul
            className="
              text-base text-gray-700
              pt-4
              md:flex
              md:justify-between
              md:pt-0"
          >
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" to="/"
                >Features</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" to="/"
                >Pricing</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" to="/"
                >Customers</Link>
            </li>
            <li>
              <Link className="md:p-4 py-2 block hover:text-purple-400" to="/"
                >Blog</Link>
            </li>
          </ul>
        </div>
             

            </div>  */}
            {/* <hr /> */}
            {/* <SubNavbar /> */}
        </>
    )
}

export default Navbar;