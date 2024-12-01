import { CiLocationOn } from "react-icons/ci";
const Section = ({ heading,image }) => {
    return (
        <div className="px-[10%] mt-16">
            <h1 className="text-3xl font-bold">{heading}</h1>
            <div className="cards-container flex  py-2 justify-between  mt-10">
                <div className="cards flex flex-col rounded-lg shadow-lg w-[20%] min-w-[200px] cursor-pointer overflow-hidden">
                    <span className="imagecontainer relative  rounded-t-lg">
                        <img src={image} alt="" className=" hover:scale-110 transition-scale duration-200 ease-linear object-cover object-center aspect-[4/3] rounded-t-lg" />
                    </span>
                    <div className="p-3 mt-4">
                        <span className=" text-lg font-bold">Title</span>
                        <span className="location-tag mt-4 flex items-center bg-orange-200 rounded-full w-[90px] p-2">
                            <span><CiLocationOn size={20} style={{ color: '#ec601d' }} /></span>
                            <span className="ml-2">Dubai</span>
                        </span>
                        
                        <div className="price flex justify-between mt-4">
                        
                            <span className="flex flex-col">
                                <p className=" text-xl font-bold">Rs 2987</p>
                                <p className=" text-base">Per Trip</p>
                            </span>
                            <button className=" hover:bg-[#e3733f] bg-[#ec601d] text-white py-3 px-5 rounded-lg text-lg font-bold">View Trip</button>
                        </div>
                    </div>
                </div>

                <div className="cards flex flex-col rounded-lg shadow-lg w-[20%] min-w-[200px] cursor-pointer overflow-hidden">
                    <span className="imagecontainer relative  rounded-t-lg">
                        <img src={image} alt="" className=" hover:scale-110 transition-scale duration-200 ease-linear object-cover object-center aspect-[4/3] rounded-t-lg" />
                    </span>
                    <div className="p-3 mt-4">
                        <span className=" text-lg font-bold">Title</span>
                        <span className="location-tag mt-4 flex items-center bg-orange-200 rounded-full w-[90px] p-2">
                            <span><CiLocationOn size={20} style={{ color: '#ec601d' }} /></span>
                            <span className="ml-2">Dubai</span>
                        </span>
                        
                        <div className="price flex justify-between mt-4">
                        
                            <span className="flex flex-col">
                                <p className=" text-xl font-bold">Rs 2987</p>
                                <p className=" text-base">Per Trip</p>
                            </span>
                            <button className=" hover:bg-[#e3733f] bg-[#ec601d] text-white py-3 px-5 rounded-lg text-lg font-bold">View Trip</button>
                        </div>
                    </div>
                </div>

                <div className="cards flex flex-col rounded-lg shadow-lg w-[20%] min-w-[200px] cursor-pointer overflow-hidden">
                    <span className="imagecontainer relative  rounded-t-lg">
                        <img src={image} alt="" className=" hover:scale-110 transition-scale duration-200 ease-linear object-cover object-center aspect-[4/3] rounded-t-lg" />
                    </span>
                    <div className="p-3 mt-4">
                        <span className=" text-lg font-bold">Title</span>
                        <span className="location-tag mt-4 flex items-center bg-orange-200 rounded-full w-[90px] p-2">
                            <span><CiLocationOn size={20} style={{ color: '#ec601d' }} /></span>
                            <span className="ml-2">Dubai</span>
                        </span>
                        
                        <div className="price flex justify-between mt-4">
                        
                            <span className="flex flex-col">
                                <p className=" text-xl font-bold">Rs 2987</p>
                                <p className=" text-base">Per Trip</p>
                            </span>
                            <button className=" hover:bg-[#e3733f] bg-[#ec601d] text-white py-3 px-5 rounded-lg text-lg font-bold">View Trip</button>
                        </div>
                    </div>
                </div>

                <div className="cards flex flex-col rounded-lg shadow-lg w-[20%] min-w-[200px] cursor-pointer overflow-hidden">
                    <span className="imagecontainer relative  rounded-t-lg">
                        <img src={image} alt="" className=" hover:scale-110 transition-scale duration-200 ease-linear object-cover object-center aspect-[4/3] rounded-t-lg" />
                    </span>
                    <div className="p-3 mt-4">
                        <span className=" text-lg font-bold">Title</span>
                        <span className="location-tag mt-4 flex items-center bg-orange-200 rounded-full w-[90px] p-2">
                            <span><CiLocationOn size={20} style={{ color: '#ec601d' }} /></span>
                            <span className="ml-2">Dubai</span>
                        </span>
                        
                        <div className="price flex justify-between mt-4">
                        
                            <span className="flex flex-col">
                                <p className=" text-xl font-bold">Rs 2987</p>
                                <p className=" text-base">Per Trip</p>
                            </span>
                            <button className=" hover:bg-[#e3733f] bg-[#ec601d] text-white py-3 px-5 rounded-lg text-lg font-bold">View Trip</button>
                        </div>
                    </div>
                </div>
                

                
            </div>
        </div>
    )
}

export default Section;