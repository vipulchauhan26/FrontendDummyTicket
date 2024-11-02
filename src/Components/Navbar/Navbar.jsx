import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import SubNavbar from "./SubNavbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    return (
        <>
            <div className="navbar-container flex justify-between px-[10%] py-[1%] items-center sticky top-0 z-10 bg-white">
                <div className="brand-name-container">
                    DummyTickets
                </div>

                <div className="search-container flex items-center border border-slate-500 w-[50%] p-2 rounded-md bg-gray-200">
                    <CiSearch size={25} />
                    <input type="text" placeholder="Search attraction,activities and more" className="w-full border-none outline-none ml-2 bg-gray-200" />
                </div>

                <div className="right-container flex">
                    <span className="mx-[1vw] border rounded-full border-slate-500 p-2">
                        <CiShoppingCart size={25} />
                    </span>
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
                            <button className="mx-[1vw] w-24 border rounded-md bg-[#ec601d] p-2">
                                Login
                            </button>
                        </Link>
                    )}
                </div>

            </div>
            <hr />
            <SubNavbar />
        </>
    )
}

export default Navbar;