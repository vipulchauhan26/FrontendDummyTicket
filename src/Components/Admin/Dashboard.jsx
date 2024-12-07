import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
const Dashboard = () => {
    return (
        <div className="navbar-container w-[15vw] bg-[#1A1A3D] h-[100vh]  sticky top-0">
            <div className="navinner p-2">
                <div className="logo text-center text-4xl font-bold flex justify-center pt-2"> <Link to="/"><img alt="Your Company" src="images/trip-cafe-logo-admin.png"   className="h-8 m-[0 auto] w-auto"
              /></Link></div>

                <hr className="border-t border-gray-300 my-4" />

                <div className="item-container flex flex-col gap-2">
                    <div className="group flex items-center cursor-pointer p-2 hover:bg-gray-400 ">
                        <span><img src="/images/dashboard-svgrepo-com.svg" alt="" className="w-10"/></span>
                        <span className="text-2lg ml-3 relative text-[#fff] ">
                            Dashboard
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </div>
                    <div className="group flex items-center cursor-pointer p-2 hover:bg-gray-400 ">
                        <span><img src="/images/dashboard-svgrepo-com.svg" alt="" className="w-10"/></span>
                        <span className="text-2lg ml-3 relative text-[#fff]">
                            Dashboard
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </div>
                    <div className="group flex items-center cursor-pointer p-2 hover:bg-gray-400 ">
                        <span><img src="/images/dashboard-svgrepo-com.svg" alt="" className="w-10"/></span>
                        <span className="text-lg ml-3 relative text-[#fff]">
                            Dashboard
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </div>
                    <div className="group flex items-center cursor-pointer p-2 hover:bg-gray-400">
                        <span><img src="/images/dashboard-svgrepo-com.svg" alt="" className="w-10"/></span>
                        <span className="text-lg ml-3 relative text-[#fff]">
                            Dashboard
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </div>
                </div>


            </div>
        </div>

    )
}
export default Dashboard;
