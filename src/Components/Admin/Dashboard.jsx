import { MdDashboard } from "react-icons/md";

const Dashboard = () => {
    return (
        <div className="navbar-container w-[20vw] bg-white h-[100vh]  sticky top-0">
            <div className="navinner p-2">
                <div className="logo text-center text-4xl font-bold">TripCafe</div>

                <hr className="border-t border-gray-300 my-4" />

                <div className="item-container flex flex-col gap-6">
                    <div className="group flex items-center cursor-pointer p-2 hover:bg-gray-400 hover:rounded-lg">
                        <span><img src="/images/dashboard-svgrepo-com.svg" alt="" className="w-10"/></span>
                        <span className="text-2xl ml-3 relative ">
                            Dashboard
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </div>
                    <div className="group flex items-center cursor-pointer p-2 hover:bg-gray-400 hover:rounded-lg">
                        <span><img src="/images/dashboard-svgrepo-com.svg" alt="" className="w-10"/></span>
                        <span className="text-2xl ml-3 relative">
                            Dashboard
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </div>
                    <div className="group flex items-center cursor-pointer p-2 hover:bg-gray-400 hover:rounded-lg">
                        <span><img src="/images/dashboard-svgrepo-com.svg" alt="" className="w-10"/></span>
                        <span className="text-2xl ml-3 relative">
                            Dashboard
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </div>
                    <div className="group flex items-center cursor-pointer p-2 hover:bg-gray-400 hover:rounded-lg">
                        <span><img src="/images/dashboard-svgrepo-com.svg" alt="" className="w-10"/></span>
                        <span className="text-2xl ml-3 relative">
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
