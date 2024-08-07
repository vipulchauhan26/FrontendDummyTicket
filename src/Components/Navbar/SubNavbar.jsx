
import { BsPass } from "react-icons/bs";
import { Link } from "react-router-dom";
const SubNavbar = () => {
    return (
        <div className="subnavbar flex justify-between px-[10%] py-3 items-center text-base">
            <div className="category-container flex items-center ">
                <div className="flex items-center  cursor-pointer">
                    <span><BsPass size={20} style={{ color: '#ec601d' }}/></span>
                    <span className="ml-2 text-lg font-bold">Holidays</span>
                </div>
                <div className="flex items-center ml-10 cursor-pointer">
                    <span><BsPass size={20} style={{ color: '#ec601d' }}/></span>
                    <Link to="/dummy-tickets"><span className="ml-2 text-lg font-bold">Dummy Tickets</span></Link>
                    
                </div>
            </div>
        </div>
    )
}

export default SubNavbar;